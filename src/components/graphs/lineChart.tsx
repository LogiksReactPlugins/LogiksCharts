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
  console.log("LineChartComponent data",data);
  const categories = data?.categories || [];
  const series = data?.series || [];
  const baseSeries = config.options?.series || [];
  const { subType } = config;

  //  Merge JSON options.series + API returned series data
  let finalSeries: SeriesOption[] = series.map((s: any, i: number) => ({
    ...(baseSeries[i] || {}),   // style/config provided from JSON first
    ...s,                       // inject dynamic data from API
    type: "line",
     areaStyle: subType === "area" || subType === "stacked" ? {} : undefined
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

  const options: EChartsOption = {
    tooltip: { trigger: "axis", ...config.options?.tooltip },  // user overrides trigger

    xAxis: {
      type: "category",                // default
      ...config.options?.xAxis,        // user config replaces default
      data: categories                 // dynamic data always last
    },

    yAxis: {
      type: "value",
      ...config.options?.yAxis         // user config replaces default
    },

    ...config.options,                 // global options last if needed (optional)
    series: finalSeries
  };

  console.log("options",options);
  

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      className="w-full h-full"
    />
  );
}
