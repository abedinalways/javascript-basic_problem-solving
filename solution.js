//Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
const getReversedString = string => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
};
console.log(getReversedString('shahin'))

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
function countVowel(word) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowel('Minhajul'));

//Problem 3: Find the Maximum Number
//Write a function that takes an array of numbers and returns the largest number.
const findMaxNum = arr => {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]>maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
//Example
console.log(findMaxNum([3, 17, 22, 92, 51]));