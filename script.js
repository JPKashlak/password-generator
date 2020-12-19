// Assignment code here
var generatePassword = function() {

        alert("Welcome to Password Generator!"); 

// Prompts
        

        var lengthChoice = prompt("How many characters would you like your new password to be?\n(Please choose from 8 to 128)");
            if (lengthChoice < 8 || lengthChoice > 128) {
            alert("Please choose a number from 8 to 128");
            criteria();
        }
            else {
            alert("Okay! I'll make sure your password is " + lengthChoice + " characters long!")
        }
    
        var lowerChoice = confirm("Would you like your password to contain lowercase letters?")
            if (lowerChoice) {
                alert("Okay! I'll make sure your password contains lowercase letters!")
            }
            else {
                alert("Okay! I'll make sure your password doesn't contains lowercase letters!")
            }
    
        var upperChoice = confirm("Would you like your password to contain uppercase letters?")
            if (upperChoice) {
                alert("Okay! I'll make sure your password contains uppercase letters!")
            }
            else {
                alert("Okay! I'll make sure your password doesn't contains uppercase letters!")
            }
    
        var numericChoice = confirm("Would you like your password to contain numbers?")
            if (numericChoice) {
                alert("Okay! I'll make sure your password contains numbers!")
            }
            else {
                alert("Okay! I'll make sure your password doesn't contain numbers!")
            }
    
        var specialChoice = confirm("Would you like your password to contain special characters?")
            if(specialChoice) {
                alert("Okay! I'll make sure your password contains special characters!")
            }
            else {
                alert("Okay! I'll make sure your password doesn't contain special characters!")
            }
        
         // Final Check
            if(lowerChoice === false && upperChoice === false && numericChoice === false && specialChoice === false) {
                alert("I'm sorry, but you need to choose at least one set of characters so I can make you a new password.\nPlease try again.");
                criteria();  
            }
            else{
                alert("Here we go!\nBased on your choices, your new password is...");
            
            }
    
// generatePassword function ends
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
