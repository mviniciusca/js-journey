# Anotações: Algoritmos e Estruturas de Dados Essenciais 🚀

Olá! 👋 Estas anotações são um guia rápido sobre algoritmos e estruturas de dados importantes na programação, com foco em exemplos usando JavaScript.

## 1. Algoritmos de Ordenação (Sorting)  SORT

**O que são?**
Imagine que você tem uma lista de números ou nomes toda bagunçada. Algoritmos de ordenação servem para colocar essa lista em ordem (crescente, decrescente, alfabética, etc.).

**Por que usar?**
Listas ordenadas são muito mais fáceis e rápidas de pesquisar!

**Tipos Comuns:** Bubble Sort (simples, mas lento), Quick Sort (rápido!), Merge Sort (eficiente).

**Exemplo em JavaScript (usando o `sort()` embutido):**

```javascript
// Ordenando números
const numeros = [5, 2, 8, 1, 9, 4];
numeros.sort((a, b) => a - b); // Função de comparação para números
console.log("Números ordenados:", numeros); // Saída: [1, 2, 4, 5, 8, 9]

// Ordenando strings (ordem alfabética/Unicode)
const frutas = ["Banana", "Maçã", "Laranja", "Abacaxi"];
frutas.sort();
console.log("Frutas ordenadas:", frutas); // Saída: ["Abacaxi", "Banana", "Laranja", "Maçã"]
```

**Para Aprofundar:**
*   MDN Web Docs - `Array.prototype.sort()`: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   GeeksforGeeks - Sorting Algorithms: [https://www.geeksforgeeks.org/sorting-algorithms/](https://www.geeksforgeeks.org/sorting-algorithms/)

**Vídeos Recomendados (YouTube):**
*   "Sorting Algorithms" (Pesquise por visualizações animadas, ajuda muito!)
*   "Bubble Sort vs Quick Sort"
*   "Como funciona o Merge Sort"

## 2. Algoritmos de Busca (Searching) FIND

**O que são?**
Servem para encontrar um item específico dentro de uma coleção de dados (como um array ou lista).

**Tipos Comuns:**
*   **Busca Linear:** Procura item por item, do início ao fim. Funciona em qualquer lista, mas pode ser lenta em listas grandes.
*   **Busca Binária:** Muito mais rápida, mas *exige* que a lista esteja ordenada. Ela "corta" a lista pela metade a cada passo.

**Exemplo em JavaScript (Busca Linear simples com `find()` e `includes()`):**

```javascript
const listaDeCompras = ["Leite", "Pão", "Ovos", "Queijo"];

// Verificar se um item existe
const temOvos = listaDeCompras.includes("Ovos");
console.log("Tem ovos na lista?", temOvos); // Saída: true

// Encontrar um item específico (retorna o primeiro encontrado)
const itemEncontrado = listaDeCompras.find(item => item === "Pão");
console.log("Item encontrado:", itemEncontrado); // Saída: "Pão"

// Encontrar o índice de um item
const indiceQueijo = listaDeCompras.indexOf("Queijo");
console.log("Índice do Queijo:", indiceQueijo); // Saída: 3
```

**Para Aprofundar:**
*   MDN Web Docs - `Array.prototype.find()`: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
*   MDN Web Docs - `Array.prototype.includes()`: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
*   Khan Academy - Binary Search: [https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)

**Vídeos Recomendados (YouTube):**
*   "Linear Search vs Binary Search"
*   "Como funciona a Busca Binária"
*   "JavaScript Array find method"

## 3. Algoritmos de Grafos (Graph) 🗺️

**O que são?**
Grafos são como mapas que representam conexões entre coisas (chamadas "nós" ou "vértices"). Pense em redes sociais (pessoas conectadas), mapas de estradas (cidades conectadas) ou a própria internet (páginas conectadas).

**Para que servem os algoritmos?**
*   Encontrar o caminho mais curto (Ex: GPS - Dijkstra, A*).
*   Explorar todas as conexões (Ex: Ver todos os amigos de amigos - BFS, DFS).
*   Encontrar a forma mais barata de conectar tudo (Ex: Planejar rede de cabos - Kruskal, Prim).

**Exemplo em JavaScript (Representação Simples - Lista de Adjacência):**

```javascript
// Grafo representando amizades simples
const redeSocial = {
  'Alice': ['Bob', 'Carol'],
  'Bob': ['Alice', 'David'],
  'Carol': ['Alice'],
  'David': ['Bob']
};

// Quem são os amigos de Alice?
console.log("Amigos da Alice:", redeSocial['Alice']); // Saída: ['Bob', 'Carol']

// Bob é amigo de David?
const bobAmigoDavid = redeSocial['Bob'].includes('David');
console.log("Bob é amigo de David?", bobAmigoDavid); // Saída: true
```

**Para Aprofundar:**
*   GeeksforGeeks - Graph Data Structure and Algorithms: [https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
*   FreeCodeCamp - Graph Traversal Algorithms (BFS and DFS): [https://www.freecodecamp.org/news/graph-traversal-algorithms-bfs-and-dfs/](https://www.freecodecamp.org/news/graph-traversal-algorithms-bfs-and-dfs/)

**Vídeos Recomendados (YouTube):**
*   "Introduction to Graph Theory"
*   "Breadth-First Search (BFS) Algorithm"
*   "Depth-First Search (DFS) Algorithm"
*   "Dijkstra's Algorithm"

## 4. Estruturas de Dados (Data Structures) 🏗️

**O que são?**
São as *formas* como organizamos e guardamos os dados no computador para que os algoritmos possam usá-los de forma eficiente. A escolha da estrutura certa faz toda a diferença na velocidade do seu programa!

**Tipos Comuns (e como usamos em JS):**
*   **Arrays (Listas):** Coleções ordenadas de itens. Ótimos para acessar itens por posição (índice).
    ```javascript
    const minhaLista = [10, 20, 30];
    console.log(minhaLista[1]); // Acessa o segundo item (20)
    minhaLista.push(40); // Adiciona no final
    console.log(minhaLista); // [10, 20, 30, 40]
    ```
*   **Objects (Objetos / Dicionários / Mapas):** Coleções de pares chave-valor. Ótimos para buscar dados por um nome (chave) específico. Funcionam como "Tabelas Hash" por baixo dos panos.
    ```javascript
    const usuario = {
      nome: "Carlos",
      idade: 25,
      cidade: "São Paulo"
    };
    console.log(usuario.nome); // Acessa o valor da chave "nome"
    console.log(usuario['idade']); // Outra forma de acessar
    usuario.profissao = "Engenheiro"; // Adiciona nova chave-valor
    console.log(usuario);
    ```
*   **Outras Estruturas:** Listas Ligadas, Árvores, Pilhas, Filas, Heaps, Tries... (Mais avançadas, mas muito úteis para problemas específicos).

**Para Aprofundar:**
*   MDN Web Docs - JavaScript data structures: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)
*   GeeksforGeeks - Data Structures: [https://www.geeksforgeeks.org/data-structures/](https://www.geeksforgeeks.org/data-structures/)

**Vídeos Recomendados (YouTube):**
*   "Data Structures Easy to Advanced Course"
*   "JavaScript Data Structures"
*   "Arrays vs Objects in JavaScript"
*   "What is a Linked List?"

## Resumo 💡

*   **Estruturas de Dados:** Como os dados são **organizados** (Arrays, Objects, etc.).
*   **Algoritmos:** Como **realizar tarefas** nesses dados (Ordenar, Buscar, etc.).

Escolher a estrutura de dados certa e o algoritmo certo é a chave para escrever código eficiente e rápido! Bons estudos! ✨