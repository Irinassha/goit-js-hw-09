import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElement = document.querySelector('.form');
console.log(formElement);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
        );
      }
    }, delay);
  });
}

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formElement);

  const delay = +formData.get('delay');
  const step = +formData.get('step');
  const amount = +formData.get('amount');

  for (let i = 0; i < amount; i++) {
    const myDelay = delay + i * step;
    createPromise(i, myDelay)
      .then((position = i, delay = myDelay) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((position = i, delay = myDelay) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
