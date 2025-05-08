let person = {
    name: "David",
    age: 25,
    isStudent: true,
    city: "New York",
    country: "USA"
};
// accessing object properties
console.log(person.name); // David
console.log(person.age); // 25
console.log(person.isStudent); // true

let fruits = ["apple", "banana", "orange", "grape"];
let mixedArray = [1, "apple", true, null, undefined, { name: "David" }, [1, 2, 3]];

console.log(mixedArray.length); // 7
console.log(mixedArray[0]); // 1
console.log(mixedArray[1    ]); // apple
console.log(fruits[1]); // apple

// type conversion
// 1. String to Number
let numStr = "25";
let num = Number(numStr); // converts string to number it is caller expricit type conversion
console.log(num); // 25
let numImplicit = "25" * 1; //or "25" - 0 // converts string to number implicitly
console.log(numImplicit); // 25
// Falsy values in javascript
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)