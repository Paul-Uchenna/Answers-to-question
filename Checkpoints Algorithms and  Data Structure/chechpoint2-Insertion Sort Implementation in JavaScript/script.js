function insertionSort(arr) {
  // Get the length of the array
  let lenArr = arr.length;

  // Iterate through the array starting from the second element
  for (let i = 1; i < lenArr; i++) {
    // Store the current element to be inserted
    let current = arr[i];
    // Initialize the pointer to the element before the current one
    let p = i - 1;

    // Move elements of arr[0..i-1], that are greater than the current element,
    // to one position ahead of their current position
    while (p >= 0 && arr[p] > current) {
      arr[p + 1] = arr[p]; // Move the greater element one position ahead
      p--; // Move the pointer to the previous element
    }

    // Place the current element in its correct position
    arr[p + 1] = current;
  }

  // Return the sorted array
  return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6];
insertionSort(array);
console.log("Sorted array: " + array);
