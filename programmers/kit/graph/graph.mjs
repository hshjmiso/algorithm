/**
 * 비선형 자료 구조인 그래프
 * 그래프(graph)는 네트워크 구조를 추상화한 모델로, 간선(edge)으로 연결된 노드(node)(정점, vertex)의 집합이다.
 * 이진 관계(binary relationship)를 표현하는 그래프는 중요한 자료 구조다.
 * 페이스북, 트위터, 구글 플러스 등의 소셜 네트워크도 그래프로 표시할 수 있다.
 * 도로, 항로, 통신을 나타낼 때도 널리 활용된다.
 */

/**
 * 그래프 G = (V, E)
 * V: 정점의 집합
 * E: V의 정점들을 연결한 간선의 집합
 * 인접 정점(adjacent vertex): 간선으로 연결된 정점
 * 정점의 차수(degree): 인접 정점 개수
 * 경로(path): 일련의 연속된 정점(v1, v2, ..., vk)
 * 단순 경로(simple path): 반복된 정점을 포함하지 않는 경로
 * 사이클(cycle): 처음과 마지막 정점이 같은 단순 경로
 * 비사이클 그래프(acyclic graph): 사이클이 없는 그래프
 * 모든 정점 간에 경로가 존재할 때 그래프가 연결되었다(conneted)고 한다.
 
 * 방향 그래프(directed graph): 간선들이 한쪽으로 방향을 가진 그래프
 * 무방향 그래프(undirected graph): 간선에 방향성이 없다.
 * 두 정점이 양방향으로 경로를 갖고 있을 때 강결합되었다(strongly connected)고 한다.
 * 가중치가 없는 그래프(unweighted graph)
 * 가중치가 있는 그래프(weighted graph)
 */

/**
 * 인접 행렬(adjacency matrix)
 * 각 노드에 정수형의 배열 인덱스를 세팅한다. 그리고 정점 간 연결 상태는 2차원 배열의 값으로 표시하는데, 
 * 배열[i][j] === 1은 인덱스 i인 노드와 인덱스 j인 노드 사이에 간선이 존재함을 의미하며, 
 * 그 외에는 배열[i][j] === 0이다.
 */

/**
 * 인접 리스트(adjacency list)
 * 인접 리스트는 각 정점별로 인접 정점들의 리스트를 저장하는데, 
 * 이를 자료 구조로 표현하는 방법은 리스트(배열), 연결 리스트, 해시 맵, 딕셔너리 중 
 * 어느 것을 채택하는냐에 따라 달라진다.
 */

/**
 * 근접 행렬(incidence matrix)
 * 그래프의 정점을 행으로, 간선을 열로 표시하고, 두 정점간 연결 상태는 2차원 배열로 나타내는 방법이다.
 * 다음 그림처럼 배열[v][e] === 1은 정점 v가 간선 e에 근접해 있음을 의미하며, 그 외에는 모두 배열[v][e] === 0이다.
 * 보통 정점보다 간선이 상대적으로 많은 그래프에서 저장 공간과 메모리를 절약하기 위해 사용한다.
 */

 /**
 * 너비 우선 탐색(BFS)
 * 정점을 큐에 저장함으로써 가장 오래전에 방문하지 않은 정점을 가장 먼저 방문한다.
 * BFS 알고리즘은 시작 정점에서 순회를 시작해 그래프를 한 번에 한 층씩,
 * 이웃한 정점(인접 정점)들을 모두 방문한다.

 * 큐 Q를 생성한다.
 * v를 '방문했음'으로 표시하고 Q에 v를 추가한다.
 * Q는 비어 있지 않으므로 다음 과정을 밟는다.
   * u를 Q에서 삭제한다.
   * u를 '방문했음'으로 표시한다.
   * u의 '방문하지 않은' 모든 인접 정점을 Q에 넣는다.
   * u를 '탐색했음'으로 표시한다.
 * v에서 u까지의 거리: d[u]
 * v에서 다른 모든 정점 u까지의 최단 경로를 계산하기 위한 선행자(predecessor):pred[u]
*/

/**
 * 다익스트라 알고리즘(Dijkstra's algorithm): 단일 소스(single-source) 최단 경로 문제 알고리즘
 * 벨만-포드 알고리즘(Bellman-Ford algorithm): 간선 가중치가 음의 값일 경우의 단일 소스 문제 알고리즘
 * A* 검색 알고리즘(A* search algorithm): 검색 속도를 빠르게 하려고 휴리스틱(heuristics)을 이용해 
 * 정점의 단일 쌍에 대한 최단 경로를 찾는 알고리즘
 * 플로이드-워셜 알고리즘(Floyd-Warshall algorithm): 모든 정점 간의 최단 경로를 찾는 알고리즘
 */

/**
 * 깊이 우선 탐색(DFS)
 * DFS 알고리즘은 시작 정점에서 출발해 동일 경로의 마지막 정점까지 순회하고 다시 반대 방향으로 돌아와 다음 경로를 찾아가는 식으로 진행된다.
 * DFS에서는 시작 정점이 필요 없다. 그래프 G에서 미방문 상태의 정점 v를 차례로 방문한다.
 
 * v를 '방문했음'으로 표시한다.
 * '방문하지 않은' v의 인접 정점 w에 대해
   * 정점 w를 방문한다.
 * v를 '탐색했음'으로 표시한다.
 * u의 방문 시간: d[u]
 * u의 탐색 시간: f[u]
 * u의 선행자: p[u]
 */

import Dictionary from '../dictionary/dictionary.mjs';
import Queue from '../queue/queue.mjs';

export default class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    toString() {
        let s = '';
        let neighbors = null;
        for (let i = 0, iLen = this.vertices.length; i < iLen; i++) {
            s += this.vertices[i] + ' -> ';
            neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0, jLen = neighbors.length; j < jLen; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    initializeColor() {
        let vertices = this.vertices;
        let color = [];
        for (let i = 0, len = vertices.length; i < len; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }    

    bfs(v) {
        let vertices = this.vertices;
        let color = this.initializeColor();
        let queue = new Queue();
        let d = [];
        let pred = [];
        queue.enqueue(v);

        for (let i = 0, len = vertices.length; i < len; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while(!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i = 0, len = neighbors.length; i < len; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distance: d,
            predecessors: pred,
        };
    }
}