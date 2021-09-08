/* 
  JS File Name:
  Description

*/

// Declared here global variables intialization

var passLength="";
var isUpperCase=false;
var isLowerCas=false;
var isNumeric=false;
var isSpecial=false;

// Each password criteria array

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArray = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~',']'];



// Get references to the #generate element that is generate button
var generateBtn = document.querySelector("#generate");

//##############################################################################
/* 

  Function Name : writePassword
  Description :

*/
//###############################################################################

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//##############################################################################
/* 

  Function Name : generatePassword
  Description :

*/
//###############################################################################

function generatePassword(){

  //calling here  userInputChecks() function 
  userInputChecks();

}


//##############################################################################
/* 

  Function Name : userInputChecks
  Description :

*/
//###############################################################################

function userInputChecks(){

  // prompt to ask password lenght

  chararterLenght = prompt("How many characters would you like your password ? The password must be between 8 and 128 characters.");

  //  1.) Condition to check password length
  //  2.) Call function userInputChecks agian -- Recursive function call /technique

  if((isNaN(chararterLenght)) || (chararterLenght < 8) || (chararterLenght > 128)) {
    alert("That is not a valid input. Please enter between 8 and 128 characters.");
    userInputChecks();

  }

}
