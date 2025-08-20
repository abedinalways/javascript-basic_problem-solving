let products = [
  { id:1, name:'laptop', price:45000},
  { id:2, name:'mobile', price:14000},
]
console.log(products.length);
let signelProduct = products[1];
console.log(typeof signelProduct)

const num = [9, 1, 3, 4, 5, 7, 8]
for (let i = 0; i < num.length; i++){
  console.log(num[i])
}
for (let j=num.length-1; j>= 0; j--){
  console.log("inverse: ",num[j])
}
let hero=[]
num.forEach(n => {
  hero.push(n * 3);
})
console.log(hero)

const product = {
  id: 1,
  name: 'Laptop',
  price: 800,
  category: 'Electronics',
};
console.log(product.price)