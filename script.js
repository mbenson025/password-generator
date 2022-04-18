// Assignment Code
var generateBtn = document.querySelector("#generate");


var establishLength;
var passLength;


function establishLength() {

  passLength = parseInt(prompt("How long would you like your password to be?."));

    if (passLength < 8 || passlength > 128) {
      alert('Password must be between 8 and 128 characters');
      establishLength();
    } 
    
    // else if (passLength > 128) {
    //   alert('Password cannot exceed 128 characters')
    //   establishLength();
    // }

    else {
      alert('Password length criteria accepted.')
    }

    return passLength;

}



var confirmCaps

confirmCaps = confirm('Do you want uppercase letters in your password?')

var confirmLowers

confirmLowers = confirm('Do you want lowercase letters in your password?')

var confirmNumbers

confirmNumbers = confirm('Do you want numbers in your password?')

var confirmSpecials

confirmSpecials = confirm('Do you want special characters in your password?')













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
