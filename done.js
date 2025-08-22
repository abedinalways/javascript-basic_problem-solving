const reverseString = string => {
  let str = "";
  for (let i = string.length-1; i >= 0; i--){
    str = str + string[i];
  }
  return str;
}
console.log(reverseString("you"));

const countVowel = word => {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("sheikh minhajul abedin"));

//find the max number
// let nums = [3, 5, 6, 7, 8, 10, 2, 13, 6, 7];
// let maxNum = Math.max(...nums);
// console.log(maxNum);
const findMax = arr => {
  let maxNum = Math.max(...arr);
  return maxNum;
}
console.log(findMax([3, 4, 5, 2, 6, 10, 9, 11, 12, 14,11, 10, 4, 5, 3, 2, 13]));

//if we want to remove duplicate Number, we should use  new Set(numbers)  ;
const findMaxNumber = arr => {
  let removeDuplicateNumber = new Set(arr);
  let maxNumber = Math.max(...removeDuplicateNumber);
  return maxNumber;
}
console.log(findMaxNumber([4, 5, 2, 6, 10, 19, 11, 19, 18, 11, 10, 4, 5, 3, 2]));

//2nd Maximum number

const secondMaxNumber = arr => {
  let removeDuplicateNumber = new Set(arr);
  let freshNum = [...removeDuplicateNumber];
  let sortedNumber = freshNum.sort((a, b) => b - a);
  return secondMax = sortedNumber[1];
}
 console.log(secondMaxNumber([4, 5, 2, 6, 10, 19, 11, 19,21,20, 18, 11, 10, 4, 5]));