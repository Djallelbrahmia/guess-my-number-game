'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing';
});
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score < 1) {
    return (document.querySelector('.message').textContent =
      '😪 You lost the game  !');
  }
  if (!guess) {
    document.querySelector('.message').textContent = '😡 No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.message').textContent = '🤩 Correct Number';
    console.log(score);
    console.log(highScore);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 To High';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(score);
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 To Low';
    score--;
    document.querySelector('.score').textContent = score;
    console.log(score);
  }
});
