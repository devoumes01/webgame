const startBtn = document.getElementById("start-btn");
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
let score = 0;
let gameInterval;

// Generate a random position within the game container
function randomPosition() {
  const container = document.getElementById("game-container");
  const containerRect = container.getBoundingClientRect();
  const size = target.offsetWidth; // Get the target size dynamically
  const x = Math.random() * (containerRect.width - size);
  const y = Math.random() * (containerRect.height - size);
  return { x, y };
}

// Move the target to a random position
function moveTarget() {
  const position = randomPosition();
  target.style.left = `${position.x}px`;
  target.style.top = `${position.y}px`;
}

// Start the game
function startGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  target.style.display = "block";
  moveTarget();

  gameInterval = setInterval(() => {
    moveTarget();
  }, 1000);
}

// End the game
function endGame() {
  clearInterval(gameInterval);
  target.style.display = "none";
  alert(`Game over! Your score: ${score}`);
}

// Add click and touch events for the target
target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

target.addEventListener("touchstart", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

// Start the game when the button is clicked
startBtn.addEventListener("click", () => {
  startGame();

  // End game after 15 seconds
  setTimeout(() => {
    endGame();
  }, 15000);
});
