// via http://node-ardx.org/exercises/6

var five = require('johnny-five')
five.Board().on('ready', function () {
  var piezo = new five.Piezo(13)
  var led7 = new five.Led(7)
  var led13 = new five.Led(10)
  var led3 = new five.Led(3)
  var led12 = new five.Led(8)
  var led5 = new five.Led(5)
  var val = 0
  led13.strobe(230)
  led12.strobe(440)
  led3.strobe(500)
  led5.strobe(80)
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
