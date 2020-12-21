// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// All characters
var specChar = ["`~!@#$%^&*()_+=\?/"];
var res = str.split();

var number = ["1234567890"];
var res = str.split();

var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
var res = str.split();

var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var res = str.split();