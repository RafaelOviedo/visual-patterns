import { Singleton } from './singleton';

const singletonElement1 = document.getElementById('singleton-1');
const singletonElement2 = document.getElementById('singleton-2');
const singletonElement3 = document.getElementById('singleton-3');
const singletonElement4 = document.getElementById('singleton-4');

const singleton1Button = document.getElementById('singleton-1-button');
const singleton2Button = document.getElementById('singleton-2-button');
const singleton3Button = document.getElementById('singleton-3-button');
const singleton4Button = document.getElementById('singleton-4-button');

singleton1Button.addEventListener('click', () => {
  Singleton.getInstance(singletonElement1);
})

singleton2Button.addEventListener('click', () => {
  Singleton.getInstance(singletonElement2);
})

singleton3Button.addEventListener('click', () => {
  Singleton.getInstance(singletonElement3);
})

singleton4Button.addEventListener('click', () => {
  Singleton.getInstance(singletonElement4);
})

