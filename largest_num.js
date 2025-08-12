//find the largest number of an array
let array = [4, 6, 8, 2, 4, 66, 1, 9, 20];
let largest = array[0];
// console.log(largest)
for (let i = 0; i < array.length; i++){
  if (array[i]>largest) {
   largest=array[i];
  }
}
console.log(largest);

//! using Math.max()
//...numbers(spread operator) দিয়ে array কে আলাদা আলাদা number আকারে Math.max() এ পাঠিয়েছি

let numbers = [9, 5, 6, 3, 4, 10, 55, 33, 445];
let smallNumber = Math.min(...numbers); //small number=> Math.min()
let largeNumber = Math.max(...numbers);
console.log(smallNumber);
console.log(largeNumber);



//!reduce method
//array.reduce(callback, initialValue)
// callback: একটি ফাংশন যা প্রতিটি উপাদানের জন্য চালানো হয়।
//initialValue: accumulator-এর প্রাথমিক মান (ঐচ্ছিক, কিন্তু ভালো অভ্যাস এটি ব্যবহার করা)।
//!reduce() হলো একটি array method যা array-এর প্রতিটি উপাদানকে প্রসেস করে একটি একক মান তৈরি করে। এটি একটি callback function ব্যবহার করে এবং ঐ ফাংশনের মাধ্যমে আগের মান (accumulator) ও বর্তমান উপাদান (current value) একত্রিত করে।
//
let marks = [55, 66, 77, 44, 33, 88, 77];
let highest_mark = marks.reduce((max, current) => max > current? max : current);
console.log(highest_mark);
//here==> max=callback, current=2nd parameter;


//!2nd largest number
//প্রথমে spread ...numbers দিয়ে কপি করেছি (মূল array পরিবর্তন না করতে)।
//sort((a, b) => b - a) দিয়ে বড় থেকে ছোট সাজিয়েছি।
//sorted[1] → দ্বিতীয় index এর ভ্যালু হল 2nd largest

let num = [12, 45, 27, 89, 32, 67, 56];
let sorted = [...num].sort((a, b) => b - a);
let second_largest = sorted[1];
console.log(second_largest);
