/**
 * Time Complexity is O(V+E). V: # of Vertices, E: # of Edges
 * The running time is at least O(E), as each edge is followed if
 * you search for the entire network.
 * We also keep a queue of all nodes to search. Adding one node to
 * the queue takes O(1). So, doing it for every unique node will be
 * O(V).
 *
 * In Breadth-First-Search, we search one level completely, before
 * going to the next level. That is, the closest neighbours are
 * serched first, and then the next level and then next.
 *
 * BFS can be used to do answer two types of questions:
 * * Is there a path from node A to node B? (searching for the presence of a node)
 * * What is the shortest path from node A to node B?
 *
 * The following program answers the first question.
 */
function bfs(graph, val) {
  let que = graph["you"];
  const searched = {};
  let current;
  while (que.length !== 0) {
    current = que[0];
    if (current === val) {
      return true;
    }
    searched[current] = 1;
    que = que.concat(graph[current]);
    que.shift();
  }
  if (que.length === 0) {
    return false;
  }
}

/**
 * Representing an n-ary directed graph in a map.
 * Each key represents a node, and the value represents the edges.
 * Similar representation is possible for any type of graphs:
 * trees, tries etc.
 */
const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jhonny"];
graph["anuj"] = [];
graph["thom"] = [];
graph["peggy"] = [];
graph["jhonny"] = [];

console.log(bfs(graph, "thom"));
console.log(bfs(graph, "rahul"));
console.log(bfs(graph, "jhonny"));
