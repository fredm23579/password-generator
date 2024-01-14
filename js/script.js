// Create variables for DOM elements
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector('#password');
//  Generate function to generate password
function generatePassword() {
  //  Create strings for possible characters
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=""';
  //  Prompt for password length
  const passwordLength = prompt('How many characters would you like your password to contain?');
  //  Check if password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters');
    return;
  }
  //  Prompt for character types to include in password
  const hasLower = confirm('Click OK to confirm including lowercase characters');
  const hasUpper = confirm('Click OK to confirm including uppercase characters');
  const hasNumber = confirm('Click OK to confirm including numeric characters');
  const hasSymbol = confirm('Click OK to confirm including special characters');
  //  Check if at least one character type is selected
  if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
    alert('You MUST select at least one character type!');
    passwordText.value = '';
    return;
  } 
  //  Create an array of selected characters
  let selectedCharacters = '';
  selectedCharacters += hasLower ? lowerCase : '';
  selectedCharacters += hasUpper ? upperCase : '';
  selectedCharacters += hasNumber ? numbers : '';
  selectedCharacters += hasSymbol ? symbols : '';
  //  Generate password with selected characters and password length
  let password = Array.from({length: passwordLength}, () => selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]).join('');
  //  Write password to the #password
  passwordText.value = password;
  return;
}
// write password to the #password element in the HTML document using document.querySelector
function writePassword() {
  //  Call generatePassword
  generatePassword();
}
// Add event listener to generate button to call generatePassword when clicked
generateBtn.addEventListener("click", writePassword);