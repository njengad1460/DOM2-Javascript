// ways to decrear veriable
// 1. var - older way to declare variables, function scoped
var name = "David";
var age = 25; // assinment opperator
var isStudent = true; // boolean
// 2. let - newer way to declare variables, block scoped, values can be changed, mutable
let city = "New York";
let country = "USA";
let name = "David"; // redeclaring variable with let will throw an error
// 3. const - newer way to declare variables, block scoped, values cannot be changed, immutable
const pi = 3.14;
const birthYear = 1998;
const isEmployed = false; // boolean
// 4. var, let, const - all three are used to declare variables in JavaScript
// 5. camelCase - variable names should be written in camelCase, first letter of the first word is lowercase and first letter of each subsequent word is uppercase
// 6. snake_case - variable names should be written in snake_case, all letters are lowercase and words are separated by underscores
// 7. kebab-case - variable names should be written in kebab-case, all letters are lowercase and words are separated by hyphens


// data types
// 1.Primitives data types
// 1. String - used to represent text, enclosed in single or double quotes
let firstName = "David";
let backtics = `you can embed ${greeting} with templet literal `; // backticks are used to create template literals

// 2. Number - used to represent numbers, can be integers or floating point
// integer and floating point
let integer = 25;
let float = 25.5;
let decimal = 0.5;
let negative = -25;
// 3. Boolean - used to represent true or false values
let isStudent = true;
let isLoggedIn = false;
// 4. Undefined - used to represent a variable that has been declared but has not been assigned a value
let x;
let y = undefined; // undefined is a data type in JavaScript
// console.log(x); // undefined
// 5. Null - used to represent a variable that has been assigned a null value, intentionally empty/absense of value
let employeeData = null; // null is a data type in JavaScript
// 6. Symbol - used to represent unique value and immmutable values, not commonly used
const uniqueId = Symbol("id"); // symbol is a data type in JavaScript

// Non-primitive/reference data types
// 1. Object - used to represent a collection of key-value pairs, mutable
let person = {
    name: "David",
    age: 25,
    isStudent: true,
    city: "New York",
    country: "USA"
};
// accessing object properties
console.log(person); //this is a parent { name: 'David', age: 25, isStudent: true, city: 'New York', country: 'USA' }
console.log(person.name); // David

// 2. Array - used to represent a collection of values, mutable, odered list of values
let fruits = ["apple", "banana", "orange", "grape"];
let mixedArray = [1, "apple", true, null, undefined, { name: "David" }, [1, 2, 3]];


console.log(mixedArray.length); // 7
console.log(mixedArray[0]); // 1
console.log(mixedArray[1]); // apple


// type conversion
// 1. String to Number
let numStr = "25";
let num = Number(numStr); // converts string to number it is caller expricit type conversion
console.log(num); // 25
let numImplicit = "25" - 0; // converts string to number implicitly
let numImplicit2 = "25" * 1; //or "25" - 0 // converts string to number implicitly
console.log(numImplicit2); // 25
// Falsy values in javascript
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)