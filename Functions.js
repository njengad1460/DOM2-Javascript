// function greet(name){
//     return "Hello, " + name
// }
// // } this is the traditional way
// console.log(greet("David"))

// const greet = function(name){
//     return "Hello, " + name 
// }
// console.log(greet ("David")) 

// const greet = (name) =>{
//     return 'Hello, ' + name
// }
// console.log(greet("Njenga"))

// const greetShort = name => "Hello, " + name
// console.log(greetShort("Steve"))

// function add (a, b){
//     return a + b;
// }
// console.log(add(5,3));

// returning default fanction

// function greet(name="Guest"){
//     return "Hello, " + name
// }
// console.log(greet()) // Hello Guest
// console.log(greet("Diana"))

// function sum(a, b, ...numbers){
//     return a + b + numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest parameters, used to collect multiple arguments into an array

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log (sum(1,2,3,4,5));

