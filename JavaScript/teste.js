function atualizarCalculos() {
    const pesoPorMetro = parseFloat(document.getElementById("pesoPorMetro").value);
    const tamanhoCorrente = parseFloat(document.getElementById("tamanhoCorrente").value);
    const quantidadeCorrentes = parseInt(document.getElementById("quantidadeCorrentes").value);

    if (isNaN(pesoPorMetro) || pesoPorMetro <= 0) {
      alert("Por favor, insira uma metragem total válida.");
      return;
    }

    const comprimentoTotal = (quantidadeCorrentes * tamanhoCorrente) / 100;
    const pesoNecessario = (comprimentoTotal / pesoPorMetro) * 1000;

    document.getElementById("pesoNecessario").value = pesoNecessario.toFixed(2);
  }

  function atualizarPorPeso() {
    const pesoPorMetro = parseFloat(document.getElementById("pesoPorMetro").value);
    const tamanhoCorrente = parseFloat(document.getElementById("tamanhoCorrente").value);
    const pesoNecessario = parseFloat(document.getElementById("pesoNecessario").value);

    if (isNaN(pesoPorMetro) || pesoPorMetro <= 0) {
      alert("Por favor, insira uma metragem total válida.");
      return;
    }

    const comprimentoPossivel = (pesoNecessario / 1000) * pesoPorMetro;
    const quantidadeCorrentes = Math.floor((comprimentoPossivel * 100) / tamanhoCorrente);

    document.getElementById("quantidadeCorrentes").value = quantidadeCorrentes;
  }

  function atualizarPorQuantidade() {
    const pesoPorMetro = parseFloat(document.getElementById("pesoPorMetro").value);
    const tamanhoCorrente = parseFloat(document.getElementById("tamanhoCorrente").value);
    const quantidadeCorrentes = parseInt(document.getElementById("quantidadeCorrentes").value);

    if (isNaN(pesoPorMetro) || pesoPorMetro <= 0) {
      alert("Por favor, insira uma metragem total válida.");
      return;
    }

    const comprimentoTotal = (quantidadeCorrentes * tamanhoCorrente) / 100;
    const pesoNecessario = (comprimentoTotal / pesoPorMetro) * 1000;

    document.getElementById("pesoNecessario").value = pesoNecessario.toFixed(2);
  }

  document.addEventListener("DOMContentLoaded", atualizarCalculos);