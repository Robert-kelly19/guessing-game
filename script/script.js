const input = document.getElementById("txt");
const check = document.getElementById("che")
const msge = document.getElementById("result")

let random = Math.floor(Math.random() * 100 + 1);

check.addEventListener('click', ()=>{
  const guess = input.value;

  if (guess === random){
    msge.textContent="you guessed it right"
  }else{
    msge.textContent="Better luck next time my boy"
  }
})