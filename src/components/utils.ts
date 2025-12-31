export function normalizeData(data: any[], config: any) {
  if (!Array.isArray(data) || data.length === 0)
    return { categories: [], series: [] };

  const sample = data[0];
  const keys = Object.keys(sample);

  const label = config.labelKey ||
                keys.find(k => typeof sample[k] !== "number") || keys[0];

  const value = config.valueKey ||
                keys.find(k => typeof sample[k] === "number") || keys[1];

  const group = config.seriesKey;

  // PIE/DONUT — unified return shape 
  if (["pie","donut","rose"].includes(config.type)) {
    return {
      categories: [],
      series: data.map(r => ({
        name: r[label],
        value: Number(r[value]) || 0     // TS Safe
      }))
    };
  }

  // SINGLE SERIES
  if (!group) {
    return {
      categories: data.map(r => r[label]),
      series: [{
        name: config.seriesName || "Series",
        data: data.map(r => Number(r[value]) || 0)
      }]
    };
  }

  // MULTI SERIES
  const categories = [...new Set(data.map(r => r[label]))];
  const grouped:Record<string,number[]> = {};

  data.forEach(r => {
    const g = r[group];
    if(!grouped[g]) grouped[g]=new Array(categories.length).fill(0);
    grouped[g][categories.indexOf(r[label])] = Number(r[value])||0;
  });

  return {
    categories,
    series:Object.keys(grouped).map(name=>({ name,data:grouped[name] }))
  };
}

export function extractRows(result: any) {
  if (Array.isArray(result)) return result;
  if (Array.isArray(result?.data)) return result.data;
  if (result && typeof result === "object") return Object.values(result);
  return [];
}
