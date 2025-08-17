let sentence = "you love shahin";
let reverseSentence = sentence.split(" ").reverse().join(" ");
console.log(reverseSentence);
let word = 'LOVE';
let newWord = "";
for (let i = word.length - 1; i >= 0; i--){
  newWord += word[i];
}
console.log(newWord);

//even or odd
let numbers = [3, 4, 5, 7, 8, 10, 2, 12, 44, 33];
let evenNum = numbers.filter(num => num % 2 === 0);
let oddNum = numbers.filter(num => num % 2 !== 0);
console.log(evenNum);
console.log(oddNum)

//remove duplicate and find largest number
let geep = [3, 5, 8, 9, 2, 4, 5, 3, 2, 10, 8, 9];
let removeDup = new Set(geep);
console.log(removeDup);
let newArray = [...removeDup];
console.log(newArray);
let descending = newArray.sort((a, b) => b - a);
console.log(descending);
let largestNumber = descending[0];
let second_largest = descending[1];
console.log(largestNumber, ",", second_largest);

//count vowels
function countVowel(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) {
     count++
   }
  }
  return count;

}
console.log(countVowel("minhajul"));

///[aeiou]/gi → a regex that matches all vowels, case-insensitively.
function countOfVowel(word) {
  const matches = word.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countOfVowel('minhajul'));


