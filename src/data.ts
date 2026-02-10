export const example = {
  title: "Revenue Trend",
  height: 300,
  "width": 6,
  "config": {
    "type": "bar",

    "options": {
      "title": { "text": "Revenue Growth" },
      "tooltip": { "trigger": "axis" },
      "xAxis": { "type": "category" },
      "yAxis": { "type": "value" },
      "series": [{ "type": "line", "name": "Sales", smooth: true }]
    }
  },
  source: {
    type: "method",
    method: "getRevenueRows"
  }


}

export const lineSingle = {
  title: "Revenue",
  config: {
    type: "bar",
    seriesKey: "channel",
    options: {
      "title": { "text": "Revenue Growth" },
      "tooltip": { "trigger": "axis" },
      "xAxis": { "type": "category" },
      "yAxis": { "type": "value" },
      "series": [{ "type": "line", "name": "Sales", smooth: true }]
    }
  },
  source: {
    type: "method",
    method: "getRevenueRows"
  }
};


export const stackedAreaChart = {
  title: "Stacked Area Chart",
  height: 600,
  config: {
    type: "line",


    // tells normalizeData how to split series
    seriesKey: "channel",

    options: {
      title: { text: "Stacked Area Chart" },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: { backgroundColor: "#6a7985" }
        }
      },
      legend: {},
      xAxis: { boundaryGap: false }
    }
  },
  source: {
    type: "method",
    method: "getStackedAreaRows"
  }
};




export const exapmle1 = {
  "title": "Tasks By Status",
  "width": 6,
  "config": {
    "type": "bar",
    "subType": "stacked",
    "options": {
      "title": { "text": "Sales" },
      "xAxis": { "type": "category" },
      "yAxis": { "type": "value" },
      "series": [{ "type": "bar" }]
    }
  },
  "source": { "type": "method", "method": "getStackedAreaRows" }
}


export const multiSeriesBar = {
  title: "Sales by Channel",
  config: {
    type: "bar",

    // IMPORTANT: tells normalizeData how to split series
    seriesKey: "channel",

    options: {
      title: { text: "Sales by Channel" },
      tooltip: { trigger: "axis" },
      legend: {}
    }
  },
  source: {
    type: "method",
    method: "getStackedAreaRows"
  }
};

export const stackedBar = {
  title: "Total Sales by Day",
  height: 500,
  config: {
    type: "bar",
    subType: "stacked",
    seriesKey: "channel",

    options: {
      title: { text: "Total Sales by Day" },
      tooltip: { trigger: "axis" },
      legend: {}
    }
  },
  source: {
    type: "method",
    method: "getStackedAreaRows"
  }
};

export const barStacked100 = {
  title: "Sales Share (%)",
  config: {
    type: "bar",
    subType: "stacked",
    seriesKey: "channel",
    options: {
      title: { text: "Sales Share (%)" },
      tooltip: { trigger: "axis" },
      yAxis: {
        axisLabel: { formatter: "{value}%" }
      },
      legend: {}
    }
  },
  source: {
    type: "method",
    method: "getSalesByChannelPercentRows"
  }
};

export const barSorted = {
  title: "Live Sorting Bar",
  config: {
    type: "bar",
    subType: "sorting",
    options: {
      title: { text: "Live Sorting Bar" },
      tooltip: { trigger: "axis" }
    }
  },
  source: {
    type: "method",
    method: "getSortingRows"
  }
};
export const barWaterfall = {
  height: 500,
  title: "Profit Analysis",
  config: {
    type: "bar",
    subType: "waterfall",
    options: {
      title: { text: "Profit Analysis" },
      series: [
        { itemStyle: { color: "transparent" } }, // assist
        { itemStyle: { color: "#5470c6" } }       // main
      ]
    }
  },
  source: {
    type: "method",
    method: "getWaterfallRows"
  }
};

export const mixedBarLine = {
  height: 500,
  title: "Sales vs Growth",
  config: {
    type: "bar",
    seriesKey: "metric",
    options: {
      title: { text: "Sales vs Growth" },
      tooltip: { trigger: "axis" },
      legend: {},
      yAxis: [
        { type: "value", name: "Sales" },
        { type: "value", name: "Growth (%)" }
      ],
      series: [
        { type: "bar", yAxisIndex: 0 },
        { type: "line", yAxisIndex: 1 }
      ]
    }
  },
  source: {
    type: "method",
    method: "getMixedChartRows"
  }
};


export const horizontalBar = {
  title: "World Population",
  config: {
    type: "bar",
    seriesKey: "year",
    options: {
      title: { text: "World Population" },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" }
      },
      legend: {},
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: "category"
      }
    }
  },
  source: {
    type: "method",
    method: "getWorldPopulationRows"
  }
};


export const horizontalMultiBar = {
  title: "World Population",
  height: 500,
  config: {
    type: "bar",
    seriesKey: "year",
    options: {
      title: { text: "World Population" },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" }
      },
      legend: {},
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category"
      }
    }
  },
  source: {
    type: "method",
    method: "getWorldPopulationByYear"
  }
};





export const bubbleChart = {
  height:400,
  title: "GDP vs Life Expectancy",
  config: {
    type: "bubble",
    xKey: "gdp",
    yKey: "life",
    sizeKey: "population",
    labelKey: "country",
    options: {
      tooltip: { trigger: "item" },
      xAxis: { name: "GDP" },
      yAxis: { name: "Life Expectancy" }
    }
  },
  source: {
    type: "method",
    method: "getBubbleRows"
  }
};

export const pieChart = {
  height: 600,
  source: {
    type: "method",
    method: "getPieRows"
  },
  config: {
    type: "pie",
    options: {
      legend: { bottom: 0 }
    }
  }
  
};

export const donutChart = {
  height: 600,
  source: {
    type: "method",
    method: "getPieRows"
  },
  config: {
    type: "pie",
 
    options: {
      legend: { bottom: 0 },
    }
  }
};

export const doughnutSmooth =  {
  height: 600,
  source: {
    type: "method",
    method: "getPieRows"
  },
  config: {
    type: "pie",
    subType: "donut",
    options: {
      legend: { bottom: 0 },
      series: [{
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        }
      }]
    }
  }
};

export const semiDonutChart = {
  height: 600,
  source: {
    type: "method",
    method: "getPieRows"
  },
  config: {
    type: "pie",
    subType: "semi-donut",
    options: {
      legend: {
        top: "5%",
        left: "center"
      }
    }
  }
};

export const funnelChartBasic = {
  height: 350,
  source: {
    type: "method",
    method: "getFunnelRows"
  },
  config: {
    type: "funnel"
  }
};

export const heatmapBasic = {
  height: 350,
  source: {
    type: "method",
    method: "getHeatmapRows"
  },
  config: {
    type: "heatmap"
  }
};