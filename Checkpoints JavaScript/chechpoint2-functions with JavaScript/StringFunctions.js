// Reverse a String: Write a function that reverses a given string.
function reversesString(str) {
  let string = str.split("").reverse().join("");
  return string;
}

const test = "good";
console.log(`The reverse String of ${test} is: ` + reversesString(test));
// output doog

// Count Characters: Create a function that counts the number of characters in a string
function countCharacter(str) {
  let count = str.length;
  return count;
}

const character = "We love javascript";
console.log(`The length of ${character} is:`, countCharacter(character));
// output 18

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWord(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let firstletter = words[i].charAt(0).toUpperCase();
    words[i] = firstletter + words[i].slice(1);
  }
  let wordjoin = words.join(" ");
  return wordjoin;
}

console.log(capitalizeWord("The quick brown fox jumps over the lazy dog"));
// output The Quick Brown Fox Jumps Over The Lazy Dog
