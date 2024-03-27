// Task : (if-else and switch)

// Task1: Leap Year Checker
function isLeapYear(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If divisible by 100 and not divisible by 400, it's not a leap year
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
    // Otherwise, it's a leap year
    return true;
  }
  // If not divisible by 4, it's not a leap year
  return false;
}

// Test the function
const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " is a leap year.");
} else {
  console.log(yearToCheck + " is not a leap year.");
}

// Task2: Ticket Pricing

function ticketPrice(age) {
  if (age <= 12) {
    return 10; // Price for Children
  } else if (age >= 13 && age <= 17) {
    return 15; // Price for Teenagers
  } else {
    return 20; // Price for Adults
  }
}

// Ask the user to enter their age
let userAge = prompt("Enter your age:");

// Convert user input to an integer
userAge = parseInt(userAge);

// Check if the age is valid
if (isNaN(userAge) || userAge <= 0) {
  alert("Please enter a valid age.");
} else {
  // Call the ticketPrice function to get the ticket price
  let price = ticketPrice(userAge);
  console.log("The ticket price for your age is $" + price + ".");
}

// Task3: Weather Clothing Advise

// Function to advise on clothing based on temperature and rain
function clothingAdviser(temperature, isRaining) {
  if (temperature >= 25 && !isRaining) {
    return "It's hot and not raining. You can wear light clothes like t-shirts and shorts.";
  } else if (temperature >= 15 && temperature < 25 && !isRaining) {
    return "It's nice and dry weather. A t-shirt with lightweight pants could be appropriate.";
  } else if (temperature >= 10 && temperature < 15 && !isRaining) {
    return "It's cool. A light sweater and pants may be comfortable.";
  } else if (temperature < 10 && !isRaining) {
    return "It's cold. Make sure to wear warm clothes like a coat and a hat.";
  } else if (isRaining) {
    return "It's raining. Don't forget to take an umbrella and wear a raincoat or waterproof jacket.";
  } else {
    return "Unable to provide advice in this situation.";
  }
}

// Ask the user for the temperature and if it's raining
let userTemperature = prompt(
  "What is the current temperature in degrees Celsius?"
);
let isRainingInput = prompt("Is it currently raining? (yes/no)").toLowerCase();

userTemperature = parseInt(userTemperature);

// Check if user input is valid
if (isNaN(userTemperature)) {
  alert("Please enter a valid temperature.");
} else {
  // Convert user input for rain into a boolean
  let isRaining = isRainingInput === "yes" ? true : false;

  let advice = clothingAdviser(userTemperature, isRaining);
  console.log(advice);
}
