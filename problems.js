// # 10 problem Solving in Javascript

//  Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
const getReversedString = string => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
};
// Example:
console.log(getReversedString('Shahin')); // function will return => nihahS

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
const vowelCounter = string => {
  let numberOfVowel = 0;
  convertedString = string.toLowerCase();
  for (let i = 0; i <= string.length - 1; i++) {
    if (
      convertedString[i] == 'a' ||
      convertedString[i] == 'e' ||
      convertedString[i] == 'i' ||
      convertedString[i] == 'o' ||
      convertedString[i] == 'u'
    ) {
      numberOfVowel++;
    }
  }
  return numberOfVowel;
};
// Example:
console.log(vowelCounter('Shahin')); //function will return => 2

//Problem 3: Find the Maximum Number
//Write a function that takes an array of numbers and returns the largest number.
const findMaximumNumber = arr => {
  let maxNum = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};
//Example
console.log(findMaximumNumber([3, 17, 22, 92, 51])); //function will return => 92

// Problem 4: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
const removeDuplicateNum = arr => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};
console.log(removeDuplicateNum([19, 20, 52, 33, 41, 41, 52])); //function will return =>[19, 20, 52, 33, 41, 52]

// Problem 5: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
const sumOfArray = arr => {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sumOfArray([3, 17, 22, 92, 51])); //function will return =>185

// Problem 6: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
const isPalindrome = string => {
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
};
// Examples:
console.log(isPalindrome('madam')); //function will return => true
console.log(isPalindrome('hello')); //function will return => false

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
const getEvenNum = arr => {
  const evenNum = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
};
console.log(getEvenNum([3, 17, 22, 92, 51])); //function will return =>[ 22, 92 ]

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
const capitalizeWords = string => {
  const words = string.split(' ');
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  });
  return capitalizedWords.join(' ');
};

// Example:
console.log(capitalizeWords('hello world')); //function will return =>"Hello World"
console.log(capitalizeWords('javaScript is fun')); //function will return =>"Javascript Is Fun"

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
const getFactorial = num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};
// Example
console.log(getFactorial(7)); //function will return =>5040

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('PingPong');
    } else if (i % 3 === 0) {
      console.log('Ping');
    } else if (i % 5 === 0) {
      console.log('Pong');
    } else {
      console.log(i);
    }
  }
}

// Example
pingPong();
