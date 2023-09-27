// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define character sets for password generation
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate a random character from a given character set
const generatePassword = () => {
  const passwordLength = parseInt(prompt("Please, choose the # between 8-128"));
  // Check if the entered password length is valid
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please, pick the number between 8-128");
    return "";
  }

  const isLetterUpperCase = confirm(
    "Do you want your password to have UpperCase letter?"
  );
  const isLetterLowerCase = confirm(
    "Do you want your password to have LowerCase letter?"
  );
  const isNumber = confirm("Do you want your password to have numbers?");
  const isSpecialChars = confirm(
    "Do you want your password to have special chars?"
  );

  // Validate that at least one character type is selected
  if (
    !isLetterUpperCase &&
    !isLetterLowerCase &&
    !isNumber &&
    !isSpecialChars
  ) {
    alert(
      "At least one character type you must select, for me to generate password for you!"
    );
  }

  let passwordSelections = [];
  if (isLetterUpperCase) passwordSelections.push(upperCase);
  if (isLetterLowerCase) passwordSelections.push(lowerCase);
  if (isNumber) passwordSelections.push(numbers);
  if (isSpecialChars) passwordSelections.push(symbols);

  let newPassword = [];

  // Ensure at least one character of each selected type
  for (let i = 0; i < passwordSelections.length; i++) {
    newPassword.push(
      passwordSelections[i][
        Math.floor(Math.random() * passwordSelections[i].length)
      ]
    );
  }

  // Fill the remaining characters
  for (let i = newPassword.length; i < passwordLength; i++) {
    let randomSelection =
      passwordSelections[Math.floor(Math.random() * passwordSelections.length)];
    let randomSymbol =
      randomSelection[Math.floor(Math.random() * randomSelection.length)];
    newPassword.push(randomSymbol);
  }

  return newPassword.join("");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
