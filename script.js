// Assignment Code
var generateBtn = document.querySelector("#generate");


var establishLength;
var passLength;


function establishLength() {

  passLength = parseInt(prompt("How long would you like your password to be?(Between 8-128 characters)."));

    if (passLength < 8) {
      alert('Password must be at least 8 characters or longer');
      establishLength();
    } 
    
    else if (passLength > 128) {
      alert('Password cannot exceed 128 characters')
      establishLength();
    }

    else {
      alert('Password length criteria accepted.')
    }

    return passLength;

}











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
