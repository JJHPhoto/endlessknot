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
wordbank += symbols;

console.log (wordbank);

// Wordbank writer (?) Need to figure out how to pull from here. 

// Write password to the #password input
function writePassword() {
  //PROMPT for criteria (password length)
  var pwdLength = prompt ("How long do you want your password to be?");
  // I need to write in any selected criterai (num, lowercase, uppercase, symbols) + pulling from the wordbank randomly. 
  //PROMPT length of 'passwordRequires'. 8 <= %% => 128.
  //PROMPT if LowerCase, UpperCase, Number, or SpecialCharacters are wanted.
  var pwdNumbers = confirm ("Would you like to include numbers?");
  var pwdLowerCase = confirm ("How about lower case letters?");
  var pwdUpperCase = confirm ("Maybe some upper case letters?");
  var pwdsymbols = confirm ("And to finish it off, how about some symbols?");
  
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