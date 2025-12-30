import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption, SeriesOption } from "echarts";

echarts.use([BarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer]);

// ---------- Waterfall generator ----------
const generateWaterfall = (series: SeriesOption[], config: any) => {
  const baseSeries = config.options?.series || [];
  const mainData: number[] = (series[0] as any)?.data || [];

  let sum = 0;
  const assist = mainData.map((_, i) => {
    if (i === 0) return 0;
    sum += mainData[i - 1] ?? 0;   // safe fallback
    return sum;
  });

  return [
    {
      ...baseSeries[0],
      type: "bar",
      data: assist,
      itemStyle: { color: "transparent", ...baseSeries[0]?.itemStyle }
    },
    {
      ...baseSeries[1],
      ...series[0],
      type: "bar",
      label: { show: true, position: "inside", ...baseSeries[1]?.label }
    }
  ];
};

// ---------- COMPONENT ----------
export default function BarChartComponent({ config = {}, data = {} }: { config: any; data: any }) {
console.log("BarChartComponent data",data);

  const categories = data.categories || [];
  const series = data.series || [];
  const baseSeries = config.options?.series || [];
  const { subType } = config;

  // merge api + user config
  let finalSeries: SeriesOption[] = series.map((s: SeriesOption, i: number) => ({
    ...(baseSeries[i] || {}),
    ...s,
    type: "bar"
  }));

  if (subType === "stacked") {
    finalSeries = finalSeries.map(s => ({ ...s, stack: "total" }));
  }

  if (subType === "sorting") {
    finalSeries = finalSeries.map(s => ({ ...s, realtimeSort: true }));
  }

  if (subType === "waterfall") {
    finalSeries = generateWaterfall(series, config);
  }

  const options: EChartsOption = {
    tooltip: { trigger: "axis", ...config.options?.tooltip },      // default -> user override
    legend: { ...config.options?.legend },
    grid: { containLabel: true, ...config.options?.grid },

    xAxis: {
      type: "category",
      ...config.options?.xAxis,
      data: categories                                           // dynamic last
    },

    yAxis: {
      type: "value",
      ...config.options?.yAxis
    },

    ...config.options,                                           // global override (optional)
    series: finalSeries
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      style={{ width: "100%", height: "100%" }}
    
    />
  );
}
