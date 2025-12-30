import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts";

echarts.use([PieChart, TitleComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

export default function PieChartComponent({ config, data }: { config: any; data: any }) {
console.log("PieChartComponent data",data);
  const { subType } = config;
  const rawSeries = data.series || []; // raw db result
 
  let finalSeries = {
    type: "pie",
    radius: "60%",
    ...config.options?.series?.[0],     // user overrides default series config
    data: rawSeries                       // dynamic injected last
  };


  if (subType === "donut") {
    finalSeries.radius = config.options?.series?.[0]?.radius ?? ["40%", "70%"];
  }

  if (subType === "rose") finalSeries = { ...finalSeries, roseType: "area" };

  const options: EChartsOption = {
    tooltip: { trigger: "item", ...config.options?.tooltip },   // default → user overrides
    legend: { top: "bottom", ...config.options?.legend },       // default → user overrides

    ...config.options,                                          // user overrides everything globally

    series: [finalSeries]                                       // final always replaced
  };



  return <ReactEChartsCore
    echarts={echarts}
    option={options}

    className="w-full h-full" />;
}



