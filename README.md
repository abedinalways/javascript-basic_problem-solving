**Hi! Below are five coding problems designed to evaluate your problem-solving skills, JavaScript knowledge, and real-world coding abilities. Please read each problem carefully and implement the solutions accordingly. The expected output and examples are provided for each task. Make sure to complete 3 task 
Time to complete = 30 mins max**

---

 

## Problem 1: Dynamic Filtering with Multiple Criteria

### Description:
Write a function that filters a product list based on multiple criteria (e.g., price range, category, availability).
- The criteria will be passed as an object.
- Products should match *all* provided criteria.

### Function Signature:
```javascript
function filterProducts(products, criteria) {
  // Your code here
}
```

### Example:
```javascript
const products = [
  { id: 1, name: "Laptop", price: 800, category: "Electronics", available: true },
  { id: 2, name: "Shoes", price: 50, category: "Fashion", available: false },
  { id: 3, name: "Phone", price: 500, category: "Electronics", available: true },
];

const criteria = { priceRange: [400, 1000], category: "Electronics", available: true };

console.log(filterProducts(products, criteria));
// Output: [{ id: 3, name: "Phone", price: 500, category: "Electronics", available: true }]
```

---

## Problem 2: Inventory Allocation

### Description:
Write a function to allocate stock to multiple warehouses when fulfilling an order. Distribute the required quantity across warehouses while minimizing leftover stock.

### Function Signature:
```javascript
function allocateStock(product, orderQuantity) {
  // Your code here
}
```

### Example:
```javascript
const product = {
  id: 1,
  stock: [
    { warehouse: "A", quantity: 10 },
    { warehouse: "B", quantity: 5 },
    { warehouse: "C", quantity: 8 },
  ],
};

const orderQuantity = 12;

console.log(allocateStock(product, orderQuantity));
// Output: [
//   { warehouse: "A", quantity: 10 },
//   { warehouse: "B", quantity: 2 }
// ]
```

---

## Problem 3: Customer Segmentation by Purchase History

### Description:
Write a function to group customers based on their purchase frequency.
- Return an object with keys: "Low", "Medium", and "High".
- "Low": Customers with fewer than 5 orders.
- "Medium": Customers with 5-10 orders.
- "High": Customers with more than 10 orders.

### Function Signature:
```javascript
function segmentCustomers(customers) {
  // Your code here
}
```

### Example:
```javascript
const customers = [
  { id: 1, name: "Alice", orders: 3 },
  { id: 2, name: "Bob", orders: 8 },
  { id: 3, name: "Charlie", orders: 15 },
];

console.log(segmentCustomers(customers));
// Output: {
//   Low: ["Alice"],
//   Medium: ["Bob"],
//   High: ["Charlie"]
// }
```

---

## Problem 4: Order Summary Generator

### Description:
Write a function to generate a summary of an order with itemized totals and tax.
- Each product in the order has a price and quantity.
- Calculate the subtotal, tax (10%), and the total price.

### Function Signature:
```javascript
function generateOrderSummary(order) {
  // Your code here
}
```

### Example:
```javascript
const order = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
];

console.log(generateOrderSummary(order));
// Output: {
//   subtotal: 1100,
//   tax: 110,
//   total: 1210
// }
```

---

## Problem 5: Optimized Shipping Cost Calculation

### Description:
Write a function to calculate shipping costs based on the weight of the cart and shipping zones.
- Each zone has weight-based pricing slabs.
- Calculate the shipping cost for the lightest valid slab for the cart's total weight.

### Function Signature:
```javascript
function calculateShipping(zones, zoneName, cartWeight) {
  // Your code here
}
```

### Example:
```javascript
const zones = {
  "Zone A": [
    { maxWeight: 5, price: 50 },
    { maxWeight: 10, price: 80 },
    { maxWeight: 20, price: 150 },
  ],
};

console.log(calculateShipping(zones, "Zone A", 7));
// Output: 80
```

---

### Instructions:
1. Implement the solutions for all tasks in JavaScript.
2. Ensure your code is clean, readable, and handles edge cases.
3. Submit your solutions in a single file with comments explaining your logic.

Good luck!
```

