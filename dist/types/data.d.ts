export declare const example: {
    title: string;
    height: number;
    width: number;
    config: {
        type: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
            series: {
                type: string;
                name: string;
                smooth: boolean;
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const lineSingle: {
    title: string;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
            series: {
                type: string;
                name: string;
                smooth: boolean;
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const stackedAreaChart: {
    title: string;
    height: number;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
                axisPointer: {
                    type: string;
                    label: {
                        backgroundColor: string;
                    };
                };
            };
            legend: {};
            xAxis: {
                boundaryGap: boolean;
            };
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const exapmle1: {
    title: string;
    width: number;
    config: {
        type: string;
        subType: string;
        options: {
            title: {
                text: string;
            };
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
            series: {
                type: string;
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const multiSeriesBar: {
    title: string;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            legend: {};
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const stackedBar: {
    title: string;
    height: number;
    config: {
        type: string;
        subType: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            legend: {};
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const barStacked100: {
    title: string;
    config: {
        type: string;
        subType: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            yAxis: {
                axisLabel: {
                    formatter: string;
                };
            };
            legend: {};
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const barSorted: {
    title: string;
    config: {
        type: string;
        subType: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const barWaterfall: {
    height: number;
    title: string;
    config: {
        type: string;
        subType: string;
        options: {
            title: {
                text: string;
            };
            series: {
                itemStyle: {
                    color: string;
                };
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const mixedBarLine: {
    height: number;
    title: string;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            legend: {};
            yAxis: {
                type: string;
                name: string;
            }[];
            series: {
                type: string;
                yAxisIndex: number;
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const horizontalBar: {
    title: string;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
                axisPointer: {
                    type: string;
                };
            };
            legend: {};
            xAxis: {
                type: string;
                boundaryGap: number[];
            };
            yAxis: {
                type: string;
            };
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const horizontalMultiBar: {
    title: string;
    height: number;
    config: {
        type: string;
        seriesKey: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
                axisPointer: {
                    type: string;
                };
            };
            legend: {};
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const bubbleChart: {
    height: number;
    title: string;
    config: {
        type: string;
        xKey: string;
        yKey: string;
        sizeKey: string;
        labelKey: string;
        options: {
            tooltip: {
                trigger: string;
            };
            xAxis: {
                name: string;
            };
            yAxis: {
                name: string;
            };
        };
    };
    source: {
        type: string;
        method: string;
    };
};
export declare const pieChart: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
        options: {
            legend: {
                bottom: number;
            };
        };
    };
};
export declare const donutChart: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
        options: {
            legend: {
                bottom: number;
            };
        };
    };
};
export declare const doughnutSmooth: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
        subType: string;
        options: {
            legend: {
                bottom: number;
            };
            series: {
                avoidLabelOverlap: boolean;
                itemStyle: {
                    borderRadius: number;
                    borderColor: string;
                    borderWidth: number;
                };
                label: {
                    show: boolean;
                    position: string;
                };
                emphasis: {
                    label: {
                        show: boolean;
                        fontSize: number;
                        fontWeight: string;
                    };
                };
                labelLine: {
                    show: boolean;
                };
            }[];
        };
    };
};
export declare const semiDonutChart: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
        subType: string;
        options: {
            legend: {
                top: string;
                left: string;
            };
        };
    };
};
export declare const funnelChartBasic: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
    };
};
export declare const heatmapBasic: {
    height: number;
    source: {
        type: string;
        method: string;
    };
    config: {
        type: string;
    };
};
//# sourceMappingURL=data.d.ts.map