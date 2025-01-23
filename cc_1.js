let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);
let productName = "Laptop";
const productPrice = 999.99;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);
let accountBalance = 5000;

accountBalance += 1000; // Add 1000
console.log("After addition:", accountBalance);

accountBalance -= 500; // Subtract 500
console.log("After subtraction:", accountBalance);

accountBalance *= 1.1; // Multiply by 1.1
console.log("After multiplication:", accountBalance);

accountBalance /= 2; // Divide by 2
console.log("After division:", accountBalance);
let customerName = "Alice";
let welcomeMessage = "Welcome, " + customerName + "! We are glad to have you.";
console.log(welcomeMessage);
let isLoggedIn = true;
let hasAccess = isLoggedIn && true; // Example condition
let deniedAccess = !isLoggedIn; // Negation

console.log("Access Granted:", hasAccess);
console.log("Access Denied:", deniedAccess);
