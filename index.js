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
//!reverse
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

let word = "shahin";
let newWord=""
for (let i = word.length-1; i >=0; i--){
  newWord+=word[i];
  
}
console.log(newWord)
let yourWord = "hello";
let reverseWord = yourWord.split("").reverse().join("");
console.log(reverseWord);

let sen = "i love you";
let revSen = sen.split(" ").reverse().join(" ")
console.log(revSen);
let uo = "i have a book";
let split = uo.split(" ");
console.log( typeof split)
console.log(split);

//remove white space
//trim() method can remove white space from start and end
let text = " i have a cat  ";
let newText = text.trim();
console.log(newText)

//but if i want to remove the white space that is in the middle such as "i have       a cat"  i have to use replace() with regular expression.
//!syntax is ==>   replace(/\s+/g,"")
///\s+/g → matches one or more whitespace characters (space, tab, newline) globally (g flag).

let sent = "  i have a    ball and  a  bat ";
let cleanSent = sent.trim().replace(/\s+/g, " ");
//i want to remove extra space and keep one space between the word so trim() method can remove frist and last whitespace and replace(/\s+/g, " ") can remove extra space in the middle and keep single space between the words

console.log(cleanSent)


//flat method
