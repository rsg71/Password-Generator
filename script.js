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




//determining the number of characters for the password



var specialChars =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numericChars = "123456789"
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var chars = "";
       
//start with emtpy quotes

function generatePassword () {
  var pword = "";


  var passwordLength = prompt ("How many characters would you like your password to contain?"); 

while(passwordLength < 8 || passwordLength > 128) {
      if (passwordLength < 8) {
          alert("Password length must be at least 8 characters")
          var passwordLength = prompt ("How many characters would you like your password to contain?"); 
          
      }
      else if (passwordLength > 128) {
        alert("Password length can be no more than than 128 characters")
        var passwordLength = prompt ("How many characters would you like your password to contain?");
       }
}

//confirming which type of characters the user will input
var special = confirm ("Click OK to confirm if you'd like to include special characters")
var numeric = confirm ("Click OK to confirm if you'd like to include numeric characters")
var lowercase = confirm ("Click OK to confirm if you'd like to include lowercase characters")
var uppercase = confirm ("Click OK to confirm if you'd like to include uppercase characters")


//if statement in case the user selects "cancel" for all four options
      if (special == false && numeric == false && lowercase == false && uppercase == false) {
        alert ("Error: please choose OK for at least one type of character")
        var special = confirm ("Click OK to confirm if you're going to include special characters")
        var numeric = confirm ("Click OK to confirm if you're going to include numeric characters") 
        var lowercase = confirm ("Click OK to confirm if you're going to include lowercase characters")
        var uppercase = confirm ("Click OK to confirm if you're going to include uppercase characters")
      }
      else {
      }
  
  //add these strings to the chars "" if use chooses confirm
  if (special == true) {
    chars += specialChars;  
  }
  if (numeric == true) {
    chars += numericChars;  
  }
  if (lowercase == true) {
    chars += lowerCaseChars;  
  }
  if (uppercase == true) {
    chars += upperCaseChars;  
  }


  //for loop that selects random character from chars and appends character to password
    for (var i=0; i < passwordLength; i++) {

      var randomChar = Math.floor(Math.random()*chars.length);
      pword += chars.substring(randomChar,randomChar+1);   
      

    }

  return pword
        
}
    