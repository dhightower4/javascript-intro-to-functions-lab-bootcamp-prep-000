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

var uppercase = "HELLO!"

uppercase.toUpperCase === uppercase

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase

var mixedCase = "I love you grandma"

mixedCase.toLowerCase === lowercase

mixedCase.toUpperCase === uppercase

function sayHiToGrandma(string) {
    if (string === lowercase) {
      return("I can't hear you!")
    }
}
