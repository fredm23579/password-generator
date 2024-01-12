// Assignment Code
var generateBtn = document.querySelector("#generate");
// Get references to the #generate element
function generatePassword() {
  var password = '';
  var passwordText = document.querySelector('#password');
  var passwordLength = prompt(
    'How many characters would you like your password to contain?'
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters');
    return;
  }
  var hasLower = confirm('Click OK to confirm including lowercase characters.');
  var hasUpper = confirm('Click OK to confirm including uppercase characters.');
  var hasNumber = confirm('Click OK to confirm including numeric characters.');
  var hasSymbol = confirm('Click OK to confirm including special characters.');
  if (
    hasLower === false &&
    hasUpper === false &&
    hasNumber === false &&
    hasSymbol === false
  ) {
    alert('Must select at least one character type');
    return;
  }
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var all = '';
  if (hasLower) {
    all += lowerCase;
  }
  if (hasUpper) {
    all += upperCase;
  }
  if (hasNumber) {
    all += numbers;
  }
  if (hasSymbol) {
    all += symbols;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  passwordText.value = password;
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
  passwordText.append(password); 
  console.log(password);
  console.log(passwordText);
  console.log(passwordText.value);
  console.log(passwordText.value.length);

  return password;
}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);

console.log(sumOfNumbers(10));
console.log(sumOfNumbers(2));
console.log(sumOfNumbers(4));
console.log(sumOfNumbers(0));
