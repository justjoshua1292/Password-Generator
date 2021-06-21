var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices = [];

var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r", "s","t", "u", "v", "w", "x", "y", "z",];

var BlankUpper = [];
var toUpper = function (x) {
    return x.toUpperCase();
};
var upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["!", "@", "#", "$", "%", "^","&", "*", "(", ")", "_", "+", "<", ">", "?", ";", "'", "/",];

// main function
function writePassword() {

    console.log('This is writePassword!')
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

function generatePassword() {
    var newPassword = "";

    do {
        var isInputValid = true;

        passwordLength = prompt("How many characters would you like your password to be? Choose any amount between 8 and 128 characters.");
        // convert the answer to a number
        passwordLength = parseInt(passwordLength)

        console.log("Password length" + passwordLength);
    
        if (!passwordLength) {
            isInputValid = false;
            alert("Required value");
        } else if (passwordLength < 8 || passwordLength > 128) {
            isInputValid = false;
            alert("You have to choose between 8 & 128 characters, try again.");
            console.log("Password Length" + passwordLength);
        }
    } while (!isInputValid)

    // var confirmLower;
    // var confirmUpper;
    // var confirmNumber;
    // var confirmSpecial;

    confirmLower = confirm("Do you want to include lowercase?")
    console.log(confirmLower)

    if(confirmLower) {
        // add lowercase letters!
        // [] + [a, b, c, d, e....] = [a, b, c, d, e....]
        userChoices = userChoices.concat(lowerCase);
    }

    confirmUpper = confirm("Do you want to include uppercase?")
    console.log(confirmUpper)

    if(confirmUpper) {
        // add uppercase letters!
        // [a, b, c, d, e....] + [A, B, C, D, E] = [a, b, c..... , A, B, C ...]
        userChoices = userChoices.concat(upperCase);
    }


    confirmSpecial = confirm("Do you want to include special characters?")
    console.log(confirmSpecial)

    if(confirmSpecial) {
        // add special characters!
        // [] + ["!", "@", "#", "$", "%", "^","&", "*",...] = [a, b, c, d, e....]
        userChoices = userChoices.concat(special);
    }

    confirmNumber = confirm("Do you want to include a number?")
    console.log(confirmNumber)

    if(confirmNumber) {
        // add numbers!
        // [] + ["!", "@", "#", "$", "%", "^","&", "*",...] = [a, b, c, d, e....]
        userChoices = userChoices.concat(Number);
    }



    console.log(userChoices)

    // after confirming the userChoices
    // we now get random characters from the userChoices
    // using passwordLength as length

    for (let index = 0; index < passwordLength; index++) {

        // generate a random number between userChoices length
        var randomIndex = Math.floor(Math.random() * userChoices.length);

        var randomCharacter = userChoices[randomIndex]
        newPassword = newPassword + randomCharacter
    }

    console.log(newPassword)

    return newPassword;


    
}


generateBtn.addEventListener("click", writePassword)