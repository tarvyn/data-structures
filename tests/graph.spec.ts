import { Graph } from '../src/graph';
import { FAKE_VALUES } from './constants';

let graph: Graph;

describe('Graph', () => {
  beforeEach(() => {
    graph = new Graph();
    FAKE_VALUES.forEach((value) => graph.addNode(value, value));
    graph.addEdge(FAKE_VALUES[0], FAKE_VALUES[1]);
    graph.addEdge(FAKE_VALUES[0], FAKE_VALUES[3]);
    graph.addEdge(FAKE_VALUES[1], FAKE_VALUES[3]);
    graph.addEdge(FAKE_VALUES[2], FAKE_VALUES[0]);
  });

  describe('addNode method', () => {
    it('should correctly add nodes', () => {
      expect(graph.getAllNodeIds()).toEqual(FAKE_VALUES);
    });
  });

  describe('addEdge method', () => {
    it('should correctly add edges', () => {
      expect(graph.getAllEdges(FAKE_VALUES[0])).toEqual([
        FAKE_VALUES[1],
        FAKE_VALUES[3],
      ]);
      expect(graph.getAllEdges(FAKE_VALUES[1])).toEqual([FAKE_VALUES[3]]);
      expect(graph.getAllEdges(FAKE_VALUES[2])).toEqual([FAKE_VALUES[0]]);
    });
  });

  describe('removeNode method', () => {
    it('should correctly remove nodes', () => {
      graph.removeNode(FAKE_VALUES[0]);
      graph.removeNode(FAKE_VALUES[1]);

      const [first, second, ...expectedNodes] = FAKE_VALUES;

      expect(graph.getAllNodeIds()).toEqual(expectedNodes);
      expect(graph.getEdge(FAKE_VALUES[0])).toEqual([]);
      expect(graph.getEdge(FAKE_VALUES[1])).toEqual([]);
      expect(graph.getEdge(FAKE_VALUES[2])).toEqual([]);
    });
  });

  describe('removeEdge method', () => {
    it('should correctly remove edges', () => {
      graph.removeEdge(FAKE_VALUES[0], FAKE_VALUES[1]);
      graph.removeEdge(FAKE_VALUES[0], FAKE_VALUES[3]);
      graph.removeEdge(FAKE_VALUES[2], FAKE_VALUES[0]);

      expect(graph.getEdge(FAKE_VALUES[0])).toEqual([]);
      expect(graph.getEdge(FAKE_VALUES[2])).toEqual([]);
    });
  });
});
