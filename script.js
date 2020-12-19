// Assignment code here
var howLong = function() {
    var lengthChoice = prompt("How many characters would you like your new password to be?\n(Please choose from 8 to 128)");
        if (lengthChoice < 8 || lengthChoice > 128) {
        alert("Please choose a number from 8 to 128");
        howLong();
    }
    else {
        alert("Okay! I'll make sure your password is " + lengthChoice + " characters long!")
    }
}
var lowerOption = function() {
    var lowerChoice = confirm("Would you like your password to contain lowercase letters?")
        if (lowerChoice) {
            alert("Okay! I'll make sure your password contains lowercase letters!")
        }
        else {
            alert("Okay! I'll make sure your password doesn't contains lowercase letters!")
        }

}
var upperOption = function() {
    var upperChoice = confirm("Would you like your password to contain uppercase letters?")
        if (upperChoice) {
            alert("Okay! I'll make sure your password contains uppercase letters!")
        }
        else {
            alert("Okay! I'll make sure your password doesn't contains uppercase letters!")
        }
}
var numericOption = function() {
    var numericChoice = confirm("Would you like your password to contain numbers?")
        if (numericChoice) {
            alert("Okay! I'll make sure your password contains numbers!")
        }
        else {
            alert("Okay! I'll make sure your password doesn't contain numbers!")
        }
}
var specialOption = function() {
    var specialChoice = confirm("Would you like your password to contain special characters?")
        if(specialChoice) {
            alert("Okay! I'll make sure your password contains special characters!")
        }
        else {
            alert("Okay! I'll make sure your password doesn't contain special characters!")
        }
}

var generatePassword = function() {
    alert("Welcome to Password Generator!");
    howLong();
    lowerOption();
    upperOption();
    numericOption();
    specialOption();

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
