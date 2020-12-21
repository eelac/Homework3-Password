// All characters
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol() {
  const symbols = "!@#$%^&*()_+-=[]\{}|,./<>?;':";
  return symbols [Math.floor(Math.random() * symbols.length)];
}

//Select characters prompt
function generatePassword() {
var length = parseInt(prompt('How many characters for your password?'));
var lower = confirm('Would you like lowercase letters?');
var upper = confirm('Would you like uppercase letters?');
var number = confirm('Would you like numbers?');
var symbol = confirm('Would you like symbols?');
}


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