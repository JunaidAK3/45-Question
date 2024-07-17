/*

Question 36:

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

----------------
Solve Problem 36
----------------

*/
// Define the make_shirt function
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and the message printed on it is \"").concat(message, "\"."));
}
// Call the function
make_shirt("Large", "I love TypeScript!");
