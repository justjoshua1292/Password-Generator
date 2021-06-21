var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r", "s","t", "u", "v", "w", "x", "y", "z",];

var BlankUpper = [];
var toUpper = function (x) {
    return x.toUppercase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["!", "@", "#", "$", "%", "^","&", "*", "(", ")", "_", "+", "<", ">", "?", ";", "'", "/",];

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");

    passwordText.value = password;


}

function generatePassword() {
    passwordLength = prompt("How many characters would you like your password to be? Choose any amount between 8 and 128 characters.");
    console.log("Password length" + passwordLength);

    if (passwordLength) {
        alert("Required value");
    }

} else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("You have to choose between 8 & 128 characters, try again.");
    console.log("Password Length" + passwordLength);
}