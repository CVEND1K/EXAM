const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let paddleWidth = 10, paddleHeight = 100;
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = canvas.height / 2 - paddleHeight / 2;

let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSize = 10;
let ballSpeedX = 4, ballSpeedY = 4;

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = 4 * (Math.random() > 0.5 ? 1 : -1);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ракетки
  drawRect(0, playerY, paddleWidth, paddleHeight, '#00ffe7');
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, '#00ffe7');

  // М’яч
  drawBall(ballX, ballY, ballSize, '#fff');

  // Рух м’яча
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Відбивання від верхніх/нижніх меж
  if (ballY <= 0 || ballY >= canvas.height) ballSpeedY = -ballSpeedY;

  // Гравець
  if (
    ballX <= paddleWidth &&
    ballY > playerY &&
    ballY < playerY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // AI
  if (
    ballX >= canvas.width - paddleWidth &&
    ballY > aiY &&
    ballY < aiY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // Вихід за межі
  if (ballX < 0 || ballX > canvas.width) resetBall();

  // Простий AI
  let aiCenter = aiY + paddleHeight / 2;
  if (aiCenter < ballY - 35) aiY += 4;
  else if (aiCenter > ballY + 35) aiY -= 4;

  requestAnimationFrame(gameLoop);
}

canvas.addEventListener('mousemove', (e) => {
  let rect = canvas.getBoundingClientRect();
  playerY = e.clientY - rect.top - paddleHeight / 2;
});

gameLoop();
