// Assignment Code
var generateBtn = document.querySelector("#generate");

var wordbank = "";

// My Charcarter types that feed into my wordbank. 
var num = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "`!@#$%^&*()_+=-";

//Wordbank feeder.
wordbank += num;
wordbank += lowercase;
wordbank += uppercase;
wordbank += lowercase;

console.log (wordbank);

// Wordbank writer (?)


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

  //Need to CONFIRM all variables are used that the user selects. 
  //If 'no' to all, tell user they need to select "TryAgain"

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