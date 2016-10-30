# Arduino Basics

This project is to help you get up-and-running with Arduino, the popular open-source electronics platform based on easy-to-use hardware and software. Once you are set up you can pair-up with the other hardware hackers at our [weekly meetups](http://www.meetup.com/la-fullstack/).

## Basic Ingredients

* Laptop (running macOS, Linux or Windows)
* USB Port
* [Atom](https://atom.io/) with:
 * [Script package](https://atom.io/packages/script)
 * [Standard linter package](https://atom.io/packages/linter-js-standard) (recommended)
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
2. In the terminal, do: `npm install -g johnny-five`
3. Install Atom. Oh, and `apm install script` you'll be wanting that.
4. If you're running Ubuntu or another Linux distro, In the terminal, do:
 - `whoami` Make careful note of who you are.
 - `sudo usermod -a -G dialout <whoyouare>` (`whoami` told you this.)
5. If you're on a mac, you don't have to shave the yak in step 4.
6. Keep your laptop out of the sauce pan.
7. Fork and clone this repo.
8. In the terminal, do: `cd arduino-basic`
9. In the terminal, do: `atom .`
10. Plug the Arduino into a convenient USB port on your laptop. (It ought to be set up with the LED and everything already.)
11. In atom, open `strobe.js`
12. Click anywhere in the code editor and then type the magic command keys:
 * macOS: `⌘I`
 * Linux: `SHIFT-CTRL-B`
 * Windows: _coming soon_

This incantation should make the light on the Arduino blink repeatedly. You have now used JS and Johnny 5 to make a physical thing do a thing!

What!? It didn't do the thing?! [Raise an issue](https://github.com/jdorfman/arduino-basics/issues)! Clearly we didn't 'splain it right!
