// via http://node-ardx.org/exercises/6

const five = require('johnny-five')
five.Board().on('ready', function () {
  const piezo = new five.Piezo(13)
  const ledWhite = new five.Led(3)
  const ledBlue = new five.Led(5)
  const ledGreen = new five.Led(7)
  const ledYellow = new five.Led(9)
  const ledRed = new five.Led(11)
  let val = 0
  const tempo = 150
  const freq = 30000 / tempo
  const song = [
    ['c4', 1],
    ['e4', 1],
    ['g4', 1],
    ['c5', 1],
    ['g4', 1],
    ['e4', 1],
  ]
  const tempoizer = freq * song.reduce((beat, note) => note[1] + beat, 0)
  ledWhite.strobe(freq / 4)
  ledBlue.strobe(freq / 2)
  ledGreen.strobe(freq)
  ledYellow.strobe(freq * 2)
  ledRed.strobe(freq * 4)
  this.loop(tempoizer, function () {
    val ^= 1
    if (val) {
      piezo.play({
        tempo,
        song
      })
    }
  })
})
