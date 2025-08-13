let ticket_counter = [];
let passengers = ['shahin', 'badhon', 'faruk', 'dip', 'ripon', 'kader', 'fahad', 'saad', 'polash'];


if (passengers.length > 5) {
  ticket_counter.push(...passengers.slice(0,5));
  passengers =passengers.slice(5)
}
console.log(ticket_counter)
console.log(passengers)

//** */ slice() হলো JavaScript-এর একটি Array method যা একটি নতুন অ্যারে তৈরি করে, মূল অ্যারের নির্দিষ্ট অংশ থেকে।
//!array.slice(startIndex, endIndex)


//remove the first and last
let names = ['shahin', 'badhon', 'faruk', 'dip', 'ripon', 'kader'];
let newArray = [...names.slice(1, -1)];
console.log(newArray)

//clone an array
let original = [1, 2, 3, 4, 5];
let clone = original.slice()
console.log(clone)

//Last N Elements
let scores = [88, 92, 75, 91, 85, 90];
let last_three = [...scores.slice(-3)];
console.log(last_three)

