# Arduino Basics

This project is to help you get up-and-running with Arduino, the popular open-source electronics platform based on easy-to-use hardware and software. Once you are set up you can pair-up with the other hardware hackers at our [weekly meetups](http://www.meetup.com/la-fullstack/).

## Ingredients

* Laptop (running macOS, Linux or Windows)
* USB Port
* [Atom](https://atom.io/) with [script package](https://atom.io/packages/script) (recommended)
* Node.js
* Arduino Uno (or compatible board)
* Breadboard
* LED Lights
* Resistors
* Jumper Cables

**Note**: If you don't have any of those, don't worry you can share with someone else at the [meetup](http://www.meetup.com/la-fullstack/). :smile:

## Directions

In a medium sauce pan...

1. take your laptop out of the meduim sauce pan
2. In the terminal, do: `npm install -G johnny-five`
3. Install Atom. Oh, and `apm install script` you'll be wanting that.
4. If you're running Ubuntu or other Debian distro, In the terminal, do:
 - `whoami` Make careful note of who you are.
 - `sudo usermod -a -G dialout ` + who you are. (`whoami` told you this.)
5. If you're on a mac, you don't have to shave the yak in step 5.
6. Keep your laptop out of the sauce pan.
7. Fork and clone this repo.
8. In the terminal, do: `cd arduino-basic`
9. In the terminal, do: `atom .`
10. Plug the arduino into a convenient USB port on your laptop. (It ought to be set up with the LED and everything already.)
11. In atom, open `strobe.js`
12. Click anywhere in the code editor and then type the magic command keys: Debian/Ubuntu: `SHIFT-CTRL-B` Mac: `⌘I`

This incantation should make the light on the arduino blink repeatedly. You have now used JS and Johnny 5 to make a physical thing do a thing!

What!? It dodn't do the thing?! Raise an issue! Clearly we didn't 'splain it right!

## Resources that you can ignore
* Software
  * [Johnny Five](http://johnny-five.io/)
    * `npm install johnny-five`
    * [Examples](http://johnny-five.io/examples/)
    * [REST API examples](https://github.com/jdorfman/panama/tree/master/lib)
    * [Troubleshooting](https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting)
  * [Arduino](https://www.arduino.cc)
    * [IDE](https://www.arduino.cc/en/Main/Software)
* Hardware
 * [Arduino Uno Starter Kit](https://store-usa.arduino.cc/products/arduino-starter-kit)
 * [Uno Starter Kit by OSEPP (Third Party) ](https://www.amazon.com/OSEPP-Arduino-Basic-Starter-ARD-01/dp/B009NNEURY)
* Tutorials
  * [Official Arduino Tutorials](https://www.arduino.cc/en/Tutorial/HomePage)
  * [Johnny-Five Wiki - GitHub](https://www.youtube.com/watch?v=fCxzA9_kg6s)
  * [Getting Acquainted with Arduino - YouTube](https://www.youtube.com/watch?v=fCxzA9_kg6s)
  * [Ladyada's Learn Arduino](https://learn.adafruit.com/ladyadas-learn-arduino-lesson-number-0?view=all)
  * [JavaScript Powered Arduino with Johnny-Five - O'Reilly Safari](https://www.safaribooksonline.com/blog/2013/07/16/javascript-powered-arduino-with-johnny-five/)
  * [Arduino Experimenter's Guide for NodeJS](http://node-ardx.org/)
  * [Arduino Arrays](https://www.arduino.cc/en/Tutorial/Arrays)
