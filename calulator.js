const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")
let userInput = [];

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    if (numbers.value === 'AC'){
      displaySelection.value = '';
      userInput = [];
    } else if (numbers.value === 'DE'){
      displaySelection.value = displaySelection.value.toString().slice(0,-1);
      userInput.pop();
    } else {
      displaySelection.value += numbers.value;
      userInput.push(numbers.value);
    }
    console.log(userInput);
  })
})