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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
