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
      pairs.push[num, complement]
    }
    seen.add(num);
  }
  return pairs;
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));