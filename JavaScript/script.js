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

  // Cálculo do peso necessário (em quilos)
  const pesoNecessario = comprimentoTotal / metragemPorQuilo;

  // Converte o peso de quilos para gramas (1kg = 1000g)
  const pesoNecessarioEmGramas = pesoNecessario * 1000;

  // Exibe o resultado
  console.log(`Peso necessário: ${pesoNecessarioEmGramas.toFixed(2)}g`);
  alert(`Peso necessário: ${pesoNecessarioEmGramas.toFixed(2)}g`);
}

