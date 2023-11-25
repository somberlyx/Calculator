const numbers = document.querySelectorAll(".numbers");
const displaySelection = document.querySelector(".displaySelections")

numbers.forEach(numbers => {
  numbers.addEventListener("click", function(){
    displaySelection.value = numbers.value;
  })
})