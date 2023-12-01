const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")
const displayResults = document.querySelector(".displayResults")
let numberArray = [];
let operationArray = [];
let operation;
let result = 0;
let numEntered = '';
let j = 0; //Determines the position of where to start calculations in numberArray[]

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      reset();
    } else if (numbers.value === 'DE'){ //removes the last number inputted from user.
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      numEntered = numEntered.toString().slice(0,-1);
    } else if (numbers.value === '+' || numbers.value === '*' || numbers.value === '/' || numbers.value === '-'){
      if (numEntered === ''){
        operation = numbers.value;
        operationArray.push(operation) //stores the operations that need to be executed
      } else {
        numberArray.push(numEntered);
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
    console.log(numberArray);
  })
})

function reset(){
  displaySelection.value = '';
  result = 0
  numberArray = [];
  operationArray = [];
  operation = null;
  numEntered = '';
  j = 0;
  displayResults.innerHTML = '';
}

function calculate(){
  numberArray.push(numEntered);
  numEntered = '';
  numberArray = numberArray.map(Number);
  for(i = j; i < numberArray.length; i++){
    if (operationArray[i] === '+') {
      result = numberArray[i] + numberArray[i+1]
      numberArray[i+1] = result;
      result = numberArray[i+1];
      displayResults.innerHTML = result;
    } else if (operationArray[i] === '-') {
      result = numberArray[i] - numberArray[i+1];
      numberArray[i+1] = result;
      result = numberArray[i+1];
      displayResults.innerHTML = result;
    } else if (operationArray[i] === '*') {
      result = numberArray[i] * numberArray[i+1];
      numberArray[i+1] = result;
      result = numberArray[i+1];
      displayResults.innerHTML = result;
    } else if (operationArray[i] === '/') {
      result = numberArray[i] / numberArray[i+1];
      numberArray[i+1] = result;
      result = numberArray[i+1];
      displayResults.innerHTML = result;
    }
    j++;
  }
  return j--;
}
