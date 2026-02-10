import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption, SeriesOption } from "echarts";

echarts.use([BarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer]);

// ---------- Waterfall generator ----------


function generateWaterfall(
  series: SeriesOption[],
  baseSeries: any[] = []
): SeriesOption[] {
  const main = series[0] as any;
  const values: number[] = Array.isArray(main?.data) ? main.data : [];

 let sum = 0;
const placeholder = values.map((_, i) => {
  if (i === 0) return 0;
  sum += values[i - 1] ?? 0;
  return sum;
});

  return [
    // Placeholder (offset)
    {
      ...(baseSeries[0] || {}),
      name: baseSeries[0]?.name || "",
      type: "bar",
      stack: "total",
      data: placeholder,
      itemStyle: {
        color: "transparent",
        borderColor: "transparent",
        ...(baseSeries[0]?.itemStyle || {})
      },
      emphasis: {
        itemStyle: {
          color: "transparent",
          borderColor: "transparent"
        }
      }
    },

    // Actual values
    {
      ...main,                      // data + name
      ...(baseSeries[1] || {}),     // style wins
      name: baseSeries[1]?.name || main?.name || "",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "inside",
        ...(baseSeries[1]?.label || {})
      }
    }
  ];
}




// ---------- COMPONENT ----------
export default function BarChartComponent({ config = {}, data = {} }: { config: any; data: any }) {

  const categories = data.categories || [];
  const series = data.series || [];
  const baseSeries = config.options?.series || [];
  const { subType } = config;

  // merge api + user config
  let finalSeries: SeriesOption[] = series.map((s: SeriesOption, i: number) => ({
    ...s,
    ...(baseSeries[i] || {}),
    name: s.name,
    type: (baseSeries[i] as any)?.type ?? "bar",
    data: Array.isArray(s.data) ? s.data : []
  }));

  if (subType === "stacked") {
    finalSeries = finalSeries.map(s => ({ ...s, stack: "total" }));
  }

  if (subType === "sorting" &&  finalSeries.length === 1) {
    finalSeries = finalSeries.map(s => ({ ...s, realtimeSort: true }));
  }

if (subType === "waterfall") {
  finalSeries = generateWaterfall(finalSeries, baseSeries);
}
  //  strip unsafe options
  const {
    xAxis: userXAxis,
    yAxis: userYAxis,
    series: _ignoredSeries,
    ...safeOptions
  } = config.options || {};

  const normalizedXAxis = Array.isArray(userXAxis)
    ? userXAxis[0]
    : userXAxis;

  const normalizedYAxis = Array.isArray(userYAxis)
    ? userYAxis[0]
    : userYAxis;

const isHorizontal =
  normalizedXAxis?.type === "value" ||
  normalizedYAxis?.type === "category";

const options: EChartsOption = {
  ...safeOptions,

  tooltip: { trigger: "axis", ...safeOptions.tooltip },
  legend: {show: true, ...safeOptions.legend },
  grid: { containLabel: true, ...safeOptions.grid },

  xAxis: isHorizontal
    ? {
        type: "value",
        ...normalizedXAxis
      }
    : {
        type: "category",
        ...normalizedXAxis,
        data: categories
      },

  yAxis: isHorizontal
    ? {
        type: "category",
        ...normalizedYAxis,
        data: categories
      }
    : Array.isArray(userYAxis)
      ? userYAxis
      : {
          type: "value",
          ...normalizedYAxis
        },

  series: finalSeries
};

  console.log("options",options);
  
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

