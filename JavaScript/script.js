// Função para calcular o peso necessário e a quantidade total de correntes
function calcularResultado() {
  const metragemPorQuilo = parseFloat(document.getElementById("metragemPorQuilo").value);
  const quantidade = parseInt(document.getElementById("quantidadeCorrentes").value);
  const tamanho = parseFloat(document.getElementById("tamanhoCorrente").value);

  if (
    isNaN(metragemPorQuilo) || metragemPorQuilo <= 0 ||
    isNaN(quantidade) || quantidade <= 0 ||
    isNaN(tamanho) || tamanho <= 0
  ) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  // Converte o tamanho da corrente de centímetros para metros
  const tamanhoEmMetros = tamanho / 100;

  // Cálculo do comprimento total necessário (em metros)
  const comprimentoTotal = quantidade * tamanhoEmMetros;

  // Cálculo do peso necessário em quilos
  const pesoNecessario = comprimentoTotal / metragemPorQuilo;

  // Converte o peso para gramas (1 kg = 1000g)
  const pesoNecessarioEmGramas = pesoNecessario * 1000;

  // Exibe o resultado
  alert(`Peso necessário para as correntes: ${pesoNecessarioEmGramas.toFixed(2)}g`);

  // Agora, vamos calcular o resultado da tabela com base nos dados fornecidos
  const resultadoTabela = calcularTabela(pesoNecessarioEmGramas);
  console.log(resultadoTabela); // Ou qualquer outra forma de exibir a tabela
}

// Função de exemplo para calcular e exibir os resultados da tabela
function calcularTabela(pesoCorrente) {
  // Exemplo de cálculo para a tabela (substitua com seu cálculo real)
  const tabela = [
    { quantidade: 1, peso: pesoCorrente },
    { quantidade: 2, peso: pesoCorrente * 2 },
    { quantidade: 3, peso: pesoCorrente * 3 },
    // Adicione mais entradas conforme necessário
  ];

  // Exibindo a tabela no console (ou poderia ser no DOM)
  return tabela;
}


