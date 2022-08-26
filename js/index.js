import {
  buttonPlay,
  buttonStop,
  buttonRise,
  buttonFall,
  soundForest,
  soundCoffee,
  soundRain,
  soundFireplace,
  minutesDisplay,
  secondsDisplay,
  infoRise,
  infoFall,
  buttonPause,
  buttonDark,
  buttonLight
} from './controls.js'
import Events from './events.js'
import Sound from './sound.js'

const sound = Sound()

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

buttonStop.addEventListener('click', () => {
  Timer.updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonRise.addEventListener('click', () => {
  let minutesNumber

  minutesNumber = Number(minutesDisplay.textContent) + 5
  Timer.updateDisplay(minutesNumber, 0)
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  if (minutesDisplay.textContent > 60) {
    minutesDisplay.textContent = '60'
  }
})

buttonFall.addEventListener('click', () => {
  let minutesNumber

  if (minutesDisplay.textContent != 0) {
    minutesNumber = Number(minutesDisplay.textContent) - 5
    Timer.updateDisplay(minutesNumber, 0)
    if (minutesDisplay.textContent < 0) {
      minutesDisplay.textContent = '00'
    }
  } else {
    minutesDisplay.textContent = '00'
  }
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

const Timer = {
  countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)

      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        sound.displaySoundCoffe.pause()
        sound.displaySoundRife.pause()
        sound.displaySoundForest.pause()
        sound.soundRain.pause()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      Timer.updateDisplay(minutes, String(seconds - 1))
      Timer.countdown()
    }, 1000)
  },

  pause() {
    clearTimeout(timerTimeOut)
  },

  updateDisplay(newMinutes, seconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
}

Events({ Timer, sound })
