import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { TooltipComponent, GridComponent, TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { EChartsOption } from "echarts";

echarts.use([ScatterChart, TooltipComponent, GridComponent, TitleComponent, CanvasRenderer]);

export default function BubbleChartComponent({ config, data }: any) {
    const { xKey, yKey, sizeKey, labelKey } = config;

    const rows = Array.isArray(data) ? data : [];

    const seriesData = rows.map((r: any) => ({
        name: r[labelKey],
        value: [
            Number(r[xKey]) || 0,
            Number(r[yKey]) || 0,
            Number(r[sizeKey]) || 0
        ]
    }));

    const options: EChartsOption = {
        ...config.options,

        xAxis: { type: "value", ...config.options?.xAxis },
        yAxis: { type: "value", ...config.options?.yAxis },

        series: [
            {
                type: "scatter",
                data: seriesData,
                symbolSize: (val: number[]) =>
                   Math.max(6, Math.sqrt(val[2] ?? 0) * 2)// scalable bubble size
            }
        ]
    };

    console.log("options", options);


    return (
        <ReactEChartsCore
            echarts={echarts}
            option={options}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
