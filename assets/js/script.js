// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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

function generatePassword() { 
    //PROMPT for criteria (password length)
    var pwdLength = prompt ("How long do you want your password to be? (Needs to be between 8-128 to be secure.)");

    //PROMPT If the user doesn't pick a password long enough. 
    if ( ! (pwdLength >= 8 || pwdLength <= 128) ); {
      alert ("Please pick a password with a length of 8-128.")
      // console.log (pwdLength);
      //Not accepting any "correct" numbers, but it is in the console.log Maybe need to build out more. 
      // return;
    } 
  
    //CONFIRM if LowerCase, UpperCase, Number, or SpecialCharacters are wanted.
    var pwdNumbers = confirm ("Would you like to include numbers?");
    if (pwdNumbers === true) {
      wordbank = wordbank.concat(numbers); 
      // console.log (getnumbers);
    }
  
    var pwdLowerCase = confirm ("How about lower case letters?");
    if (pwdLowerCase === true) {
      wordbank = wordbank.concat(lowercase); 
      // console.log (getlowercase);
    }
  
    var pwdUpperCase = confirm ("Maybe some upper case letters?");
    if (pwdUpperCase === true) {
      wordbank = wordbank.concat(uppercase);
      // console.log (getuppercase); 
    }
  
    var pwdSymbols = confirm ("And to finish it off, how about some symbols?");
    if (pwdSymbols === true) {
      wordbank = wordbank.concat(symbols);
      // console.log (getsymbols); 
    }
  
  
  
      // I need to write in any selected criterai (num, lowercase, uppercase, symbols) + pulling from the wordbank randomly. 
    
    //WRITE characterTypes to password. 
    //generatePassword to the page. 
    //Need to DEFINE generatePassword. 
  
  
    //Need to WRITE variables to 'password' when selected
  
    //Need to CONFIRM all variables are used that the user selects. 
    //If 'no' to all, tell user they need to select "TryAgain"

    // I think I need to be able to have a "TryAgainbutton" if the user is not satisfied. How do I loop back to the begining without needing to just refresh the page 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);