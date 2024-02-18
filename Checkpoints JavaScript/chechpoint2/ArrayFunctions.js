const myArray = [7, 2, 10, 5, 1, 8, 3, 6, 4, 9];

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaxAndMin(arr) {
  let maximum = arr[0];
  let minimum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return { maximum, minimum };
}

const result = findMaxAndMin(myArray);
console.log("The maximum value is:", result.maximum);
console.log("The minimum value is:", result.minimum);
// output maximum= 10; minimum= 1;

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumOfArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("The sum of value is:", sumOfArrays(myArray));
// output 55

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr) {
  let greaterThan5 = [];
  let lessThan5 = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 5) {
      greaterThan5.push(element);
    }
    if (element <= 5) {
      lessThan5.push(element);
    }
  }
  return { greaterThan5, lessThan5 };
}

const testing = filterArray(myArray);
console.log("Filtered Array (numbers greater than 5):", testing.greaterThan5);
console.log("Filtered Array (numbers less than 5):", testing.lessThan5);
// output greaterThan5 [ 7, 10, 8, 6, 9 ];  lessThan5 [ 2, 5, 1, 3, 4 ]
