const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const romanticSong = document.getElementById('romanticSong');

// Função para criar flores e corações
function createFloatingElement(type) {
  const element = document.createElement('div');
  element.classList.add(type);

  // Posição inicial aleatória
  element.style.left = Math.random() * 100 + 'vw';
  element.style.animationDuration = Math.random() * 2 + 3 + 's';

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 6000);
}

// Quando clicar no botão "Sim"
yesBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  romanticSong.play();

  // Gerar flores e corações subindo
  setInterval(() => {
    createFloatingElement('flower');
    createFloatingElement('heart');
  }, 500);
});

// Quando clicar no botão "Não"
noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * window.innerWidth);
  const j = Math.floor(Math.random() * window.innerHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = '${i}px';
  noBtn.style.top = '${j}px';
});

// Fechar o modal ao clicar no "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  romanticSong.pause();
  romanticSong.currentTime = 0;
});

// Fechar o modal ao clicar fora da caixa de conteúdo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    romanticSong.pause();
    romanticSong.currentTime = 0;
  }
};