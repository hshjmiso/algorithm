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

import Dictionary from '../dictionary/dictionary.mjs';

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
}