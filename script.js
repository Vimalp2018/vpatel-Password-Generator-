// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase
var numbers = "1234567890"
var special = "!@#$%^&*()<>?/{}[]:;'"


function generatePassword() {

  var passwordLength = parseInt(prompt("What length would you like for your password?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again password must be more than 8 characters and less than 128 characters");
    return
  }

    var confirmLowercase = confirm("Do you want lowercase letters in your password?");
    var confirmUppercase = confirm("Do you want uppercase letters in your password?");
    var confirmNumbers = confirm("Do you want numbers in your password?")
    var confirmSpecial = confirm("Do you want special characters in your password?")
  

  if (!confirmLowercase  && !confirmUppercase  && !confirmNumbers  && !confirmSpecial ) {
    alert("sorry try again at lease one character must be selected");
    return
  }


  var characters = ""

  if (confirmLowercase) {
    characters+=lowercase;
  }
  if (confirmUppercase) {
    characters+=uppercase;
  }
  if (confirmNumbers) {
    characters+=numbers;
  }
  if (confirmSpecial) {
    characters+=special;
  }
  console.log(characters)
  var randomPassword = ""

  for (i = 1; i <= passwordLength; i++) {

    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomPassword


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
