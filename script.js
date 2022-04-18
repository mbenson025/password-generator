// Assignment Code
var generateBtn = document.querySelector("#generate");


var passLength;
let useCaps;
let useLowers;
let useNumbers;
let useSpecials;

function establishLength() {
  passLength = parseInt(prompt("How long would you like your password to be?."));

    if (passLength < 8 || passLength > 128) {
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



function askCaps() {
  useCaps = toLowerCase(prompt('Do you want uppercase letters in your password? Yes(Y) or No(N)')) {
    if (useCaps === 'yes' || useCaps === 'y')
    return useCaps = true;

  } else if (useCaps ==='no' || useCaps ==='n') {
    return useCaps = false;

  } else {
    alert('Try Again');
    askCaps();
  }
}


function askLowers() {
useLowers = toLowerCase(prompt('Do you want lowercase letters in your password? Yes(Y) or No(N)')) {
    if (useLowers === 'yes' || useLowers === 'y')
      return useLowers = true;


  } else if (useLowers ==='no' || useLowers ==='n') {
    return useLowers = false;

  } else {
    alert('Try Again');
    askLowers();
  }
}

function askNumbers() {
useNumbers = toLowerCase(prompt('Do you want numbers in your password? Yes(Y) or No(N)')) {
  if (useNumbers === 'yes' || useNumbers === 'y')
    return useNumbers = true;


  } else if (useNumbers ==='no' || useNumbers ==='n') {
  return useNumbers = false;

  } else {
    alert('Try Again');
    askNumbers();
  }
}

function askSpecials() {
useSpecials = toLowerCase(prompt('Do you want special characters in your password? Yes(Y) or No(N)')) {
  if (useSpecials === 'yes' || useSpecials === 'y')
    return useSpecials = true;


  } else if (useSpecials ==='no' || useSpecials ==='n') {
    return useSpecials = false;

  } else {
    alert('Try Again');
    askSpecials();
  }
}




//Going to try to work from the generated answer and go backwards ----delete this after----







// All 4 criteria chosen

function createPassword() {
  let finalPassword = Math.floor(Math.random() * 4)
  switch (finalPassword) {
    case 0:
      return useCaps
    case 1:
      return useLowers
    case 2:
      return useNumbers
    case 3:
      return useSpecials
    
  }
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
