const decBtn = document.getElementById('dec')
console.log(decBtn);
const resBtn = document.getElementById('res')
console.log(resBtn);
const incBtn = document.getElementById('inc')
const number = document.getElementById('number')
console.log(number);

decBtn.addEventListener('click', () => {
  number.innerText = Number(number.innerText) - 1
})
resBtn.addEventListener('click', () => {
  number.innerText = 0;
})
incBtn.addEventListener('click', () => {
  number.innerText = Number(number.innerText) + 1
})

