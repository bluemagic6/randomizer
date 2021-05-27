// Assignment Code
var generateBtn = document.querySelector("#generate");

var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var capitalsArray =capitals.split("");
var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lower.split("");
var special = "*&^%$#@!/?"
var specialArray = special.split("");
var number = "1234567890";
var numberArray = number.split("");
var inputs
var fullPassword= [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

function generatePassword() {
    var pwLength = prompt("How many characters do you want to use? (Must be between 8 and 128)")
    if (pwLength == null || pwLength<8 || pwLength>128 || isNaN(pwLength)) {
        alert("Invalid! Enter a number between 8 and 128");
        return}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
