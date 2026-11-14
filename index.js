// ===================== Part 1: Coding Questions =====================

// 1. Convert the string "123" to a number and add 7

const num = "123";
console.log(Number(num) + 7);

// 2. Check if the given variable is falsy and return "Invalid" if it is

const isFalsy = (value) => {
  if (!value) {
    return "Invalid";
  }
  return value;
};
console.log(isFalsy(0));

// 3. Use a for loop to print numbers from 1 to 10, skip even numbers with continue

const printNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
};
printNumbers();
// 4. Create an array of numbers and return only the even numbers using filter

const evenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5. Use the spread operator to merge two arrays and return the result

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 6. Use a switch to return the day name for a number (1 = Sunday ... 7 = Saturday)

const getDayName = (number) => {
  switch (number) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid";
  }
};
console.log(getDayName(1));

// 7. Create an array of strings and return their lengths using map

const stringLengths = (strings) => {
  return strings.map((string) => string.length);
};
console.log(stringLengths(["apple", "banana", "cherry"]));

// 8. Write a function that checks if a number is divisible by both 3 and 5

const isDivisibleByBoth = (number) => {
  if (number % 3 === 0) {
    return "Divisible by 3";
  } else if (number % 5 === 0) {
    return "Divisible by 5";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "Divisible by both 3 and 5";
  } else {
    return "Not divisible by both 3 and 5";
  }
};
console.log(isDivisibleByBoth(15));

// 9. Write an arrow function that returns the square of a number

const square = (number) => {
  return number * number;
};
console.log(square(5));

// 10. Destructure an object and return a formatted string like "John is 25 years old"
const person = {
  name: "John",
  age: 25,
};
const { name, age } = person;
console.log(`${name} is ${age} years old`);

// 11. Write a function that takes two or more numbers and returns their sum

const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise resolving after 3 seconds with "Success"

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 3000);
});
promise.then((result) => {
  console.log(result);
});

// 13. Write a function that finds the largest number in an array

const largestNumber = (numbers) => {
  return Math.max(...numbers);
};
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 14. Write a function that takes an object and returns an array of its keys

const objectKeys = (object) => {
  return Object.keys(object);
};
console.log(objectKeys({ name: "John", age: 25 }));

// 15. Write a function that splits a string into words by spaces

const splitString = (string) => {
  return string.split(" ");
};
console.log(splitString("Hello world"));

// ===================== Part 2: Essay Questions =====================

// 1. Difference between forEach and for...of, and when to use each

/*
forEach is used to iterate over an array and perform an action on each element.
for...of is used to iterate over an array and perform an action on each element.
forEach is used when you need to perform an action on each element of an array.
for...of is used when you need to iterate over an array and perform an action on each element.
forEach is used when you need to perform an action on each element of an array.
*/

// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)

/* 
Hoisting is the process of moving function declarations to the top of the scope.
Temporal Dead Zone (TDZ) is the period of time between the declaration of a variable and its initialization.
*/

// 3. Main differences between == and ===

/*
== is used to compare two values for equality.
=== is used to compare two values for equality and type.
*/

// 4. How try-catch works and why it matters in async operations

/*
try-catch is used to handle errors in async operations.
*/

// 5. Difference between type conversion and coercion, with examples

/*
Type conversion is the process of converting a value from one type to another.
Coercion is the process of converting a value from one type to another.
*/
