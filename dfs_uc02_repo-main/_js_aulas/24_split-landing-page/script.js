// Aguarda até que o DOM esteja totalmente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  
    // Obtém referências para os elementos relevantes do HTML
    const container = document.querySelector('.container');
    const leftSplit = document.querySelector('.split.left');
    const rightSplit = document.querySelector('.split.right');
  
    // Adiciona um ouvinte de eventos para o evento mouseover no contêiner
    container.addEventListener('mouseover', function (event) {
      // Verifica se o elemento sobre o qual o mouse passou é o split.left
      if (event.target === leftSplit) {
        // Se sim, expande o console à esquerda
        expandConsole('left');
      } 
      // Verifica se o elemento sobre o qual o mouse passou é o split.right
      else if (event.target === rightSplit) {
        // Se sim, expande o console à direita
        expandConsole('right');
      }
    });
  
    // Adiciona um ouvinte de eventos para o evento mouseout no contêiner
    container.addEventListener('mouseout', function () {
      // Contrai o console (remove as classes de expansão)
      shrinkConsole();
    });
  
    // Função para expandir o console (adiciona classes de expansão)
    function expandConsole(side) {
      container.classList.add(`hover-${side}`);
      container.classList.remove(`hover-${side === 'left' ? 'right' : 'left'}`);
    }
  
    // Função para contrair o console (remove as classes de expansão)
    function shrinkConsole() {
      container.classList.remove('hover-left', 'hover-right');
    }
  });
  
  