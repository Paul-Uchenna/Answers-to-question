// Function to analyze the sentence
function analyzeSentence(sentence) {
  // Initialize counters
  let lengthCount = 0;
  let wordCount = 1; // Assuming the first word starts at index 0
  let vowelCount = 0;

  // Iterate through each character of the sentence
  for (let i = 0; i < sentence.length; i++) {
    // Check if the current character is not a space and not a point
    if (sentence[i] !== " " && sentence[i] !== ".") {
      // Increment lengthCount only if the character is not a space or a point
      lengthCount++;
    }

    // Check if the current character is a space
    if (sentence[i] === " ") {
      wordCount++; // Increment wordCount for each space (assuming words are separated by a single space)
    }

    // Check if the current character is a vowel
    if (/[aeiou]/i.test(sentence[i])) {
      vowelCount++; // Increment vowelCount for each vowel
    }
  }

  // Display the results
  console.log("Length of the sentence:", lengthCount);
  console.log("Number of words:", wordCount);
  console.log("Number of vowels:", vowelCount);
}

// Example usage:
const sentence = "This is a sample sentence.";
analyzeSentence(sentence);
