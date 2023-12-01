const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")
const displayResults = document.querySelector(".displayResults")
let userInput = [];
let operationArray = [];
let operation;
let result = 0;
let numEntered = '';
let j = 0;

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      reset();
    } else if (numbers.value === 'DE'){
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      numEntered = numEntered.toString().slice(0,-1);
    } else if (numbers.value === '+' || numbers.value === '*' || numbers.value === '/' || numbers.value === '-'){
      if (numEntered === ''){
        operation = numbers.value;
        operationArray.push(operation)
      } else {
        userInput.push(numEntered);
        operation = numbers.value;
        operationArray.push(operation)
        numEntered = '';
      }
    } else if(numbers.value === '=') {
      calculate();
   } else {
      numEntered += numbers.value;
      displaySelection.value = numEntered;
    }
    console.log(userInput);
  })
})

function reset(){
  displaySelection.value = '';
  result = 0
  userInput = [];
  operationArray = [];
  operation = null;
  numEntered = '';
  j = 0;
  displayResults.innerHTML = '';
}

function calculate(){
  userInput.push(numEntered);
      numEntered = '';
      userInput = userInput.map(Number);
      for(i = j; i < userInput.length; i++){
        if (operationArray[i] === '+') {
          result = userInput[i] + userInput[i+1]
          userInput[i+1] = result;
          result = userInput[i+1];
          //calculation += result;
          displayResults.innerHTML = result;
        } else if (operationArray[i] === '-') {
          result = userInput[i] - userInput[i+1];
          userInput[i+1] = result;
          result = userInput[i+1];
          //calculation -= result;
          displayResults.innerHTML = result;
        } else if (operationArray[i] === '*') {
          result = userInput[i] * userInput[i+1];
          userInput[i+1] = result;
          result = userInput[i+1];
          //calculation *= result;
          displayResults.innerHTML = result;
        } else if (operationArray[i] === '/') {
          result = userInput[i] / userInput[i+1];
          userInput[i+1] = result;
          result = userInput[i+1];
          //calculation /= result
          displayResults.innerHTML = result;
        }
        j++;
      }
      return j--;
}
