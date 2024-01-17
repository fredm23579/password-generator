from random import *
from string import *
from bs4 import BeautifulSoup as soup
generateBtn = soup.document.querySelector("#generate")
passwordText = soup.document.querySelector('#password')
# Generate function to generate random password.
def generatePassword():
    #initialize password variable
    password = ''
    # prompt the user for password length
    passwordLength = soup.document.prompt("How many characters would you like your password to be?")
    # prompt the user if they want upper case lgettrs.
    upperCase = soup.document.prompt("Would you like uppercase letters?")
    # prompt the user if they want lower case lgettrs.
    lowerCase = soup.document.prompt("Would you like lowercase letters?")
    # prompt the user if they want numbers.
    numbers = soup.document.prompt("Would you like numbers?")
    # prompt the user if they want special characters.
    specialCharacters = soup.document.prompt("Would you like special characters?")
    # check selections to make sure user has selected at least one type of characters.
    if upperCase == "No" and lowerCase == "No" and numbers == "No" and specialCharacters == "No":   
        soup.document.alert("You have NOT selected at least one type of character.")
        return
    else:      
        # if user selects upper case letters, add them to the password variable.
        if upperCase == "Yes":
            password += string.ascii_uppercase
        # if user selects lower case letters, add them to the password variable.
        if lowerCase == "Yes":
            password += string.ascii_lowercase
        # if user selects numbers, add them to the password variable.
        if numbers == "Yes":
            password += string.digits
        # if user selects special characters, add them to the password variable.
        if specialCharacters == "Yes":
            password += string.punctuation
    # generate the password with the given length
    password = ''.join(random.choice(password) for i in passwordLength.value)
    passwordText.value = password
    return
# Add event listener to generate button.
generateBtn.addEventListener("click", generatePassword)








