// via http://node-ardx.org/exercises/6

var five = require('johnny-five')
five.Board().on('ready', function () {
  var piezo = new five.Piezo(9)
  var led7 = new five.Led(7)
  var led13 = new five.Led(13)
  var led3 = new five.Led(3)
  var val = 0
  led13.strobe(230)
  led3.strobe(500)
  led7.strobe(61)
  this.loop(300, function () {
    if (val ^= 1) {
      piezo.play({
        tempo: 300,
        song: [
          ['c#5', 1],
          ['g5', 2]
        ]
      })
    }
  })
})
