function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout(string) {
  console.log ('HELLO')
}
function logWhisper(string) {
  console.log('hello')
}

var uppercase = `HELLO!`

var lowercase = `hello!`

var mixedCase = `I love you grandma`

function sayHiToGrandma(string) {
  if (string.toLowerCase === lowercase) {
      console.log(`I can't hear you!`)
    } else if (string == uppercase) {
      console.log(`YES INDEED!`)
    }
}
