// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //PROMPT about criteria needed? 
  //PROMPT length of 'passwordrequired'. 8 <= %% => 128.
  //PROMPT if lowerCase, upperCase, number, or specialCharacters are wanted.
  //WRITE characterTypes to password. 
  //generatePassword to the page. 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I think I need to be able to have a "tryagainbutton" if customer is not satisfied