// All characters
var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var symbolChar = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "\\",
  "{",
  "}",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
];

//Select characters prompt
function generatePassword() {
  var length = parseInt(prompt("How many characters for your password?"));
  if (isNaN(length) === true) {
    alert("You must input a number.");
    return;
  }
  var lower = confirm("Would you like lowercase letters?");
  var upper = confirm("Would you like uppercase letters?");
  var number = confirm("Would you like numbers?");
  var symbol = confirm("Would you like symbols?");
  if (
    lower === false &&
    upper === false &&
    number === false &&
    symbol == false
  ) {
    alert("You must select at least one character type.");
    return;
  }
  var passwordChoice = {
    length: length,
    lower: lower,
    upper: upper,
    number: number,
    symbol: symbol,
  };
  return passwordChoice;
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
