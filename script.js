const emojis = ['😀','😀', '😎','😎', '🎉','🎉', '🚀','🚀', '🌟','🌟', '🍕','🍕', '🎈','🎈', '🎁','🎁'];
let isGameActive = true;

initializeGame();

function initializeGame() {
  isGameActive = true;
  const gameContainer = document.querySelector('.game');
  gameContainer.innerHTML = '';

  var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
  for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];
    gameContainer.appendChild(box);
    box.onclick = handleBoxClick;
  }
}

function handleBoxClick() {
  if (!isGameActive) return;

  this.classList.add('boxOpen');
  setTimeout(() => {
    const openBoxes = document.querySelectorAll('.boxOpen');
    if (openBoxes.length > 1) {
      if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
        openBoxes.forEach(box => box.classList.add('boxMatch'));
        openBoxes.forEach(box => box.classList.remove('boxOpen'));

        if (document.querySelectorAll('.boxMatch').length === emojis.length) {
          isGameActive = false;
          setTimeout(() => {
            alert('You win!');
            initializeGame();
          }, 500);
        }
      } else {
        openBoxes.forEach(box => box.classList.remove('boxOpen'));
      }
    }
  }, 500);
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  initializeGame();
});