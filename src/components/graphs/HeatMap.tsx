import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { GridComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts";

echarts.use([
  HeatmapChart,
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer
]);

export default function HeatmapChartComponent({ config, data }: any) {
  const userSeries = config.options?.series?.[0] ?? {};

  const finalSeries = {
    type: "heatmap",

    label: { show: false },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0,0,0,0.4)"
      }
    },

    ...userSeries,

    data: data.series?.[0]?.data || []
  };

  const options: EChartsOption = {
    tooltip: { position: "top", ...config.options?.tooltip },

    grid: {
      height: "60%",
      top: "10%",
      ...config.options?.grid
    },

    xAxis: {
      type: "category",
      data: data.xCategories || [],
      splitArea: { show: true },
      ...(config.options?.xAxis || {})
    },

    yAxis: {
      type: "category",
      data: data.yCategories || [],
      splitArea: { show: true },
      ...(config.options?.yAxis || {})
    },

    visualMap: {
      min: 0,
      max: Math.max(
        ...(data.series?.[0]?.data || []).map((d: any) => d[2] ?? 0),
        0
      ),
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 10,
      ...(config.options?.visualMap || {})
    },

    ...config.options,
    series: [finalSeries]
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
