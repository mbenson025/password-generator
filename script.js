// Assignment Code
// STRING INSTEAD OF ARRAY VERSION

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//each group of possible characters is written as a string to define an "index" to draw from
var charCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var charLowers = "abcdefghijklmnopqrstuvwxyz";
var charNumbers = "0123456789";
//special character selection taken from owasp.org password "special characters list"
var charSpecials = "!#$%&()*+-:;^_|`',./{}=<>?@~";
var passReqs = "";
var passLength = 0;
var passFinish = "";

//keeping array version here to easily switch back from string version
// var charCaps = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"  ];
// var charLowers = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// var charNumbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
// var charSpecials = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ]
// var passReqs = [];


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}



function generatePassword() {
    //user defines password length
    var passLength = prompt("How long would you like your password to be?");
    if (passLength < 8 || passLength > 128) {

        alert('Password must be between 8 and 128 characters');
      // generatePassword(); -->I found this annoying as a user choice(unable to close out of box)
        return passLength;
    } 

    else {
            var useCaps = confirm('Do you want uppercase letters in your password?');
            var useLowers = confirm('Do you want lowercase letters in your password?');
            var useNumbers = confirm('Do you want numbers in your password?');
            var useSpecials = confirm('Do you want special characters in your password?');

            if ((useCaps === false) && (useLowers === false) && (useNumbers === false) && (useSpecials === false)) {
                alert('At least one of the password criteria must be chosen.');
              //generatePassword() sends the user back to first prompt to try again
                generatePassword();
            }
            //each selected criteria adds the "index" string of characters for each of the 4 categories
            //Note:PUSH for arrays and concat or "+" for strings--choose and stick with one--
            if (useCaps === true) {
                passReqs = passReqs.concat(charCaps)
            }
            
            //.concat combines the strings
            if (useLowers === true) {
                passReqs = passReqs.concat(charLowers)
            }
            

            if (useNumbers === true) {
                passReqs = passReqs.concat(charNumbers)
            }
            
            if (useSpecials === true) {
                passReqs = passReqs.concat(charSpecials)

                console.log(passReqs)

            }
          }
            //new index is created after any of the 4 combined



//loop is made to keep re-adding a character from the new index until the user password length input is met
for (var i = 0; i < passLength; i++ ) {


//charAt returns a character from the resulting index --- link in readme to stackoverflow I found charAt solution ---
//index is randomized by (math.floor(Math.random())
  passFinish = passFinish + passReqs.charAt( Math.floor(Math.random() * (passReqs.length)));

  console.log(passFinish)
    }

    // debugger;

    //final password solution output
    return passFinish;

}




