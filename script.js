// Assignment Code
var generateBtn = document.querySelector("#generate");


var passLength;
// 'use' variables will be booleans stating true or false
let useCaps;
let useLowers;
let useNumbers;
let useSpecials;

//'char' variables will be used in a loop below to assign each character until established pass length is met
// Use arrays for generating each character? maybe?? Return here when this doesn't work-------
var charCaps: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"  ];
//there must be a better way to do this
var charLowers: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var charNumbers: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
//criteria doesn't mention ALL special characters. Leaving out annoying ones for now (double/single parentheses etc.)
var charSpecials: [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~" ]


function establishLength() {
  var passLength = parseInt(prompt("How long would you like your password to be?."));

    if (passLength < 8 || passLength > 128) {
      alert('Password must be between 8 and 128 characters');
      establishLength();
    } 
    
    else {
      alert('Password length criteria accepted.')
    }

    return passLength;

}



function askCaps() {
  useCaps = toLowerCase(prompt('Do you want uppercase letters in your password? Yes(Y) or No(N)')) {
    if (useCaps === 'yes' || useCaps === 'y')
    useCaps = true;
    return useCaps;

  } if (useCaps ==='no' || useCaps ==='n') {
    useCaps = false;
    return useCaps

  } else {
    alert('Try Again');
    askCaps();
  }
}


function askLowers() {
useLowers = toLowerCase(prompt('Do you want lowercase letters in your password? Yes(Y) or No(N)')) {
    if (useLowers === 'yes' || useLowers === 'y')
      useLowers = true;
      return useLowers;


  } if (useLowers ==='no' || useLowers ==='n') {
    useLowers = false;
    return useLowers;

  } else {
    alert('Try Again');
    askLowers();
  }
}

function askNumbers() {
useNumbers = toLowerCase(prompt('Do you want numbers in your password? Yes(Y) or No(N)')) {
  if (useNumbers === 'yes' || useNumbers === 'y')
    useNumbers = true;
    return useNumbers;


  } if (useNumbers ==='no' || useNumbers ==='n') {
  useNumbers = false;
  return useNumbers;

  } else {
    alert('Try Again');
    askNumbers();
  }
}

function askSpecials() {
useSpecials = toLowerCase(prompt('Do you want special characters in your password? Yes(Y) or No(N)')) {
  if (useSpecials === 'yes' || useSpecials === 'y')
    useSpecials = true;
    return useSpecials;


  } if (useSpecials ==='no' || useSpecials ==='n') {
    useSpecials = false;
    return useSpecials

  } else {
    alert('Try Again');
    askSpecials();
  }
}















//Going to try to work from the generated answer and go backwards ----delete this after----
//arrays created above to correspond to potential character chooser below







// Scenario: All 4 criteria chosen
let randomPassword = 0;
while (randomPassword < passlength)

function randomPassword() {
  let finalPassword = (Math.floor(Math.random() * 4) * passLength)
  switch (finalPassword) {
    case 0:
      return charCaps
    case 1:
      return charLowers
    case 2:
      return charNumbers
    case 3:
      return charSpecials
    
  }
}





// for loop to put password together-
for (var i = 0, i < passLength, i++)










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
