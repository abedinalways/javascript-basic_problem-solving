//even or odd sorted
let array = [5, 7, 8, 2, 4, 10];
const even = [];
const odd = [];
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
  if (array[i] % 2 === 0) {
    even.push(array[i])
  }
  else odd.push(array[i])
}
console.log(even);
console.log(odd);

//another way: filter method

let arrayOfNumber = [3, 44, 5, 8, 9, 10, 7, 44, 32];
let evenNum = arrayOfNumber.filter(num=>num%2===0);
let oddNum = arrayOfNumber.filter(num => num % 2 !== 0);
console.log(evenNum); 
console.log(oddNum)

//alternative : forEach() method
let numberOfAll = [9, 4, 6, 7, 88, 99, 100, 33, 44, 56];
let oddNumber = [];
let evenNumber = [];
numberOfAll.forEach(num => {
  (num%2===0?evenNumber:oddNumber).push(num)
})
console.log(oddNumber);
console.log(evenNumber)

function findPairs(arr, target) {
  let seen = new Set();
  let pairs = [];
  for (num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([num, complement])
    }
    seen.add(num);
  }
  return pairs;
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));

function revSentence(sentence) {
  let newSentence = sentence.split(' ').reverse().join(' ');
  return newSentence;
}
console.log(revSentence("Shajin Loves shamim"));

function Slice(arry) {
  const newArray = [...arry.slice(1, -1)];
  return newArray;
}
console.log(Slice(['shahin', 'badhon', 'faruk', 'dip', 'ripon', 'kader', 'fahad', 'saad', 'polash']))

//join

function passage(array) {
  let newPassage = array.join(" , ");
  return newPassage;
}
console.log(passage(['Banana', 'Orange', 'Apple', 'Mango']));

const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const newArr = myGirls.concat(myBoys)
console.log(newArr)

//flat() ==>>jora lagano
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const newFruits = fruits.splice(2, 0, "pineapple", "litchi");
console.log(newFruits)
console.log(fruits)
//splice() মূল array-কে পরিবর্তন করে
//এটি remove করা item return করে

const fruitsss = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruitsss.slice(3);
console.log(citrus);
