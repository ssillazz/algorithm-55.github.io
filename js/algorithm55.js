
const $btn = document.querySelector('#button');

$btn.addEventListener('click', ()=>{

  const $inputNumber = document.querySelector('#number').value;

  const $outputs = {
    numbers: document.querySelector('.numbers'),
    otherThan55: document.querySelector('.numbersOtherThan55')
  }

  let numbers = [];

  for(let i = 0; i < $inputNumber; i++){

    const RANDOM_INTEGER = parseInt((Math.random() * $inputNumber) * $inputNumber + 1);
    
    numbers = [...numbers, RANDOM_INTEGER];
    
  }

  $outputs.numbers.innerHTML = numbers.map(num => `<span class="${num === 55 ? 'otherThan55' : 'number'}">${num}</span>`);

  const numbers_other_than_55 = numbers.filter(num => num !== 55);

  $outputs.otherThan55.innerHTML = numbers_other_than_55.map(num => `<span class="number">${num}</span>`);

  return;

})



