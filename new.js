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

function totalPrice() {
  let total = products.reduce((sum, product)=>sum+product.price,0)
  return total
}
console.log(totalPrice());

function availablePrice() {
  let available = products.filter(product => product.available); //filter for filtering
  let availableProductPrice = available.reduce((sum, p) => sum + p.price, 0); //reduce for totalSum
  return availableProductPrice;
}
console.log(availablePrice())

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const sortAlphabetically = fruits.sort();
console.log(sortAlphabetically)
const reverseArray = sortAlphabetically.reverse();
console.log(reverseArray);

//

function upperWord(array) {
  let lengthOfWord = array.filter(word => word.length <= 5);
  let newArray = [...lengthOfWord];
  let uppercaseWord=newArray.map(n=>n.toUpperCase())
  return uppercaseWord;
}
console.log(upperWord(['pineapple', 'hotdog', 'banana', 'cat', 'mango']));

// Problem: তোমার কাছে employees এর array আছে, যাদের salary আছে।
// যারা ৫০,০০০ এর বেশি salary পায়, তাদের ১০% bonus দাও।
// নতুন array বানাও যা শুধু updated salary থাকবে।


function salaryUpdated(array) {
  let primeEmployees = array.filter(employee => employee.salary >= 50000);
  let incrementSalaryOfPrimeEmployees = primeEmployees.map(p => ({Name:p.name, Salary:Math.floor(p.salary*1.1)}));

  return incrementSalaryOfPrimeEmployees;
}
console.log(salaryUpdated([
  { name: 'Shahin', salary: 40000 },
  { name: 'Rakib', salary: 55000 },
  { name: 'Mehedi', salary: 60000 },
  { name: 'Arif', salary: 30000 },
]))