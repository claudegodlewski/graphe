/*
  1 _ 2
   \ /
    0
*/

class graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjacencyMatrix = [];

        for (var i = 0; i < this.vertices; i++) {
            this.adjacencyMatrix[i] = new Array(this.vertices).fill(0);
        }
    }

    ajouterUnEdge(i, j) {
        this.adjacencyMatrix[i][j] = 1;
        this.adjacencyMatrix[j][i] = 1;
    }

    Afficher() {
        for(let rangee of this.adjacencyMatrix) {

            let resultat = '';

            for(let valeur of rangee) {
                resultat += valeur + ' ';
            }

            console.log(resultat);
        }
    }
}

let undirectedGraph = new graph(3);

undirectedGraph.ajouterUnEdge(0, 1);
undirectedGraph.ajouterUnEdge(1, 2);
undirectedGraph.ajouterUnEdge(2, 0);

undirectedGraph.Afficher();
/*
0 1 1 
1 0 1 
1 1 0
*/

console.log(undirectedGraph);
// Graph {
//     vertices: 3,
//     adjacencyMatrix: [ [ 0, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 0 ] ]
// }