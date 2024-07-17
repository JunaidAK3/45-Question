/*

Question 24:

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

----------------
Solve Problem 24
----------------

*/

// Tests for equality and inequality with strings
let city: string = 'London';
console.log("Is city == 'London'? I predict True.");
console.log(city == 'London');  // True

console.log("Is city != 'Paris'? I predict True.");
console.log(city != 'Paris');  // True

console.log("Is city == 'Paris'? I predict False.");
console.log(city == 'Paris');  // False

console.log("Is city != 'London'? I predict False.");
console.log(city != 'London');  // False

// Tests using the lower case function
let state: string = 'California';
console.log("Is state.toLowerCase() == 'california'? I predict True.");
console.log(state.toLowerCase() == 'california');  // True

console.log("Is state.toLowerCase() == 'texas'? I predict False.");
console.log(state.toLowerCase() == 'texas');  // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age: number = 25;
console.log("Is age == 25? I predict True.");
console.log(age == 25);  // True

console.log("Is age != 30? I predict True.");
console.log(age != 30);  // True

console.log("Is age > 20? I predict True.");
console.log(age > 20);  // True

console.log("Is age < 30? I predict True.");
console.log(age < 30);  // True

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);  // True

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);  // False

// Tests using "and" and "or" operators
let score: number = 85;
console.log("Is score >= 80 and score <= 90? I predict True.");
console.log(score >= 80 && score <= 90);  // True

console.log("Is score >= 90 or score <= 80? I predict False.");
console.log(score >= 90 || score <= 80);  // False

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.indexOf('banana') !== -1);  // True

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.indexOf('grape') !== -1);  // False

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(fruits.indexOf('grape') === -1);  // True

console.log("Is 'apple' not in fruits? I predict False.");
console.log(fruits.indexOf('apple') === -1); // False
