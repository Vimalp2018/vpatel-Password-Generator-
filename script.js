// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

 var Passwordlength = parseInt(prompt("What length would you like for your password?"));
        if (Passwordlength < 8 || Passwordlength > 128)
         {
        alert("Please try again password must be more than 8 characters and less than 128 characters");
        }
        else 
        {
         var lowercaseAZ = confirm("Do you want lowercase letters in your password?");
         var uppercaseAZ = confirm("Do you want uppercase letters in your password?");
         var numbers = confirm("Do you want numbers in your password?")
         var specialC = confirm("Do you want special characters in your password?")
        }

        if (lowercaseAZ == false && uppercaseAZ == false && numbers == false && specialC == false) {
        alert("sorry try again at lease one character must be selected");
        }

        if (lowercaseAZ == true) {
        characters.push(lowercaseAZcharacters)
        }

        if (uppercaseAZ == true) {
        characters.push(uppercaseAZcharacters)
        }

        if (numbers == true) {
        characters.push(numberscharacters)
        }
        if (specialC == true) {
        characters.push(specialCcharacters)
        }

var characters = [];
var lowercaseAZcharacters = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var uppercaseAZcharacters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z");
var numberscharacters = ("1","2","3","4","5","6","7","8","9","0")
var specialCcharacters = ("!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/");

var passwordText = ""  

    for (var i = 0; i < Passwordlength.length; i++) {

      passwordText = passwordText + characters[Math.floor(Math.random() * Passwordlength.length) ]

}
      
return passwordText;







}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
