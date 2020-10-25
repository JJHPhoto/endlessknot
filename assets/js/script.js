// Assignment Code
var generateBtn = document.querySelector("#generate");

var wordbank = "";

// My Charcarter types that feed into my wordbank. 
var numbers = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "`!@#$%^&*()_+=-";

//Wordbank getting fed.
wordbank += numbers;
wordbank += lowercase;
wordbank += uppercase;
wordbank += symbols;

// console.log (wordbank);

// Writes the password
function writePassword() {
  //PROMPT for criteria (password length)
  var pwdLength = prompt ("How long do you want your password to be? (Please pick a length between 8-128.)");

  //PROMPT If the user doesn't pick a password long enough. 
  if ( ! (pwdLength <= 8 && pwdLength <= 128) );
    prompt ("That password length is incorrect. Please pick a password with a lenght of 8-128.")
    return; 
    // Not sure why this math works. 



  //CONFIRM if LowerCase, UpperCase, Number, or SpecialCharacters are wanted.
  var pwdNumbers = confirm ("Would you like to include numbers?");
  var pwdLowerCase = confirm ("How about lower case letters?");
  var pwdUpperCase = confirm ("Maybe some upper case letters?");
  var pwdSymbols = confirm ("And to finish it off, how about some symbols?");

    // I need to write in any selected criterai (num, lowercase, uppercase, symbols) + pulling from the wordbank randomly. 
  
  //WRITE characterTypes to password. 
  //generatePassword to the page. 
  //Need to DEFINE generatePassword. 


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


// I think I need to be able to have a "TryAgainbutton" if the user is not satisfied. How do I loop back to the begining without needing to just refresh the page? 