import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts";

echarts.use([PieChart, TitleComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

type PieItem = { name: string; value: number };

export default function PieChartComponent({ config, data }: { config: any; data: any }) {
  const { subType } = config;

  console.log("config",config);
  
  const rawSeries: PieItem[] = data.series || [];
  const userSeries = config.options?.series?.[0] ?? {};

  let finalSeries: any = {
    type: "pie",
    data: rawSeries.map(s => ({
      name: s.name,
      value: s.value
    })),
    ...userSeries
  };

  if (subType === "donut") {
    finalSeries.radius = userSeries.radius ?? ["40%", "70%"];
  }

  if (subType === "semi-donut") {
    finalSeries.radius = userSeries.radius ?? ["40%", "70%"];
    finalSeries.center = userSeries.center ?? ["50%", "70%"];
    finalSeries.startAngle = userSeries.startAngle ?? 180;
    finalSeries.endAngle = userSeries.endAngle ?? 360;
  }

  if (subType === "rose") {
    finalSeries.roseType = "area";
  }

  const options: EChartsOption = {
    tooltip: { trigger: "item", ...config.options?.tooltip },
    legend: { top: "5%", left: "center", ...config.options?.legend },
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
