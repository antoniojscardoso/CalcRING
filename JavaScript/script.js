// Função para atualizar os cálculos
function atualizarCalculos() {
  const metragemPorQuilo = parseFloat(document.getElementById("metragemPorQuilo").value);
  const quantidadeInput = document.getElementById("quantidadeCorrentes");
  const pesoInput = document.getElementById("pesoDisponivel");
  const tamanhoAtual = parseFloat(document.querySelector(".botao-tamanho.selecionado").dataset.tamanho);

  // Verificação de dados válidos
  if (isNaN(metragemPorQuilo) || metragemPorQuilo <= 0 || isNaN(tamanhoAtual) || tamanhoAtual <= 0) {
    alert("Por favor, insira valores válidos para metragem por quilo e selecione um tamanho.");
    return;
  }

  const resultadoPeso = document.getElementById("resultadoPeso");
  resultadoPeso.innerHTML = ""; // Limpar o resultado

  const resultadoQtd = document.getElementById("resultadoQtd");
  resultadoQtd.innerHTML = ""; // Limpar o resultado

  if (quantidadeInput.value) {
    const quantidade = parseInt(quantidadeInput.value);
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }

    const comprimentoTotal = (quantidade * tamanhoAtual) / 100; // Convertendo tamanho para metros
    const pesoNecessarioKg = comprimentoTotal / metragemPorQuilo;
    const pesoNecessarioGramas = pesoNecessarioKg * 1000;

    resultadoPeso.innerHTML += `Peso necessário para ${quantidade} correntes de ${tamanhoAtual} cm: <strong>${pesoNecessarioGramas.toFixed(2)} g</strong>`;
  }

  if (pesoInput.value) {
    const pesoDisponivelGramas = parseFloat(pesoInput.value);
    if (isNaN(pesoDisponivelGramas) || pesoDisponivelGramas <= 0) {
      alert("Por favor, insira um peso válido.");
      return;
    }

    const pesoDisponivelKg = pesoDisponivelGramas / 1000;
    const comprimentoPossivel = pesoDisponivelKg * metragemPorQuilo; // Comprimento total possível
    const quantidadePossivel = Math.floor((comprimentoPossivel * 100) / tamanhoAtual); // Convertendo metros para unidades

    resultadoQtd.innerHTML += `Quantidade possível com ${pesoDisponivelGramas} g para correntes de ${tamanhoAtual} cm: <strong>${quantidadePossivel}</strong>`;
  }
}

// Função para selecionar o tamanho
function selecionarTamanho(elemento) {
  document.querySelectorAll(".botao-tamanho").forEach(botao => botao.classList.remove("selecionado"));
  elemento.classList.add("selecionado");
  atualizarCalculos();
}

// HTML Dinâmico para o funcionamento:
document.addEventListener("DOMContentLoaded", () => {
  const tamanhos = [30, 35, 40, 45, 50, 60, 70, 80];
  const botoesContainer = document.getElementById("botoesTamanhos");

  tamanhos.forEach(tamanho => {
    const botao = document.createElement("button");
    botao.textContent = `${tamanho} cm`;
    botao.className = "botao-tamanho";
    botao.dataset.tamanho = tamanho;
    botao.onclick = () => selecionarTamanho(botao);
    botoesContainer.appendChild(botao);
  });
});