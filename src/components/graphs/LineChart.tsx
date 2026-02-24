import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption, SeriesOption } from "echarts";

// Register Components
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer
]);

interface Props {
  config: any;
  data: {
    categories?: string[];
    series?: { name: string; data: number[] }[];
  };
}

export default function LineChartComponent({ config, data }: Props) {

  const categories = data?.categories || [];
  const series = data?.series || [];
  const baseSeries = config.options?.series || [];
  const { subType } = config;

  //  Merge JSON options.series + API returned series data
  let finalSeries: SeriesOption[] = series.map((s: any, i: number) => ({
    ...(baseSeries[i] || {}),   // style/config provided from JSON first
    ...s,                       // inject dynamic data from API
    name: s.name,
    type: "line",
    data: Array.isArray(s.data) ? s.data : []
  }));

  // Handle subtypes
  if (subType === "smooth") {
    finalSeries = finalSeries.map(s => ({ ...s, smooth: true }));
  }

  if (subType === "area") {
    finalSeries = finalSeries.map(s => ({ ...s, areaStyle: {} }));
  }

  if (subType === "stacked") {
    finalSeries = finalSeries.map(s => ({ ...s, stack: "total", areaStyle: {} }));
  }


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



  const options: EChartsOption = {
    ...safeOptions,

    tooltip: { trigger: "axis", ...safeOptions.tooltip },
    legend: { show: true, ...safeOptions.legend },
    xAxis: {
      type: "category",
       boundaryGap: subType === "area" || subType === "stacked" ? false : true,
      ...normalizedXAxis,   // user styles (boundaryGap etc.)
      data: categories      // engine always wins
    },
    yAxis: Array.isArray(userYAxis)
      ? userYAxis
      : {
        type: "value",
        ...normalizedYAxis
      },


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
