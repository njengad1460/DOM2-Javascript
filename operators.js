// Arithimetic operators
let a = 10;
let b = 5;
let c = a + b; // addition
console.log(c); // 15
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus (remainder) what is the remainder of a/b?
console.log(a ** b); // exponentiation>> power of a^b 10^5 = 100000
console.log(a++); // post increment
console.log(a); // 11

// Assignement operators
let x = 10;
x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)
x %= 4; // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)
console.log(x); // 8

// Comparison operators
let y = 5;
let z = "5";
console.log(y == z); // loose equality (true) compares value only
console.log(y === z); // strict equality (false) compares value and type
console.log(y != z); // loose inequality (false) compares value only
console.log(y !== z); // strict inequality (true) compares value and type

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

// Logical operators
let isStudent = true;
let isLoggedIn = false;
console.log(isStudent && isLoggedIn); // logical AND (false)
console.log(isStudent || isLoggedIn); // logical OR (true)
console.log(!isStudent); // logical NOT (false)

// babe do you love me?
// !yes

// short circuite evaluation
let name = "" || "Guest"; // if name is falsy, it will return "Guest"
console.log(name); // Guest
