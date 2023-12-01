const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")
const displayResults = document.querySelector(".displayResults")
let userInput = [];
let userInput2 = [];
let firstNum = 0;
let secondNum = 0;
let step = 1;
let operation;
let result = 0

/* numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      displaySelection.value = '';
      firstNum = 0
      secondNum = 0
      result = 0
      userInput = [];
      userInput2 = [];
      operation = null
      step = 1
      displayResults.innerHTML = '';
    } else if (numbers.value === 'DE'){
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      userInput.pop();
    } else if (numbers.value === '+' || numbers.value === '*' || numbers.value === '/' || numbers.value === '-'){
      step = 2;
      operation = numbers.value;
      console.log('first number', firstNum, 'second number', secondNum)
      if (operation === '+') {
        result = firstNum + secondNum;
        displayResults.innerHTML = result;
      } else if (operation === '-') {
        result = firstNum - secondNum;
        displaySelection.value = result;
      } else if (operation === '*') {
        result = firstNum * secondNum;
        displaySelection.value = result;
      } else if (operation === '/') {
        result = firstNum / secondNum;
        displaySelection.value = result;
      }
    } else {
      if (step === 1){
        step = 1;
        userInput.push(numbers.value);
        firstNum = Number(userInput.join(''))
        displaySelection.value = firstNum;
      } else if (step === 2){
        userInput2.push(numbers.value);
        secondNum = Number(userInput2.join(''))
        displaySelection.value = secondNum;
      }
    }
    console.log(userInput);
  })
}) */

let numEntered = '';

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      displaySelection.value = '';
      firstNum = 0
      secondNum = 0
      result = 0
      userInput = [];
      userInput2 = [];
      operation = null
      step = 1
      displayResults.innerHTML = '';
    } else if (numbers.value === 'DE'){
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      userInput.pop();
    } else if (numbers.value === '+' || numbers.value === '*' || numbers.value === '/' || numbers.value === '-'){
      userInput.push(numEntered);
      operation = numbers.value;
      userInput2.push(operation)
      numEntered = '';
      /* if (operation === '+') {
        result = firstNum + secondNum;
        displayResults.innerHTML = result;
      } else if (operation === '-') {
        result = firstNum - secondNum;
        displaySelection.value = result;
      } else if (operation === '*') {
        result = firstNum * secondNum;
        displaySelection.value = result;
      } else if (operation === '/') {
        result = firstNum / secondNum;
        displaySelection.value = result;
      } */
    } else if(numbers.value === '=') {
      userInput.push(numEntered);
      numEntered = '';
      let calculation = 0;
      userInput = userInput.map(Number);
      for (i=0; i < userInput2.length; i++){
        if (userInput2[i] === '+') {
          result = userInput[0] + userInput[1]
          calculation += result;
          displayResults.innerHTML = calculation;
        } else if (userInput2[i] === '-') {
          result = userInput[0] - userInput[1];
          calculation -= result;
          displaySelection.value = calculation;
        } else if (userInput2[i] === '*') {
          result = userInput[0] * userInput[1];
          calculation *= result;
          displaySelection.value = calculation;
        } else if (userInput2[i] === '/') {
          result = userInput[0] / userInput[1];
          calculation /= result
          displaySelection.value = calculation;
      }
    }
   } else {
      numEntered += numbers.value;
      /* if (step === 1){
        step = 1;
        userInput.push(numbers.value);
        firstNum = Number(userInput.join(''))
        displaySelection.value = firstNum;
      } else if (step === 2){
        userInput2.push(numbers.value);
        secondNum = Number(userInput2.join(''))
        displaySelection.value = secondNum;
      } */
    }
    console.log(userInput);
  })
})

/*function evaluate(){
  let item = [];
  for (i=0; i < userInput.length; i++){
    if(userInput[i] != '+'){
      //item = userInput.slice(0, i);
      item += userInput[i];
      if (userInput[i] === '+'){
        let first = item;
        console.log("first equation: " + first);
      }
    }
    console.log("All numbers: " + item);
  }
} */
