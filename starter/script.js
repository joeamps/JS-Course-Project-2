'use strict';

// define variables
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');


// setting default values to 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // hides the dice upon refresh

// game functionality


