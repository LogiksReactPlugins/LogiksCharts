
import GraphRenderer from "./GraphRenderer.js";
import type { GraphProps } from "./Grpah.types.js";

export default function Graph({ graph_config, methods, sqlOpsConfig, module_refid }: GraphProps) {

  const height = graph_config.height ?? 250;
  return (
    <div style={{ height, width: "100%" }}>
      <GraphRenderer module_refid={module_refid} graph_config={graph_config} methods={methods || {}} sqlOpsConfig={sqlOpsConfig} />
    </div>

  );
}
