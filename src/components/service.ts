import { ApiResponse } from "./logiksGraph";

export async function fetchDataByquery<T = any>(
  sqlOpsUrls: Record<string, any>,
  query: Record<string, any> | undefined,
  querid: string | undefined,
  refid: string | undefined = undefined,
  module_refid: string | undefined = undefined,
  filter: Record<string, any> = {}
): Promise<ApiResponse<T>> {
  try {

    let queryId = querid;

    if (!queryId) {

      const resQueryId = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.registerQuery, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
        },
        body: JSON.stringify({
          query: query, "srcid": module_refid
        })
      })
        .then(res => res.json());

      queryId = resQueryId.data.queryid;
    }

    const res = await fetch(sqlOpsUrls.baseURL + sqlOpsUrls.runQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sqlOpsUrls?.accessToken}`
      },
      body: JSON.stringify({

        "queryid": queryId,
        "filter": filter,
        "refid": refid,
        "page": 0,
        "limit": 10000
      })

    }).then(res => res.json());



    return res
  } catch (error) {
    throw error;
  }
}