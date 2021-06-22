console.log(`\nTrabalhando com listas!\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

console.log("Destinos possíveis:", listaDeDestinos);

// adiciona um item na lista após ter sido declarada.
listaDeDestinos.push(`Minas Gerais`);
console.log("\nDestinos possíveis após adicionado:", listaDeDestinos);

// remove um item na lista após ter sido declarada.

// primeiro [posição] e segundo [quantidade de elementos que irá ser deletado após aquela posição determinada anteriormente]

listaDeDestinos.splice(1, 1);

console.log("\nDestinos possíveis após remoção:", listaDeDestinos);
