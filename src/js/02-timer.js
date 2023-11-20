import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('button');
btnStart.setAttribute('disabled', true);
btnStart.classList.add('btn-timer-js');

const refs = {
  daysTimer: document.querySelector('span[data-days'),
  hoursTimer: document.querySelector('span[data-hours]'),
  minutesTimer: document.querySelector('span[data-minutes]'),
  secondsTimer: document.querySelector('span[data-seconds]'),
};

let dataD = [];

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < new Date()) {
      Notiflix.Notify.info('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
      dataD.push(this.selectedDates[0].getTime());
    }
  },
};

flatpickr('#datetime-picker', options);

const timerStart = {
  intervalId: null,
  deadline: dataD,

  start() {
    this.intervalId = setInterval(() => {
      const ms = this.deadline - Date.now();
      let msT = convertMs(ms);
      btnStart.setAttribute('disabled', true);
      console.log(msT);

      if (ms <= 0) {
        this.stop();
        msT = convertMs(0);
      }
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;

    btnStart.removeAttribute('disabled');
    refs.daysTimer.style.color = 'black';
    refs.hoursTimer.style.color = 'black';
    refs.minutesTimer.style.color = 'black';
    refs.secondsTimer.style.color = 'black';
  },
};

function addLeadingZero(value) {
  return String(value).padStart('2', '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return (
    (refs.daysTimer.textContent = days),
    (refs.hoursTimer.textContent = addLeadingZero(hours)),
    (refs.minutesTimer.textContent = addLeadingZero(minutes)),
    (refs.secondsTimer.textContent = addLeadingZero(seconds))
  );
}

function btnClickStart() {
  timerStart.start();
  refs.daysTimer.style.color = 'red';
  refs.hoursTimer.style.color = 'red';
  refs.minutesTimer.style.color = 'red';
  refs.secondsTimer.style.color = 'red';
  Notiflix.Notify.success('Start');
}

btnStart.addEventListener('click', btnClickStart);


// var savedDeadline = localStorage.getItem('timerStart');
// if (savedDeadline) {
//   deadlineT = new Date(savedDeadline);
// }

// // Сохраняем дату и время до которого отсчитывается таймер в локальном хранилище
// localStorage.setItem('deadline', deadlineT);
