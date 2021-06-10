// Assignment Code


var capitalsArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

var lowerArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

var specialArray = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
]

var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var fullPassword = []

function getPrompts() {
  var PWlength = parseInt(
    prompt(
      'How many characters do you want to use? (Must be between 8 and 128)'
    )
  );

  if (PWlength < 8 || PWlength > 128 || isNaN(PWlength) === true) {
    alert('Invalid! Enter a number between 8 and 128')
    return
  };

  var capitals = confirm(
    'Would you like your password to contain UPPERCASE letters?',
  );

  var lower = confirm(
    'Would you like your password to contain LOWERCASE letters?',
  );

  var special = confirm(
    'Would you like your password to contain SPECIAL CHARACTERS?',
  );

  var number = confirm('Would you like your password to contain NUMBERS?');

  if (
    capitals === false &&
    lower === false &&
    special === false &&
    number === false
  ) {
    alert('You must choose at least one character type')
    return
  };

  var pwChoices = {
    length: PWlength,
    capitals: capitals,
    lower: lower,
    special: special,
    number: number,
  };

  return pwChoices
};

function generatePassword() {
  var choices = getPrompts();

  var possArr = [];

  var chosenChar = [];

  if (choices.capitals) {
    possArr = possArr.concat(capitalsArray);
    chosenChar.push(makeRandom(capitalsArray));
  };

  if (choices.lower) {
    possArr = possArr.concat(lowerArray);
    chosenChar.push(makeRandom(lowerArray));
  };

  if (choices.number) {
    possArr = possArr.concat(numberArray);
    chosenChar.push(makeRandom(numberArray));
  };

  if (choices.special) {
    possArr = possArr.concat(specialArray);
    chosenChar.push(makeRandom(specialArray));
  };

  for (var i = 0; i < choices.length; i++) {
    var newCharacter = makeRandom(possArr);
    fullPassword.push(newCharacter);
  };

  for (var i = 0; i < chosenChar.length; i++) {
    fullPassword[i] = chosenChar[i];
  };


  return fullPassword.join('');
};

function makeRandom(arr) {
  var ranInd = Math.floor(Math.random() * arr.length)
  var ranEl = arr[ranInd]
  return ranEl
}

var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

console.log(generatePassword)
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
