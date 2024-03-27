function dijkstra(graph, start) {
  // Initialize distances object with starting vertex distance 0 and all other distances as Infinity
  const distances = {};
  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  const minHeap = [[start, 0]];

  // Loop while priority queue is not empty
  while (minHeap.length > 0) {
    // Dequeue vertex with minimum distance from priority queue
    const [currentVertex, currentDistance] = minHeap.shift();

    // Iterate through adjacent vertices of current vertex
    for (const adjacentVertex in graph[currentVertex]) {
      const weight = graph[currentVertex][adjacentVertex];
      const distance = currentDistance + weight;

      // Update distances object and enqueue adjacent vertex with new distance if shorter
      if (distance < distances[adjacentVertex]) {
        distances[adjacentVertex] = distance;
        minHeap.push([adjacentVertex, distance]);
      }
    }

    // Reorder priority queue (minHeap) based on updated distances
    minHeap.sort((a, b) => a[1] - b[1]);
  }

  // Return distances object
  return distances;
}

// Example graph
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

console.log(dijkstra(graph, "A"));
