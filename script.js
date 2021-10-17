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

function generatePassword() {
  // WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters
  var charTotal = prompt("How many characters who you want in your password?")
  var lowerChar = confirm("Do you want lower case characters in your password?")
  var upperChar = confirm("Do you want upper case characters in your password?")
  var numberChar = confirm("Do you want numbers in your password?")
  var specialChar = confirm("Do you want special characters in your password?")
 


  var lowerSet = "abcdefghijklmnopqrstuvwxyz"
  var upperSet = lowerSet.toUpperCase()
  var numberSet = "0123456789"
  var specialSet = "~!@#$%^&*-=+,./"
  var charBank = ""
  var newPassword = ""

  //WHEN asked for character types to include a password
  //THEN I confirm whter or not to include lowercase, uppercase, numeric, and "special" characters

  if (charTotal >= 8 && charTotal <= 128) {
    charTotal
  }

  if (lowerChar === true) {
    charBank = charBank.concat(lowerSet)
  }

  if (upperChar === true) {
    charBank = charBank.concat(upperSet)
  }

  if (numberChar === true) {
    charBank = charBank.concat(numberSet)
  }

  if (specialChar === true) {
    charBank = charBank.concat(specialSet)
  }

  //WHEN I answer each prompt 
  //THEN my input should be validated and at least 1 character type should be selected

  // return a generated password with the length choosen and math random
  function getRandomChar(max) {
    return [Math.floor(Math.random() * max)]
  }

  for (i = 0; i < charTotal; i++){
    newPassword = newPassword.concat(charBank.charAt(getRandomChar(charBank.length - 1)))
  }

  return newPassword

}
