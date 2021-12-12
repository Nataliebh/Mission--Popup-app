'use strict';

// display and close popup with buttons:
const button = document.querySelector('.clickHere');
const popup = document.querySelector('.container');
const closeBtns = document.querySelectorAll('.close-wrapper');

closeBtns.forEach(e => {
  console.log(e);
  e.addEventListener('click', e => {
    popup.style.display = 'none';
    button.style.display = 'block';
  });
});

button.addEventListener('click', () => {
  popup.style.display = 'block';
  button.style.display = 'none';
});
