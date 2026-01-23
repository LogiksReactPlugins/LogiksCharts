
import LogiksGraph from "./components/logiksGraph/index.js";

import { example } from "./data.js";

function App() {
    const getTaskStatus = () => ({
        categories: ["Jan", "Feb", "Mar", "Apr"],
        series: [
            { name: "Sales", data: [200, 500, 800, 650] }
        ]
    });

    const getTaskDataByStatus = () => ({
        categories: ["Open", "In Progress", "Done", "On Hold"],
        series: [
            { name: "Tasks", data: [30, 45, 28, 10] }
        ]
    });

    const getPendingTask = () => ([
        { id: 101, title: "Client Follow-up", priority: "High" },
        { id: 102, title: "Prepare Sales Report", priority: "Medium" },
        { id: 103, title: "Project Deployment", priority: "High" }
    ]);

    const getWorkLoadTask = () => ({
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        series: [
            { name: "Workload", data: [30, 60, 50, 75, 90] }
        ]
    });

    const getTotalRevenue = () => 321000;
    const getTotalWonLostRatio = () => "15:3";
    const getTotalEnquiry = () => 1200;
    const getTotalDeal = () => 350;

    const getTaskDataByUser = () => {
        return {
            series: [
                { name: "Electronics", value: 120 },
                { name: "Fashion", value: 80 },
                { name: "Grocery", value: 60 }
            ]
        }

    }


    return (

        <LogiksGraph
            graph_config={example}
            module_refid={undefined}
            methods={{
                getTaskStatus, getTaskDataByStatus, getPendingTask, getWorkLoadTask,
                getTotalRevenue, getTotalWonLostRatio, getTotalEnquiry, getTotalDeal,
                getTaskDataByUser

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
