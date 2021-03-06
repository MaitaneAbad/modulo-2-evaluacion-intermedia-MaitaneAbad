'use strict';

const input = document.querySelector('.js-input');
const textTrack = document.querySelector('.js-textTrack');
const button = document.querySelector('.js-button');
const numberRandom = getRandomNumber();
const numberAttempts = document.querySelector('.js-numberAttempts');
let counter = 0;

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function winNumber() {
  const inputValue = parseInt(input.value);
  if (inputValue === numberRandom) {
    textTrack.innerHTML = 'Pista: ¡Has ganado Campeona!';
  }
}
function compareNumbers() {
  const inputValue = parseInt(input.value);
  if (inputValue < numberRandom) {
    textTrack.innerHTML = 'Pista: Demasiado bajo';
  }
  if (inputValue > numberRandom) {
    textTrack.innerHTML = 'Pista: Demasiado alto';
  }
  if (inputValue <= 0 || inputValue >= 100) {
    textTrack.innerHTML = 'Pista: El número debe ser entre 1 y 100';
  } else {
    winNumber();
  }
}

function addAttempts() {
  counter += 1;
  numberAttempts.innerHTML = `Número de intentos: ${counter}`;
}

function guessNumber(event) {
  event.preventDefault();
  compareNumbers();
  addAttempts();
}
console.log(numberRandom);
button.addEventListener('click', guessNumber);
