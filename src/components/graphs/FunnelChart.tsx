import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { FunnelChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts";

echarts.use([FunnelChart, TooltipComponent, LegendComponent, CanvasRenderer]);

type FunnelItem = { name: string; value: number };

export default function FunnelChartComponent({
  config,
  data
}: {
  config: any;
  data: any;
}) {
  const rawSeries: FunnelItem[] = data.series || [];
  const userSeries = config.options?.series?.[0] ?? {};

  console.log("rawSeries",rawSeries);
  

  const finalSeries = {
    type: "funnel",
    left: "10%",
    top: 20,
    bottom: 20,
    width: "80%",
    min: 0,
    sort: "descending",
    gap: 2,
    label: {
      show: true,
      position: "inside"
    },
    ...userSeries,
    data: rawSeries.map(s => ({
      name: s.name,
      value: s.value
    }))
  };

  const options: EChartsOption = {
    tooltip: { trigger: "item", ...config.options?.tooltip },
    legend: { bottom: 0, ...config.options?.legend },
    ...config.options,
    series: [finalSeries]
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
