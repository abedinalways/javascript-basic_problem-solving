const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 800,
    category: 'Electronics',
    available: true,
  },
  { id: 2, name: 'Shoes', price: 50, category: 'Fashion', available: false },
  {
    id: 3,
    name: 'Phone',
    price: 500,
    category: 'Electronics',
    available: true,
  },
];
const names = products.map(product => product.name);
console.log(names);
const totalPrice = products.reduce((sum, product) => sum + product.price,0);
console.log(totalPrice)

//callback function-Callback Function হচ্ছে এমন একটি ফাংশন যেটাকে আরেকটি ফাংশনের আর্গুমেন্ট (parameter) হিসেবে পাঠানো হয়, এবং পরে সেই ফাংশনের ভেতরে নির্দিষ্ট সময়ে কল করা হয়।
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  const name = 'Shahin';
  callback(name); // এখানে greeting ফাংশনকে কল করা হচ্ছে
}

processUserInput(greeting);

// Find the second largest number in array
function secondmaxNumber(array) {
  const removeDuplicate = new Set(array);//remove duplicate
  console.log(typeof removeDuplicate)
  let newArray = [...removeDuplicate]; 
  console.log(newArray);
  const descendingArray = array.sort((a, b) => b - a); //sorting
  const secondMax = descendingArray[1]; //second max
  return secondMax;
}
console.log(secondmaxNumber([2, 4, 5, 9, 5, 6, 7, 1, 2, 4, 5, 7]));

//Rotate array to the right by k positions
function rotateArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(rotateArray([5, 3, 6, 7, 8, 9, 2, 1]))

//Find all pairs in array that sum to target
function arrayOfPair(arr, target) {
  let seen = new Set();
  let pairs = [];
  for (num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([num,complement])
    }
    seen.add(num)
  }
  return pairs;
}
console.log(arrayOfPair([2, 4, 3, 5, 7, 8, 1], 9))