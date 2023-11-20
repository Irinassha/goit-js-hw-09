import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStart.classList.add('btn-color-js');
btnStop.classList.add('btn-color-js');

let timerColor = null;

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
  timerColor = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  Notiflix.Notify.success('Start')
});

btnStop.addEventListener('click', () => {
  clearInterval(timerColor);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
  Notiflix.Notify.failure('Stop');
});
