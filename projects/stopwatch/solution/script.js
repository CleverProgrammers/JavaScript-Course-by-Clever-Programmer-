let seconds = 0
let tens = 0
const displayTens = document.getElementById('tens')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval


buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10)
}

buttonStop.onclick = () => {
  clearInterval(interval)
}

buttonReset.onclick = () => {
  clearInterval(interval)
  tens = 0
  seconds = 0
  displayTens.innerHTML = `0${tens}`
  displaySeconds.innerHTML = `0${seconds}`
}

const timer = () => {
  tens++

  if (Number(tens) <= 9) {
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(tens) > 9) {
    displayTens.innerHTML = tens
  }

  if (Number(tens) > 99) {
    console.log('seconds')
    seconds++
    displaySeconds.innerHTML = `0${seconds}`
    tens = 0
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }
}
