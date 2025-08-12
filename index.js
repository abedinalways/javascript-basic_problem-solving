//adding or removing elements
//! push, pop, shift, unshift
// push-add to end // unshift- add to start
let arr = [2, 4, 6, 7, 8];
arr.push(9);
console.log(arr) 
let marks = [44, 66, 99, 77];
marks.unshift(88);
console.log(marks);
//pop-remove from end //shift-remove from start
let friends = ["a", "b", "c", "d"];
friends.shift();
console.log(friends);
friends.pop();
console.log(friends)
//reverse
let sentence = ["Ant", "love", "you"];
const array = [];
for (let i = sentence.length - 1; i >= 0; i--){
  array.push(sentence[i]);

 
}
console.log(array)
// const str = array.toLocaleString();
const newStr=array.join(" ")
console.log(newStr)
//join==> convert array to string
