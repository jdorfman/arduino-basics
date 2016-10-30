// via http://node-ardx.org/exercises/6

var fIVE = require('johnny-five')
fIVE.Board().on('ready', function () {
  var piezo = new fIVE.Piezo(13)
  var LEDyELLOW = new fIVE.Led(3)
  var LEDwHITE = new fIVE.Led(5)
  var LEDbLUE = new fIVE.Led(7)
  var LEDgREEN = new fIVE.Led(9)
  var LEDrED = new fIVE.Led(11)
  var val = 0
  LEDyELLOW.strobe(500)
  LEDwHITE.strobe(80)
  LEDbLUE.strobe(61)
  LEDgREEN.strobe(440)
  LEDrED.strobe(230)
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
