class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  { 
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this.adjacentList[node];
  } 
  addEdge(node1, node2) { 
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  } 
  print() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  } 
} 