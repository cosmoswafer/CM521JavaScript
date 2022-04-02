import './style.css';

const number_span = document.querySelector('span.counter-number');
const plus_button = document.querySelector('button.plus-btn');
const minus_button = document.querySelector('button.minus-btn');

const countNumber = (n) => {
  number_span.textContent = Number(number_span.textContent) + n;
}

plus_button.addEventListener('click', (e) => {countNumber(+1)});
minus_button.addEventListener('click', (e) => {countNumber(-1)});