// Task : Recursion

// Task1 : Fibonacci Sequence

function fibonacci(num) {
  // Base case: If n is 0 or 1, return n
  if (num === 0 || num === 1) {
    return num;
  }
  // Recursive case: Calculate the Fibonacci number for n by summing the two preceding Fibonacci numbers
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Test the function
const n = 7;
console.log("The " + n + "th Fibonacci number is: " + fibonacci(n));

// Task2 : Palindrome Checker

// Define the cleanString function
function cleanString(str) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"; // Define valid characters
  str = str.toLowerCase();
  let cleanedStr = "";
  // Iterate through the characters of the string and keep only alphanumeric characters
  for (let i = 0; i < str.length; i++) {
    if (alphanumeric.includes(str[i])) {
      cleanedStr += str[i];
    }
  }
  return cleanedStr;
}

// Define the checkPalindrome function
function checkPalindrome(s) {
  // Base case: if the string has 0 or 1 characters, it's a palindrome
  if (s.length < 1) {
    return true;
  }
  // Recursive case: check if the first and last characters are the same
  if (s[0] === s[s.length - 1]) {
    // Call checkPalindrome recursively with the substring excluding the first and last characters
    return checkPalindrome(s.slice(1, -1));
  } else {
    return false;
  }
}

// Define the isPalindrome function
function isPalindrome(str) {
  const cleanedString = cleanString(str);

  // Check if the cleaned string is a palindrome
  const checkStringIsPalindrome = checkPalindrome(cleanedString);

  return checkStringIsPalindrome;
}

// Test the isPalindrome function
const testString = "A man, a plan, a canal, Panama";
console.log(
  'Is "' + testString + '" a palindrome? ' + isPalindrome(testString)
);
