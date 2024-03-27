# Dijkstra's Algorithm Implementation in JavaScript

## Overview

This repository contains an implementation of Dijkstra's algorithm in JavaScript. Dijkstra's algorithm is a graph traversal algorithm used to find the shortest path from a starting vertex to all other vertices in a weighted graph.

## Objective

The objective of this implementation is to provide a practical example of implementing Dijkstra's algorithm in JavaScript.

## Functionality

The implementation consists of a JavaScript function named `dijkstra` that takes a weighted graph and a starting vertex as input parameters. It returns an object representing the shortest distances from the starting vertex to all other vertices in the graph.

## How to Use

To use this implementation:

1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the command `node dijkstra.js` to execute the example code.

## Example

```javascript
// Example graph
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

console.log(dijkstra(graph, "A")); // Output: { 'A': 0, 'B': 4, 'C': 2, 'D': 5 }
```
