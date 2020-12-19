// Assignment code here
var howLong = function() {
    var passLength = prompt("How many characters would you like your new password to be?\n(Please choose from 8 to 128)");
        if (passLength < 8 || passLength > 128) {
        alert("Please choose a number from 8 to 128");
        howLong();
    }
    else {
        alert("Okay! I'll make sure your password is " + passLength + " characters long!")
    }
}
var lowerOption = function() {}
var upperOption = function() {}
var numericOption = function() {}
var specialOption = function() {}



var generatePassword = function() {
    alert("Welcome to Password Generator!");
    howLong();

}    

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
