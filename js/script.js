// Assign document element with id of #generate in a variable generateBtn to later be used to add event listener
var generateBtn = document.querySelector("#generate");
// Get references to the #generate element and store in a variable generateBtn
// Create a function to generate the password and store in a variable password
function generatePassword() {
  //define dtrings of characters to be used in password
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=""';
  // Initialize password variable to be used later to the empty string
  var password = '';
  // Assign document element with id of #password in a variable passwordText
  let passwordText = document.querySelector('#password');
  // Prompt user for password length
  let passwordLength = prompt(
    'How many characters would you like your password to contain?'
  );
  // Check if password length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters');
    return;
  }
  // Confirm if user wants to include lowercase, uppercase, numeric, and/or special characters
  var hasLower = confirm('Click OK to confirm including lowercase characters.');
  var hasUpper = confirm('Click OK to confirm including uppercase characters.');
  var hasNumber = confirm('Click OK to confirm including numeric characters.');
  var hasSymbol = confirm('Click OK to confirm including special characters.');
  // Check if user confirmed at least one character type
  if (
    hasLower === false &&
    hasUpper === false &&
    hasNumber === false &&
    hasSymbol === false
  ) {
    // Alert user that at least one character type must be selected
    alert('Must select at least one character type');
    // Clear the password
    document.querySelector("#password").value = '';
    // Return to the beginning of the function
    return;
  }
  // Create a string variable of all characters to be used in password
  let tmpsswd = '';
  // Add lowercase characters to the string of all characters to be used in password if confirmed by the user
  if (hasLower) {
    tmpsswd += lowerCase;
  }
  // Add uppercase characters to the string of all characters to be used in password if confirmed by user
  if (hasUpper) {
    tmpsswd += upperCase;
  }
  // Add numeric characters to the string of all characters to be used in password if confirmed by user
  if (hasNumber) {
    tmpsswd += numbers;
    }
  // Add special characters to the string of all characters to be used in password
  if (hasSymbol) {
    tmpsswd += symbols;
  }
  // End Create a string of all user selected types of characters to be used in password
  // Loop through the string of all types of characters selected by the user to be used in password
  for (var i = 0; i < passwordLength; i++) {
     // Add a random character from the string of confirmed types of characters to the password variable
    password += tmpsswd[Math.floor(Math.random() * tmpsswd.length)];
   }
  // Store the password in the document element with id of #password
  passwordText.value = password;
  // return the password
  return password;
}
// Write password to the #password input
function writePassword() {
  // Call the function to generate the password
  var password = generatePassword();
  // Assign document element with id of #password in a variable passwordText
  var passwordText = document.querySelector("#password");
  // Store the password in the document element with id of #password
  passwordText.value = password;
  // Append the password to the document element with id of #password to display password
  passwordText.append(password); 
  // Return the password
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Clear the password from memory
password = '';
// End of js code