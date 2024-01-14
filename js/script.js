// Assign document element with id of #generate in a variable generateBtn to later be used to add event listener
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector('#password');
// Initialize variables to be used in the generatePassword function
let emptyString = '';
let password = emptyString;
let tmpsswd = emptyString;
let passwordLength = emptyString;
// Create a function to generate the password and store in a variable password
function generatePassword() {
  //define dtrings of characters to be used in password
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=""';
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
  let hasLower = confirm('Click OK to confirm including lowercase characters, otherwise if you do not want lower case characters press cancel to move on.');
  let hasUpper = confirm('Click OK to confirm including uppercase characters, otherwise if you do not want upper case characters press cancel to move on.');
  let hasNumber = confirm('Click OK to confirm including numeric characters, otherwise if you do not want numbers characters press cancel to move on.');
  let hasSymbol = confirm('Click OK to confirm including special characters, otherwise if you do not want special characters press cancel to move on.');
  // Check if user confirmed at least one character type
  if (
    hasLower === false &&
    hasUpper === false &&
    hasNumber === false &&
    hasSymbol === false
  ) {
    // Alert user that at least one character type must be selected
    alert('You MUST select at least one character type!');
    // Clear tmpsswd
    passwordText.value = emptyString;
    // Return to the beginning of the function
    return;
  } 
  // Add lowercase characters to the string of all characters to be used in password if confirmed by the user (ternary operator)
  tmpsswd += hasLower ? lowerCase : emptyString;
  // Add uppercase characters to the string of all characters to be used in password if confirmed by user (ternary operator)
  tmpsswd += hasUpper ? upperCase : emptyString;
  // Add numeric characters to the string of all characters to be used in password if confirmed by user (ternary operator)
  tmpsswd += hasNumber ? numbers : emptyString;
  // Add special characters to the string of all characters to be used in password if confirmed by user (ternary operator)
  tmpsswd += hasSymbol ? symbols : emptyString;
  // End Create a string of all user selected types of characters to be used in password
  // "Loop" through the string of all types of characters confirmed by the user and randomly select an index of a character to add this character to the password
  password = Array.from({length: passwordLength}, () => tmpsswd[Math.floor(Math.random() * tmpsswd.length)]).join('');
  // Store the password in the document element with id of #password
  passwordText.value = password;
  // return the password
  return;
}
// Write password to the #password input
function writePassword() {
  // Call the function to generate the password
  generatePassword();
  // Append the password to the document element with id of #password to display password
  passwordText.ATTRIBUTE_NODE(passwordText.value); 
  // Return the password
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// End of js code