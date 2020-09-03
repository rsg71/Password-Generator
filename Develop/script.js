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


 
//confirming which type of characters the user will input
var special = confirm ("Click OK to confirm if you're going to include special characters")
var numeric = confirm ("Click OK to confirm if you're going to include numeric characters")
var lowercase = confirm ("Click OK to confirm if you're going to include lowercase characters")
var uppercase = confirm ("Click OK to confirm if you're going to include uppercase characters")

//if statement in case the user selects "cancel" for all four options
if (special == false && numeric == false && lowercase == false && uppercase == false) {
  alert ("Please choose at least one option")
  var special = confirm ("Click OK to confirm if you're going to include special characters")
  var numeric = confirm ("Click OK to confirm if you're going to include numeric characters") 
  var lowercase = confirm ("Click OK to confirm if you're going to include lowercase characters")
  var uppercase = confirm ("Click OK to confirm if you're going to include uppercase characters")
}
else {
}


var specialChars = "!@#$%^&*()_+"
var numericChars = "123456789"
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var chars = "!@#%^&*()_+123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
       
function generatePassword () {
  var pword = "";
  var passwordLength = prompt ("How many characters would you like your password to contain?");
  
    for (var i=0; i < passwordLength; i++) {
      
      //get random position------------------
      // var randomNumber = Math.floor(Math.random()*chars.length);

       //append the character to password-----------------
      // pword += chars.substring(randomNumber,randomNumber+1);

      if (special == true){
      var randomSpecial = Math.floor(Math.random()*numericChars.length);
      pword += numericChars.substring(randomSpecial,randomSpecial+1);
      }
      if (special == true){
      var randomNumeric = Math.floor(Math.random()*numericChars.length);
      pword += numericChars.substring(randomNumeric,randomNumeric+1);
      }
      if (lowercase == true){
      var randomLowerCase = Math.floor(Math.random()*lowerCaseChars.length);
      pword += lowerCaseChars.substring(randomLowerCase,randomLowerCase+1);
      }
      if (uppercase == true){
      var randomUpperCase = Math.floor(Math.random()*upperCaseChars.length);
      pword += upperCaseChars.substring(randomUpperCase,randomUpperCase+1);
      }
     
      

    }

  return pword
        
}
// alert ("Your password is: "+ password)
    