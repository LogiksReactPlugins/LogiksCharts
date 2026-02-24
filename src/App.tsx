
import LogiksGraph from "./components/logiksGraph/index.js";

import { funnelChartBasic } from "./data.js";

function App() {


    const getPendingTask = () => ([
        { id: 101, title: "Client Follow-up", priority: "High" },
        { id: 102, title: "Prepare Sales Report", priority: "Medium" },
        { id: 103, title: "Project Deployment", priority: "High" }
    ]);



    const getTotalRevenue = () => 321000;
    const getTotalWonLostRatio = () => "15:3";
    const getTotalEnquiry = () => 1200;
    const getTotalDeal = () => 350;

    const getRevenueRows = () => ([
        { month: "Jan", value: 200 },
        { month: "Feb", value: 500 },
        { month: "Mar", value: 800 },
        { month: "Apr", value: 650 }
    ]);

    const getStackedAreaRows = () => ([
        { day: "Mon", channel: "Email", value: 120 },
        { day: "Mon", channel: "Union Ads", value: 220 },
        { day: "Mon", channel: "Video Ads", value: 150 },
        { day: "Mon", channel: "Direct", value: 320 },
        { day: "Mon", channel: "Search Engine", value: 820 },

        { day: "Tue", channel: "Email", value: 132 },
        { day: "Tue", channel: "Union Ads", value: 182 },
        { day: "Tue", channel: "Video Ads", value: 232 },
        { day: "Tue", channel: "Direct", value: 332 },
        { day: "Tue", channel: "Search Engine", value: 932 },

        { day: "Wed", channel: "Email", value: 101 },
        { day: "Wed", channel: "Union Ads", value: 191 },
        { day: "Wed", channel: "Video Ads", value: 201 },
        { day: "Wed", channel: "Direct", value: 301 },
        { day: "Wed", channel: "Search Engine", value: 901 }
    ]);

    const getSortingRows = () => ([
        { name: "A", value: 120 },
        { name: "B", value: 300 },
        { name: "C", value: 180 },
        { name: "D", value: 260 }
    ]);

    const getWaterfallRows = () => ([
        { category: "Total", value: 2900 },
        { category: "Rent", value: 1200 },
        { category: "Utilities", value: 300 },
        { category: "Transportation", value: 200 },
        { category: "Meals", value: 900 },
        { category: "Other", value: 300 }
    ]);



    const getMixedChartRows = () => ([
        { month: "Jan", metric: "Sales", value: 500 },
        { month: "Jan", metric: "Growth", value: 5 },

        { month: "Feb", metric: "Sales", value: 800 },
        { month: "Feb", metric: "Growth", value: 8 },

        { month: "Mar", metric: "Sales", value: 650 },
        { month: "Mar", metric: "Growth", value: 6 }
    ]);

    const getWorldPopulationRows = () => ([
        { country: "Brazil", value: 18203 },
        { country: "Indonesia", value: 23489 },
        { country: "USA", value: 29034 },
        { country: "India", value: 104970 },
        { country: "China", value: 131744 },
        { country: "World", value: 630230 }
    ]);

    const getWorldPopulationByYear = () => ([
        { country: "Brazil", year: "2011", value: 18203 },
        { country: "Brazil", year: "2012", value: 19325 },

        { country: "Indonesia", year: "2011", value: 23489 },
        { country: "Indonesia", year: "2012", value: 23438 },

        { country: "USA", year: "2011", value: 29034 },
        { country: "USA", year: "2012", value: 31000 },

        { country: "India", year: "2011", value: 104970 },
        { country: "India", year: "2012", value: 121594 },

        { country: "China", year: "2011", value: 131744 },
        { country: "China", year: "2012", value: 134141 }
    ]);

 const getBubbleRows = () => ([
  { country: "USA", gdp: 21400, life: 79, population: 331 },
  { country: "China", gdp: 14300, life: 6, population: 140 },
  { country: "India", gdp: 2800, life: 69, population: 1390 },
  { country: "Germany", gdp: 3800, life: 81, population: 83 },
  { country: "Brazil", gdp: 1900, life: 75, population: 212 },

  { country: "UK", gdp: 3100, life: 81, population: 67 },
  { country: "France", gdp: 2900, life: 82, population: 65 },
  { country: "Japan", gdp: 5100, life: 84, population: 126 },
  { country: "Canada", gdp: 2000, life: 82, population: 38 },
  { country: "Russia", gdp: 1700, life: 72, population: 146 },

  { country: "Australia", gdp: 6500, life: 83, population: 26 },
  { country: "Italy", gdp: 7100, life: 83, population: 60 },
  { country: "Spain", gdp: 9500, life: 8, population: 47 },
  { country: "South Korea", gdp: 8800, life: 83, population: 52 },
  { country: "Mexico", gdp: 10300, life: 75, population: 128 },

  { country: "Indonesia", gdp: 11200, life: 71, population: 273 },
  { country: "Saudi Arabia", gdp: 21800, life: 75, population: 35 },
  { country: "South Africa", gdp: 13420, life: 64, population: 60 },
  { country: "Nigeria", gdp: 9450, life: 55, population: 206 },
  { country: "Argentina", gdp: 12450, life: 6, population: 45 }
]);

const getPieRows = () => ([
  { name: "Search Engine", value: 1048 },
  { name: "Direct", value: 735 },
  { name: "Email", value: 580 },
  { name: "Union Ads", value: 484 },
  { name: "Video Ads", value: 300 }
]);

const getFunnelRows = () => ([
  { name: "Impressions", value: 1200 },
  { name: "Clicks", value: 800 },
  { name: "Leads", value: 420 },
  { name: "Qualified Leads", value: 260 },
  { name: "Conversions", value: 120 }
]);

    return (

        <LogiksGraph
            graph_config={funnelChartBasic}
            module_refid={undefined}
            methods={{
                getPendingTask,
                getTotalRevenue, getTotalWonLostRatio, getTotalEnquiry, getTotalDeal,
                getRevenueRows,getPieRows,getFunnelRows,
                getStackedAreaRows, getSortingRows, getWaterfallRows, getMixedChartRows
                , getWorldPopulationRows, getWorldPopulationByYear, getBubbleRows
            }}
            sqlOpsConfig={{
                "baseURL": "http://192.168.0.20:9999",
                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiYXBwSWQiOiJkZW1vIiwiaWQiOjEsInVzZXJJZCI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsInRlbmFudElkIjoiU0lMSyIsImd1aWQiOiJTSUxLIiwicm9sZXMiOltdLCJzY29wZXMiOltdLCJpcCI6IjE5Mi4xNjguMC42NiIsImRldmljZVR5cGUiOiJ3ZWIiLCJpYXQiOjE3NjcxMDI3NzAsImV4cCI6MTc2NzEwNjM3MCwianRpIjoiYWNjOjE6MTc2NzEwMjc3MDY2Nzp3ZWIifQ.bjPbg6TGhfx99I5z6hq5wQgriWIWpR7rYvAPvzKptM8",
                "dbopsGetHash": "/api/dbops",
                "dbopsGetRefId": "/api/dbops/save",
                "dbopsCreate": "/api/dbops/create",
                "dbopsUpdate": "/api/dbops/update",
                "dbopsFetch": "/api/dbops/fetch",
                "registerQuery": "/api/query/save",
                "runQuery": "/api/query/run"
            }}

        />

    )
}

export default App
