/* 
  JS File Name: script 
  Description: This javascript helps to generate passwors as per user criteria
  By : Hrishikesh Kanabar

*/

// Declared here global variables intialization

var passLength = "";
var isUpperCase = false;
var isLowerCase = false;
var isNumeric = false;
var isSpecial = false;

// Each password criteria array

var upperCaseArray = [
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
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseArray = [
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
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "]",
];

// Get references to the #generate element that is generate button
var generateBtn = document.querySelector("#generate");

//##############################################################################
/* 

  Function Name : writePassword
  Description : 
  - This function is onclick function for button "Genearte password"
  - Also calls  other function "generatePassword"
  - Helps to show value  of generated password in card

*/
//###############################################################################

function writePassword() {
  // calling  generatePassword function here
  var password = generatePassword();

  // Fetching card element to diaplay generated password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//##############################################################################
/* 

  Function Name : generatePassword
  Description :
  - This functions helps to generate password as per user criteria
  - Also calls other function "userInputChecks"

*/
//###############################################################################

function generatePassword() {
  //calling here  userInputChecks() function
  userInputChecks();

  // array to store generated password
  var generatedPass = [];
  // array to store all uppercase,lowercase,special and numeric characters
  var allChars = [];

  // 1.) Generate random character with upper case
  // 2.) Store full uppercase array in allchars array
  if (isUpperCase) {
    var randomUppper =
      upperCaseArray[Math.floor(Math.random() * (upperCaseArray.length - 1))];
    generatedPass.push(randomUppper);
    allChars = allChars.concat(upperCaseArray);
  }

  // 1.) Generate random character with lower case
  // 2.) Store full lowercase array in allchars array
  if (isLowerCase) {
    var randomLower =
      lowerCaseArray[Math.floor(Math.random() * (lowerCaseArray.length - 1))];
    generatedPass.push(randomLower);
    allChars = allChars.concat(lowerCaseArray);
  }

  // 1.) Generate random character with numbers
  // 2.) Store full numeric array in allchars array
  if (isNumeric) {
    var randomNumeric =
      numericArray[Math.floor(Math.random() * (numericArray.length - 1))];
    generatedPass.push(randomNumeric);
    allChars = allChars.concat(numericArray);
  }

  // 1.) Generate random character with special characterics
  // 2.) Store full special characters array in allchars array

  if (isSpecial) {
    var randomSpecialChar =
      specialCharArray[
        Math.floor(Math.random() * (specialCharArray.length - 1))
      ];
    generatedPass.push(randomSpecialChar);
    allChars = allChars.concat(specialCharArray);
  }

  // Calculating lenght of password to complete

  var remainingPassLenght = passLength - generatedPass.length;

  // for loop to generate remaming password

  for (var i = 0; i < remainingPassLenght; i++) {
    var ind = Math.floor(Math.random() * (allChars.length - 1));
    var newCharsInPass = allChars[ind];
    generatedPass.push(newCharsInPass);
  }

  console.log(generatedPass);

  // Converting array to string with toString function

  return generatedPass.join("");
}

//##############################################################################
/* 

  Function Name : userInputChecks
  Description :
  -This function is used to validate userinputs in prompt.

*/
//###############################################################################

function userInputChecks() {
  // prompt to ask password lenght

  passLength = prompt(
    "How many characters would you like your password ? The password must be between 8 and 128 characters."
  );

  // When user hits cancel for prompt and null checks best practice
  if (passLength == null) {
    return;
  }

  //  1.) Condition to check password length between 8 to 128 character and not alphabets (NaN)(NOT AN NUMBER)
  //  2.) Call function userInputChecks agian if conditions are true -- Recursive function call /technique

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert(
      "ERROR: That is not a valid input. Please enter between 8 and 128 characters."
    );
    userInputChecks();
  } else {
    isUpperCase = confirm(
      "Click OK , if you want to include uppercase characters in your password."
    );
    isLowerCase = confirm(
      "Click OK , if you want to include lowercase characters in your password."
    );
    isNumeric = confirm(
      "Click OK ,  if you want to include numbers in your password"
    );
    isSpecial = confirm(
      "Click OK , if you want to include special characters in password"
    );

    // 1.) Condition to check uppercase ,lowercase,numer and special characters
    // 2.) Call function userInputChecks agian  if conditions are true -- Recursive function call /technique

    if (
      isUpperCase === false &&
      isLowerCase === false &&
      isNumeric === false &&
      isSpecial === false
    ) {
      alert("ERROR: At least one character type should be selected");
      userInputChecks();
    }
  }
}
