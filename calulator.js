const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")
let userInput = [];
let userInput2 = [];
let firstNum;
let secondNum;
let step = 1;
let operation;

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      displaySelection.value = '';
      userInput = [];
    } else if (numbers.value === 'DE'){
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      userInput.pop();
    } else if (numbers.value === '+' || numbers.value === '*' || numbers.value === '/' || numbers.value === '-'){
      step = 2;
      operation = numbers.value;
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
    evaluate();
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
