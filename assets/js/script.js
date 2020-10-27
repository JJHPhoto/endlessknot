// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Variable to pool my characters. 
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

//User input for password length.
function passwordLength() {
      //PROMPT for password length
    var pwdLength = parseInt(prompt("How long do you want your password to be? (Needs to be between 8-128 to be secure.)") );
    console.log(pwdLength);

    // //ALERT if the user doesn't pick a password long enough. 
    if (pwdLength < 8 || pwdLength > 128) {
      alert ("Please pick a password with a length between 8-128.")
    }
}

function charactersPicked () {

    //CONFIRM if LowerCase, UpperCase, Number, or SpecialCharacters are wanted.
    var pwdNumbers = confirm ("Would you like to include numbers?");
    if (pwdNumbers === true) {
        wordbank = wordbank.concat(numbers); 
        console.log (numbers);
      }
    
    var pwdLowerCase = confirm ("How about lower case letters?");
      if (pwdLowerCase === true) {
        wordbank = wordbank.concat(lowercase); 
        console.log (lowercase);
      }
    
    var pwdUpperCase = confirm ("Maybe some upper case letters?");
    if (pwdUpperCase === true) {
        wordbank = wordbank.concat(uppercase);
        console.log (uppercase); 
      }
    
    var pwdSymbols = confirm ("And to finish it off, how about some symbols?");
    if (pwdSymbols === true) {
        wordbank = wordbank.concat(symbols);
        console.log (symbols); 
      }
  }

//Password generate function.
function generatePassword() { 

  var pwdLength = passwordLength();

  var selections = charactersPicked();

  for (var i = 0; i < pwdLength; i++) {
  var pulledCharacters = selections[Math.floor(Math.random() * selections.length)];
  password = pulledCharacters;
  console.log (pulledCharacters)
  }

  return password; 

}

generateBtn.addEventListener("click", writePassword);