export default function () {
  const displaySoundCoffe = new Audio(
    'https://github.com/GabrielRodrigues-pd/sounds/blob/main/sounds_Cafeteria.mp3?raw=true'
  )
  const displaySoundRife = new Audio(
    'https://github.com/GabrielRodrigues-pd/sounds/blob/main/sounds_Lareira.mp3?raw=true'
  )
  const displaySoundForest = new Audio(
    'https://github.com/GabrielRodrigues-pd/sounds/blob/main/sounds_Floresta.mp3?raw=true'
  )
  const soundRain = new Audio(
    'https://github.com/GabrielRodrigues-pd/sounds/blob/main/sounds_Chuva.mp3?raw=true'
  )

  displaySoundCoffe.loop = true
  displaySoundRife.loop = true
  displaySoundForest.loop = true
  soundRain.loop = true

  return {
    displaySoundForest,
    displaySoundRife,
    displaySoundCoffe,
    soundRain
  }
}
