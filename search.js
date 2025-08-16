let text = "i love javascript";
console.log(text.includes('love'));

//find() ==> একটি কলব্যাক ফাংশন ব্যবহার করে array-এর মধ্যে প্রথম যে element শর্ত পূরণ করে, সেটিকে return করে।
//filter()==> সব matching elements return করে

let ages = [17, 16, ,28, 44, 22, 23, 12, 18, 19, 30, 33, 40, 21, 44];
let age = ages.find(age => age >19);
console.log(age) //number return

let arrayAge = ages.filter(age => age > 19);
console.log(arrayAge) //array return