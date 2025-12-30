interface Props {
    config: any;
    data: {
        categories?: string[];
        series?: {
            name: string;
            data: number[];
        }[];
    };
}
export default function LineChartComponent({ config, data }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=lineChart.d.ts.map