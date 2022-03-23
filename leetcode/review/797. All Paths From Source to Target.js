/**
https://leetcode.com/problems/all-paths-from-source-to-target/

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

Example 1:


Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Example 2:


Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 

Constraints:

n == graph.length
2 <= n <= 15
0 <= graph[i][j] < n
graph[i][j] != i (i.e., there will be no self-loops).
All the elements of graph[i] are unique.
The input graph is guaranteed to be a DAG.

 */

var allPathsSourceTarget = function(graph) {
    const paths = [];
    
    function recursion(i, path) {
        if (!graph[i].length) {
            paths.push(path);
        }
        
        graph[i].forEach(v => {
            recursion(v, [...path, v]);
        });
    }
    
    recursion(0, [0]);
    
    return paths;
};

// others
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 // ------ backtracking ---------
 var allPathsSourceTarget = function(graph) {
    let lastNode = graph.length - 1;
    let paths = [];
   
    let path = [];
    let traverse = (graphList, node) => {
        path.push(node);
       
        if (node === lastNode) {
            // 'path' is initialized in an outerscope, so its value is shared across multiple iterations
            // it will be emptied at the end of each iteration when we find our target
            // so if we don't use path.slice(), we will end up with an empty array
            paths.push(path.slice());
            path.pop();
            return;
        }
       
        for (let neighbor of graphList[node]) {
            traverse(graphList, neighbor, path);
        }
       
        path.pop();
    }
   
    traverse(graph, 0, path);
    return paths;
}

// ------ DP ---------
var allPathsSourceTarget = function(graph) {
    let lastNode = graph.length - 1;
    
    let traverse = (node) => {
        let paths = [];
        
        if (node === lastNode) {
            return [[node]];
        }
        
        for (let nextNode of graph[node]) {
            let subPaths = traverse(nextNode);
            for (let path of subPaths) {
                paths.push([node, ...path]);
            }
        }
        
        return paths;
    }
    
    return traverse(0);
};