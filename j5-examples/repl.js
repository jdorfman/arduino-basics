// via http://johnny-five.io/examples/repl/

var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  console.log('Welcome to the Arduino Basics REPL. Hit enter to begin...')

  var led13 = new five.Led(13)
  var led12 = new five.Led(12)
  var led11 = new five.Led(11)

  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    // >> on()
    on: function () {
      led13.on()
      led12.on()
      led11.on()
    },
    // >> strobe()
    strobe: function () {
      led13.strobe(100)
      led12.strobe(75)
      led11.strobe(50)
    },
    // >> stop()
    stop: function () {
      led13.stop()
      led12.stop()
      led11.stop()
    },
    // >> off()
    off: function () {
      led13.off()
      led12.off()
      led11.off()
    }
  })
})
