
import { useEffect, useState } from "react";
import type { GraphRendererProps } from "./Grpah.types.js";
import BarChart from "../graphs/barChart.js";
import LineChart from "../graphs/lineChart.js";
import PieChart from "../graphs/pieChart.js";
import { extractRows, normalizeData } from "../utils.js";




const GraphRenderer = ({ graph_config, methods = {}, sqlOpsUrls }: GraphRendererProps) => {

  if (!graph_config?.config?.type) return null;

  const { config, source } = graph_config;



  const [data, setData] = useState<any>({ categories: [], series: [] });

  useEffect(() => {
    const load = async () => {
      let result = {};

      if (source?.type === "method") {
        const fn = methods[source.method as keyof typeof methods];
        result = fn ? await Promise.resolve(fn()) : {};
      } else if (source?.type === "api" && source.url) {
        result = await fetch(source.url, {
          method: source.method || "GET",
          headers: source.headers || {},
        }).then(r => r.json());
      } else if (source?.type === "sql" && sqlOpsUrls) {


        try {

          const resQueryId = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            body: JSON.stringify({
              query: source
            })
          })
            .then(res => res.json());


          if (!resQueryId.queryid) {
            console.log("queryid not generated");
            return

          }

          result = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
            },
            body: JSON.stringify({

              "queryid": resQueryId.queryid,
              "filter": {

              }
            })

          }).then(res => res.json());


        } catch (err) {
          console.error("API fetch failed:", err);
        }

      }

  
      const rows = extractRows(result)
      const normalized = normalizeData(rows, config);

      setData(normalized);

    };

    load();
  }, [source?.method, source?.url, source?.type, config.type]);



  switch (graph_config?.config.type) {

    case "bar": return  <BarChart config={config} data={data} />;
    case "line": return <LineChart config={config} data={data} />;
    case "pie": return <PieChart config={config} data={data} />;

    default:
      return <div className="text-red-500">Unknown chart type: {config.type}</div>;
  }
};

export default GraphRenderer;