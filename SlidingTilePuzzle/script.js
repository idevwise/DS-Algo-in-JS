const boardEl = document.getElementById('board');
const messageEl = document.getElementById('message');
const size = 4; // 4x4 board
let board = [];

function initBoard() {
  board = Array.from({ length: size * size }, (_, i) => (i + 1) % (size * size));
  shuffleBoard();
  render();
}

function shuffleBoard() {
  // perform random moves from solved state to ensure solvable puzzle
  for (let i = 0; i < 1000; i++) {
    const empty = board.indexOf(0);
    const neighbors = getNeighborIndices(empty);
    const target = neighbors[Math.floor(Math.random() * neighbors.length)];
    [board[empty], board[target]] = [board[target], board[empty]];
  }
}

function getNeighborIndices(index) {
  const neighbors = [];
  const row = Math.floor(index / size);
  const col = index % size;
  if (row > 0) neighbors.push(index - size);
  if (row < size - 1) neighbors.push(index + size);
  if (col > 0) neighbors.push(index - 1);
  if (col < size - 1) neighbors.push(index + 1);
  return neighbors;
}

function render() {
  boardEl.innerHTML = '';
  board.forEach((value, idx) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (value === 0) {
      tile.classList.add('empty');
    } else {
      tile.textContent = value;
      tile.addEventListener('click', () => handleTileClick(idx));
    }
    boardEl.appendChild(tile);
  });
}

function handleTileClick(index) {
  const empty = board.indexOf(0);
  if (getNeighborIndices(empty).includes(index)) {
    [board[empty], board[index]] = [board[index], board[empty]];
    playBeep();
    render();
    checkSolved();
  }
}

function checkSolved() {
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i] !== i + 1) return;
  }
  messageEl.textContent = 'Puzzle Solved!';
}

function playBeep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 400;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.setValueAtTime(1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  osc.stop(ctx.currentTime + 0.1);
}

initBoard();
