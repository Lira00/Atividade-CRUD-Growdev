const carros = [];

alert(
  `Bem-vindo ao sistema de CRUD de veículos: \n No momento, o sistema tem ${carros.length} carros cadastrados`
);

var comando;
var count = 0;

function cadastrarVeiculo() {
  const carro = {};
  carro.id = count;
  carro.modelo = prompt("Digite modelo:");
  carro.marca = prompt("Digite marca:");
  carro.ano = prompt("Ano de fabrica:");
  carro.cor = prompt("Digite cor:");
  carro.preco = prompt("Digite preço do carro:");
  carros.push(carro);

  count++;
}

function listarVeiculo() {
  carros.forEach((carro) =>
    console.log(`ID: ${carro.id} | Modelo: ${carro.modelo}| Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} |
  Preço: ${carro.preco}`)
  );
}

function filtrarVeiculo() {
  let input = prompt("Digite a marca do carro:");

  carros.filter(function (carro) {
    if (carro.marca === input) {
      return console.log(carro);
    }
  });
}

function atualizarVeiculo() {
  let identificador = prompt("Digite o id do veículo:");

  const carro = carros.find(function (carro) {
    return carro.id == identificador;
  });

  if (!carro) {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
  } else {
    let cor = prompt("Digite a cor:");
    let preco = prompt("Digite o preço:");

    carro.cor = cor;
    carro.preco = preco;
  }
  return console.log(carro);
}

function apagarVeiculo() {
  let identificador = parseInt(
    prompt("Digite o ID do carro que deseja apagar.")
  );

  const carro = carros.findIndex((carro) => carro.id == identificador);
  if (carro === -1) {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
    );
  }

  carros.splice(carro, 1);
  return listarVeiculo();
}

function selecionarNumero() {
  comando = parseInt(
    prompt(
      "Escolha uma das opções do sistema: \n 1: Cadastrar veículo \n 2: Listar todos os veículos \n 3: Filtrar veículos por marca \n 4: Atualizar veículo \n 5: Remover veículo \n 6: Sair do sistema"
    )
  );
  switch (comando) {
    case 1:
      cadastrarVeiculo();
      break;
    case 2:
      listarVeiculo();
      break;
    case 3:
      filtrarVeiculo();
      break;
    case 4:
      atualizarVeiculo();
      break;
    case 5:
      apagarVeiculo();
      break;
    case 6:
      console.log("Sair do sistema");
      break;
    default:
      console.log("Opção invalida");
      break;
  }
}

do {
  selecionarNumero();
} while (comando != 6);
