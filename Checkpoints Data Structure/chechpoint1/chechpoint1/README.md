# Sentence Analysis Algorithm

## Objective

The objective of this algorithm is to analyze a sentence character by character and determine the following:

1. The length of the sentence (the number of characters).

2. The number of words in the sentence (assuming that the words are separated by a single space).

3. The number of vowels in the sentence.

## Instructions

1. Initialize three variables as counters:

   - `lengthCount` to count the number of characters.
   - `wordCount` to count the number of words.
   - `vowelCount` to count the number of vowels.

2. Read the input sentence character by character until the point is encountered:

   - Increment `lengthCount` by 1 for each character read.
   - If the character is a space, increment `wordCount` by 1.
   - If the character is a vowel (a, e, i, o, u, A, E, I, O, U), increment `vowelCount` by 1.

3. Display the following results:

   - Length of the sentence: `lengthCount`.
   - Number of words: `wordCount`.
   - Number of vowels: `vowelCount`.

4. End.

## Note

- Each character will be treated separately.
- The last character of the sentence is the point.
- Three variables will be used as counters.

## Example Usage

- Sentence: "This is a sample sentence."
- Output:
  - Length of the sentence: 21
  - Number of words: 5
  - Number of vowels: 8

**Contained within this document are two key components: an .algo file delineating the algorithmic process and procedures, and a .js file housing the JavaScript implementation that actualizes the outlined algorithmic steps.**
