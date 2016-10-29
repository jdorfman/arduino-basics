// via http://node-ardx.org/exercises/6

var five = require('johnny-five')
five.Board().on('ready', function () {
  var piezo = new five.Piezo(9)
  var val = 0

  this.loop(200, function () {
    if (val ^= 1) {
      piezo.frequency(five.Piezo.Notes['a4'], 200)
    }
  })
})
