// Assignment code here
var charsetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var charsetUpperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ".split("");
var charsetNumbers = "0123456789".split("");
var charsetSpecialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");


function generatePassword() {
  var characterNumber = window.prompt("Please choose between 8-128 characters.");
  if (characterNumber < 8 || characterNumber > 128) {
    window.prompt("Please choose a valid number of characters, between 8-128");
  } 

  var lowerCase = window.confirm("Click OK if the password should contain lowercase characters.");

  var upperCase = window.confirm("Click OK if the password should contain UPPERCASE characters");

  var numbers = window.confirm("Click Ok if the password should contain numbers");

  var specialCharacters = window.confirm("Click OK if the password should contain special characters");

  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    window.alert("GENERATOR ERROR: please choose one character type.");
    return "Please Re-try"
  };

  var checkConfirm = window.confirm("Click OK to confirm password choices: \nLowerCase: " + lowerCase + "\nUppercase: " + upperCase + "\nNumbers: " + numbers + "\nSpecial Characters: " + specialCharacters);
  if (!checkConfirm) {
    return "Please Re-try"
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
