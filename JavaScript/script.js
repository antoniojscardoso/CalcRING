function calcularResultado() {
  const metragemPorQuilo = parseFloat(document.getElementById("metragemPorQuilo").value);
  const quantidade = parseInt(document.getElementById("quantidadeCorrentes").value);
  const tamanho = parseFloat(document.getElementById("tamanhoCorrente").value);

// Atribuindo valores padrão para quantidade e tamanho
quantidade = quantidade || 1;  // Se quantidade não for fornecida, usa 1
tamanho = tamanho || 50;       // Se tamanho não for fornecido, usa 50

// Verificação de dados válidos
if (isNaN(metragemPorQuilo) || metragemPorQuilo <= 0) {
  alert("Por favor, insira um valor válido para a metragem por quilo!");
  return;

  // Cálculo do comprimento total necessário em metros
  const comprimentoTotal = (quantidade * tamanho) / 100; // Convertendo o tamanho para metros

  // Cálculo do peso necessário (em quilogramas)
  const pesoNecessarioKg = comprimentoTotal / metragemPorQuilo;

  // Converter o peso necessário de quilogramas para gramas
  const pesoNecessarioGramas = pesoNecessarioKg * 1000;

  // Exibir o resultado de peso necessário no campo de texto (em gramas)
  document.getElementById("resultadoPeso").innerHTML =
    `Peso necessário para ${quantidade} correntes de ${tamanho} cm:  <span class="peso-necesario">${pesoNecessarioGramas.toFixed(2)} g</span>`;

  // Pesos de referência em gramas (100g, 250g, 500g, 750g, 1kg)
  const pesos = [100, 250, 500, 750, 1000]; // Pesos em gramas
  const tamanhos = [35, 45, 50, 60]; // Tamanhos em centímetros
  const tabela = document.getElementById("tabelaQuantidades");
  tabela.innerHTML = ""; // Limpar a tabela antes de adicionar novos dados

  // Criar cabeçalho da tabela
  let headerRow = `<tr><th>Peso</th>`;
  tamanhos.forEach(tamanhoCorrente => {
    headerRow += `<th>${tamanhoCorrente} cm</th>`;
  });
  headerRow += `</tr>`;
  tabela.innerHTML += headerRow;

  // Preencher a tabela com a quantidade de correntes para os pesos de referência
  pesos.forEach(peso => {
    let row = `<tr><td>${peso}g</td>`;
    tamanhos.forEach(tamanhoCorrente => {
      // Cálculo do peso por corrente em gramas
      const pesoPorCorrenteKg = (tamanhoCorrente / 100) / metragemPorQuilo; // Peso por corrente em quilogramas
      const pesoPorCorrenteGramas = pesoPorCorrenteKg * 1000; // Convertendo para gramas

      // Calcular a quantidade de correntes que cabem no peso atual
      const quantidadePorPeso = Math.floor(peso / pesoPorCorrenteGramas); // Quantidade de correntes
      row += `<td>${quantidadePorPeso}</td>`;
    });
    row += `</tr>`;
    tabela.innerHTML += row;
  });
}


