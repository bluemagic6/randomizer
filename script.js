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
var Inputs
var fullPassword= [];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var PWlength = prompt("How many characters do you want to use? (Must be between 8 and 128)")
    if (PWlength == null || PWlength<8 || PWlength>128 || isNaN(PWlength)) {
        alert("Invalid! Enter a number between 8 and 128");
        return}
        console.log("password length " + PWlength)
    var capitals = confirm("Would you like your password to contain UPPERCASE letters?");
        console.log("capitals " + capitals)
    var lower = confirm("Would you like your password to contain LOWERCASE letters?");
        console.log("lower case " + lower)
    var special = confirm("Would you like your password to contain SPECIAL CHARACTERS?");
        console.log("Special Characters " + special)
    var number = confirm("Would you like your password to contain NUMBERS?");
        console.log("Numbers " + number)

if(!capitals && !lower && !special && !number) {
    Inputs= alert("No items selected, Please your password characters")
    console.log(Inputs);
}
// true CAPITAL LOWER NUMBER SPECIAL
else if(capitals && number && lower && special){
    Inputs= capitalsArray.concat(lowerArray, numberArray, specialArray);
    console.log(Inputs);
}
// True CAPITAL LOWER NUMBER
else if(capitals && number && lower){
    Inputs= capitalsArray.concat(lowerArray, specialArray);
    console.log(Inputs);
}
// True LOWER NUMBER SPECIAL
else if(number && lower && special){
    Inputs= lowerArray.concat(numberArray, specialArray);
    console.log(Inputs);
}
// True LOWER NUMBER
else if(number && lower ){
    Inputs= numberArray.concat(lowerArray);
    console.log(Inputs);
}
// True CAPTIAL NUMBER
else if(capitals && number){
    Inputs= capitalsArray.concat(numberArray);
    console.log(Inputs);
}
// True LOWER SPECIAL
else if(lower && special){
    Inputs= lowerArray.concat(specialArray);
    console.log(Inputs);
}
// True SPECIAL CAPITAL
else if(capitals && special){
    Inputs= capitalsArray.concat(specialArray);
    console.log(Inputs);
}
// True NUMBER SPECIAL
else if(number && special){
    Inputs= numberArray.concat(specialArray);
    console.log(Inputs);
}
// True CAPITAL LOWER
else if(capitals && lower ){
    Inputs= capitalsArray.concat(lowerArray);
    console.log(Inputs);
}
// True CAPITAL
else if(capitals){
    Inputs= capitalsArray;
    console.log(Inputs);
}
// True LOWER
else if(lower){
    Inputs= lowerArray;
    console.log(Inputs);
}
// True NUMBER
else if(number){
    Inputs= numberArray;
    console.log(Inputs);
}
// True SPECIAL
else if(special){
    Inputs= specialsArray;
    console.log(Inputs);
}

for (var i = 0; i < PWlength; i++) {
    var newCharacter = Inputs[Math.floor(Math.random() * Inputs.length)];
    fullPassword.push(newCharacter);
    console.log(newCharacter);
}

var password = fullPassword.join("");
    console.log("Your Password is: " + fullPassword);
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
