function calcularResultado() {
  const metragemPorQuilo = parseFloat(document.getElementById("metragemPorQuilo").value);
  const quantidade = parseInt(document.getElementById("quantidadeCorrentes").value);
  const tamanho = parseFloat(document.getElementById("tamanhoCorrente").value);

  // Verificação de dados válidos
  if (
    isNaN(metragemPorQuilo) || metragemPorQuilo <= 0 ||
    isNaN(quantidade) || quantidade <= 0 ||
    isNaN(tamanho) || tamanho <= 0
  ) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  // Cálculo do comprimento total necessário em metros
  const comprimentoTotal = (quantidade * tamanho) / 100; // Convertendo o tamanho para metros

  // Cálculo do peso necessário (em quilos)
  const pesoNecessario = comprimentoTotal / metragemPorQuilo;

  // Exibir o resultado de peso necessário no campo de texto
  document.getElementById("resultadoPeso").innerText =
    `Peso necessário para ${quantidade} correntes de ${tamanho} cm: ${pesoNecessario.toFixed(3)} kg`;

  // Calcular a quantidade de correntes possíveis para 45cm, 50cm e 60cm em 1kg
  const tamanhos = [45, 50, 60]; // Tamanhos em centímetros
  const tabela = document.getElementById("tabelaQuantidades");
  tabela.innerHTML = ""; // Limpar a tabela antes de adicionar novos dados

  tamanhos.forEach((tamanhoCorrente) => {
    // Cálculo da quantidade de correntes que cabem em 1kg para cada tamanho (arredondado para baixo)
    const quantidadePorKg = Math.floor(metragemPorQuilo / (tamanhoCorrente / 100)); // Convertendo tamanho para metros e calculando a quantidade

    // Criar linha da tabela para o tamanho corrente
    const linha = `
      <tr>
        <td>${tamanhoCorrente} cm</td>
        <td>${quantidadePorKg}</td>
      </tr>
    `;
    tabela.innerHTML += linha; // Adicionar linha na tabela
  });
}


