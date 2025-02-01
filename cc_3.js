// Task 1: Managing Product Prices
let prices = [4,7,3,8,1];
prices.push(6);
prices.shift();
console.log(prices);

// Task 2: Modifying customer orders

// Declaring an array with numerical quantities
let orders = [21,14,17,22,38]

// Increase the third order quantity by 5
orders[2] +=4;

//Calculate total of orders
let total = orders.reduce((sum,price) => sum + price, 0);

// Log updated array and total order
console.log("Updated orders:", orders);
console.log("Total order count:", total);
