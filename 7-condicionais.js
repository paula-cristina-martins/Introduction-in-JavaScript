console.log("\nTrabalhando com Condicionais!\n")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

// caso de teste de acordo com a condicional proposta.

const idadeComprador = 10;
const estaCompanhada = false;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaCompanhada == true) {
    console.log("\nCompra Efetuada! Local:", listaDeDestinos.splice(1, 1));
}
else {
    console.log("\nComprador menor de idade!");
}