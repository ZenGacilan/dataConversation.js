// 1. Convert a String to a Number
let price = "200";

// Using parseInt()
let priceInt = parseInt(price);
console.log("200", priceInt); 

// Using Number()
let priceNum = Number(price);
console.log("200", priceNum); 

// Using + operator
let pricePlus = +price;
console.log("+ 200:", pricePlus); 

// 2. Convert a Number to a String
let distance = 150;

// Using .toString()
let distanceStr1 = distance.toString();
console.log("150.toString():", distanceStr1);

// Using String()
let distanceStr2 = String(distance);
console.log("150):", distanceStr2);

// 3. Convert a String to a Decimal Number
let weight = "72.5";

// Using parseFloat()
let weightFloat = parseFloat(weight);
console.log("72.5):", weightFloat);
