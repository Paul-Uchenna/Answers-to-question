# Insertion Sort Implementation in JavaScript

## Introduction

This repository contains an implementation of the Insertion Sort algorithm using JavaScript. Insertion sort is a simple and efficient sorting algorithm that works in a similar way to how we sort playing cards in our hands. It repeatedly takes the next element from the unsorted section of the array and inserts it into the correct position within the sorted section.

## Algorithm Overview

The Insertion Sort algorithm works as follows:

1. Iterate through the array, starting from the second element (index 1).
2. Consider each element as the current element to be inserted into the sorted section of the array.
3. Compare the current element with the elements before it in the sorted section.
4. Move the elements greater than the current element one position ahead to make space for the current element.
5. Insert the current element into its correct position in the sorted section.
6. Repeat steps 2 to 5 until all elements are sorted.

## Instructions

The implementation follows the following instructions:

- At each iteration, work only with the first `i-1` elements of the array.
- Pick the element `arr[i]` and insert it into the sorted sequence in the array from index `0` to `i-1`.

## Usage

To use the insertion sort algorithm, follow these steps:

1. Clone the repository to your local machine.
2. Include the `insertionSort` function in your JavaScript project.
3. Call the `insertionSort` function with the array you want to sort as the argument.
4. The function will return the sorted array.
