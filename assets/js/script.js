// Assignment Code
var generateBtn = document.querySelector("#generate");

//What do I need? 
// var of Numbers
// var of LowercCase
// var of UpperCase
// var of ZpecialCharacters

// Write password to the #password input
function writePassword() {
  //PROMPT about criteria needed? 
  //PROMPT length of 'passwordRequires'. 8 <= %% => 128.
  //PROMPT if LowerCase, UpperCase, Number, or SpecialCharacters are wanted.
  //WRITE characterTypes to password. 
  //generatePassword to the page.

  //if 'false' ( ! (passwordRequires >= 8 || passwordRequires <= 128) ) PROMPT user with "Please pick a longer/shorter password."


  //Need to WRITE variables to 'password' when selected

  //if 'usedNumbers' 
  //then .... write? how?


  //if 'usedLowerCase' 
  //then .... ""

  //if 'usedUpperCase' 
  //then .... ""
  
  //if 'usedSpecialCharacters' 
  //then .... ""



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I think I need to be able to have a "TryAgainbutton" if the user is not satisfied