// Seleciona o canvas
const illo = new Zdog.Illustration({
    element: '#zdog-canvas',
    dragRotate: true, // Permite girar manualmente
    rotate: { x: -0.5 }, // Inclinação inicial
    resize: true, // Ajusta ao tamanho da tela
  });
  
  // Função para criar um elos da corrente
  function createLink(x, y, z, color) {
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 20,
      stroke: 6,
      color: color,
      translate: { x, y, z },
      rotate: { y: Math.PI / 2 }, // Roda o elo para ficar na horizontal
    });
  }
  
  // Cria os elos em uma formação circular
  const numLinks = 12;
  const radius = 60;
  for (let i = 0; i < numLinks; i++) {
    const angle = (i / numLinks) * Zdog.TAU;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    createLink(x, y, 0, i % 2 === 0 ? '#E62' : '#FED'); // Alterna as cores
  }
  
  // Animação da corrente girando
  function animate() {
    illo.rotate.z += 0.03; // Gira no eixo Z
    illo.updateRenderGraph(); // Atualiza a renderização
    requestAnimationFrame(animate);
  }
  
  animate();
s  