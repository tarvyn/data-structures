type GraphNodeId = string | number | symbol;

export class Graph {
  readonly nodes = new Map<GraphNodeId, unknown>();
  readonly edges = new Map<GraphNodeId, Set<GraphNodeId>>();

  addNode(id: GraphNodeId, value: unknown): void {
    if (this.nodes.has(id)) {
      return;
    }

    this.nodes.set(id, value);
  }

  removeNode(id: GraphNodeId): void {
    this.nodes.delete(id);
    this.edges.delete(id);
    this.edges.forEach((nodeIds) => nodeIds.delete(id));
  }

  addEdge(startNodeId: GraphNodeId, endNodeId: GraphNodeId): void {
    if (!this.nodes.has(startNodeId) || !this.nodes.has(endNodeId)) {
      return;
    }

    if (!this.edges.has(startNodeId)) {
      this.edges.set(startNodeId, new Set([endNodeId]));
    } else {
      this.edges.get(startNodeId)?.add(endNodeId);
    }
  }

  getEdge(id: GraphNodeId): GraphNodeId[] | undefined {
    return Array.from(this.edges.get(id)?.values() || []);
  }

  removeEdge(startNodeId: GraphNodeId, endNodeId: GraphNodeId): void {
    this.edges.get(startNodeId)?.delete(endNodeId);
  }

  getAllEdges(nodeId: GraphNodeId): GraphNodeId[] | undefined {
    return Array.from(this.edges.get(nodeId)?.values() || []);
  }

  getAllNodeIds(): GraphNodeId[] | undefined {
    return Array.from(this.nodes.keys());
  }
}
