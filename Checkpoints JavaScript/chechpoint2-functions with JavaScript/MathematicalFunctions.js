// Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const number = 15;
console.log("Factorial of", number, "is", factorial(number));
// output 1307674368000

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) {
    return false, "This is not a prime number.";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false, `${num}, Is not a prime number.`;
    }
  }
  return true, `${num}, Is a prime number.`;
}

console.log(isPrime(127));
// output 127, Is a prime number.

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(number) {
  let sequence = [0, 1];
  for (let i = 2; i < number; i++) {
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

console.log("The Fibonacci Sequence of", number, "is:", fibonacciSequence(10));
// output Array(10) [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
