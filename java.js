let show = document.getElementById("display")
let user_Number = document.getElementById("number")
show.classList.remove("display-data")

function compareValue(num1, num2) {
  if(num1 < num2) {
    show.textContent = `Your guess is too low`
    show.style.height = "25px"
  } else if (num1 > num2) {
    show.textContent = `Your guess is too high`
    show.style.height = "25px"
  } else {
    show.textContent = `Your guess number ${num1} is match with computer number ${num2}`
    show.style.height = "45px"
    randomValue = random_num()
  }
  show.classList.add("display-data")
}

function random_num() {
  let random = Math.floor(Math.random() * 50) + 1
  return random
}

let randomValue = random_num()

function validation(user){
  if (user < 1) {
    show.textContent = "Please enter number greater than 0";
    show.style.height = "45px"
  } else if(user > 50) {
    show.textContent = "Please enter number less than 50"
    show.style.height = "45px"
  }
}

document.getElementById("refresh").addEventListener("click", () => {
  let userValue = Number(user_Number.value)
  if(userValue == "") {
    show.textContent = "Please first enter number"
    show.style.height = "25px"
  } else {
    randomValue = random_num()
    show.textContent = "Computer number is reset"
    show.style.height = "25px"
  }
  show.classList.add("display-data")
})

document.getElementById("submit").addEventListener("click", () => {
  let userValue = Number(user_Number.value)
  compareValue(userValue, randomValue)
  validation(userValue)
})

document.getElementById("reset").addEventListener("click", () => {
  show.textContent = "" 
  user_Number.value = ""
  show.classList.remove("display-data")
  randomValue = random_num()
})

document.getElementById("number-reset").addEventListener("click", () => {
  user_Number.value = ""
})