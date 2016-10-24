// via http://johnny-five.io/examples/repl/

var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  console.log('Welcome to the Arduino Basics REPL. Hit enter to begin...')

  var led = new five.Led(13)

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    // >> on()
    on: function () {
      led.on()
    },
    // >> strobe()
    strobe: function () {
      led.strobe(50)
    },
    // >> stop()
    stop: function () {
      led.stop()
    },
    // >> off()
    off: function () {
      led.off()
    }
  })
})
