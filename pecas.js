const listaPecas = ["Ar condicionado", "Motor", "Amortecedor"];

console.log(listaPecas);

if (listaPecas.length < 10) {
  console.log("É possível cadastrar mais peças");
} else {
  console.log("Não é possível cadastrar mais peças");
}

let peso = 350;

if (peso >= 100) {
  console.log("O peso da peça está adequado");
} else {
  console.log("O peso da peçoa não é adequado");
}

let nomePeca = "";

if (nomePeca.length > 3) {
  console.log("Nome adequado");
} else if (nomePeca === "") {
  console.log("O nome não pode ser vazio");
}
