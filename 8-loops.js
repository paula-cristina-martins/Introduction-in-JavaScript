console.log("\nTrabalhando com Condicionais!\n")

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const estaCompanhada = false;
let temPassagemComprada = false;
const destino = "Minas Gerais";

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaCompanhada == true);

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("\nDestino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("\nBoa Viagem!");
}
else{
    console.log("\nErro no sistema!");
}

/* apenas exibição de como é a estrutura do laço de repetição FOR.
for (let cont=0; cont<3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
} */