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

      // Cálculo do comprimento total necessário (em metros)
      const comprimentoTotal = (quantidade * tamanho) / 1000;

      // Cálculo do peso necessário
      const pesoNecessario = comprimentoTotal / metragemPorQuilo;

      // Exibir resultado de peso necessário
      document.getElementById("resultadoPeso").innerHTML =
        `Peso necessário para ${quantidade} correntes de ${tamanho} cm: <span class="peso-necesario">${pesoNecessario.toFixed(3)}</span>`;

      // Calcular quantidade de correntes possíveis para cada tamanho (45cm, 50cm, 60cm)
      const tamanhos = [45, 50, 60];
      const tabela = document.getElementById("tabelaQuantidades");
      tabela.innerHTML = "";

      tamanhos.forEach((tamanhoCorrente) => {
        const quantidadePorKg = Math.floor(metragemPorQuilo / (tamanhoCorrente / 100)); // Convertendo para metros
        const linha = `
          <tr>
            <td>${tamanhoCorrente} cm</td>
            <td>${quantidadePorKg}</td>
          </tr>
        `;
        tabela.innerHTML += linha;
      });
    }
