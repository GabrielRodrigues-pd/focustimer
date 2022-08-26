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
  buttonLight,
  corPlay,
  corStop,
  corRise,
  corFall,
  corPause,
  soundPath,
  buttonPath,
  displayTimer,
  myRange
} from './controls.js'
let toggleClass
let toggleClassSlider

export default function ({ Timer, sound }) {
  buttonPlay.addEventListener('click', () => {
    Timer.countdown()
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  })

  buttonPause.addEventListener('click', () => {
    Timer.pause()
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  })

  buttonRise.addEventListener('mouseenter', () => {
    infoRise.classList.remove('hide')
  })

  buttonRise.addEventListener('mouseleave', () => {
    infoRise.classList.add('hide')
  })

  buttonFall.addEventListener('mouseenter', () => {
    infoFall.classList.remove('hide')
  })

  buttonFall.addEventListener('mouseleave', () => {
    infoFall.classList.add('hide')
  })

  soundCoffee.addEventListener('click', () => {
    toggleClass = soundCoffee.classList.toggle('select')
    if (toggleClass) {
      sound.displaySoundCoffe.play()
    } else {
      sound.displaySoundCoffe.pause()
    }
  })
  soundFireplace.addEventListener('click', () => {
    toggleClass = soundFireplace.classList.toggle('select')
    if (toggleClass) {
      sound.displaySoundRife.play()
    } else {
      sound.displaySoundRife.pause()
    }
  })
  soundForest.addEventListener('click', () => {
    toggleClass = soundForest.classList.toggle('select')
    if (toggleClass) {
      sound.displaySoundForest.play()
    } else {
      sound.displaySoundForest.pause()
    }
  })
  soundRain.addEventListener('click', () => {
    toggleClass = soundRain.classList.toggle('select')

    if (toggleClass) {
      sound.soundRain.play()
    } else {
      sound.soundRain.pause()
    }
  })
  buttonLight.addEventListener('click', () => {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    document.body.style.backgroundColor = '#121214'
    displayTimer.style.color = '#fff'
    infoFall.style.color = '#fff'
    infoRise.style.color = '#fff'
    for (let cor of soundPath) {
      cor.classList.add('colorPathLight')
    }
    for (let cor of buttonPath) {
      cor.classList.add('colorPathLight')
    }
    for (let elem of soundElements) {
      elem.classList.remove('bgsound')
      elem.classList.add('bgsoundTwo')
    }
    for (let elem of myRange) {
      elem.classList.add('sliderClick')
    }
  })
  buttonDark.addEventListener('click', () => {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    infoFall.style.color = '#323238'
    infoRise.style.color = '#323238'
    document.body.style.backgroundColor = '#fff'
    displayTimer.style.color = '#323238'
    for (let cor of soundPath) {
      cor.classList.remove('colorPathLight')
    }
    for (let cor of buttonPath) {
      cor.classList.remove('colorPathLight')
    }
    for (let elem of soundElements) {
      elem.classList.remove('bgsoundTwo')
      elem.classList.add('bgsound')
    }
    for (let elem of myRange) {
      elem.classList.remove('sliderClick')
    }
  })

  let soundElements = [soundCoffee, soundFireplace, soundForest, soundRain]

  myRange[0].addEventListener('input', () => {
    sound.displaySoundForest.volume = myRange[0].value / 100
  })
  myRange[1].addEventListener('input', () => {
    sound.soundRain.volume = myRange[1].value / 100
  })
  myRange[2].addEventListener('input', () => {
    sound.displaySoundCoffe.volume = myRange[2].value / 100
  })
  myRange[3].addEventListener('input', () => {
    sound.displaySoundRife.volume = myRange[3].value / 100
  })
}
