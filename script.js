const startBtn = document.getElementById("start-btn");
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
let score = 0;
let gameInterval;

function randomPosition() {
  const container = document.getElementById("game-container");
  const containerRect = container.getBoundingClientRect();
  const x = Math.random() * (containerRect.width - 50);
  const y = Math.random() * (containerRect.height - 100) + 50;
  return { x, y };
}

function moveTarget() {
  const position = randomPosition();
  target.style.left = `${position.x}px`;
  target.style.top = `${position.y}px`;
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  target.style.display = "block";
  moveTarget();

  gameInterval = setInterval(() => {
    moveTarget();
  }, 1000);
}

function endGame() {
  clearInterval(gameInterval);
  target.style.display = "none";
  alert(`Game over! Your score: ${score}`);
}

target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

startBtn.addEventListener("click", () => {
  startGame();

  setTimeout(() => {
    endGame();
  }, 15000); // End game after 15 seconds
});
