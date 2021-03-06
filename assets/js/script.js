// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My Work. 

//My Character array. 
var wordbank = [];

var numbers = "1234567890".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var symbols = "`!@#$%^&*()_+=-".split("");

//Function to generate the password. 
function generatePassword() {
  var pwdLength = parseInt(prompt("How long do you want your password to be? It needs to be between 8-128 to be secure.") );
  console.log(pwdLength);

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Please pick a password with a length between 8-128.");
    return; 
  }
  
  var password = ""; 

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

  //For loop to get the password length. 
  for (var i = 0; i < pwdLength; i++) {
      var pulledCharacters = wordbank[Math.floor(Math.random() * wordbank.length)];
      password += pulledCharacters;
      console.log (pulledCharacters);
      }
    
    return password 
}