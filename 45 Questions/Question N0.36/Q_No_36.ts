/*

Question 36:

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

----------------
Solve Problem 36
----------------

*/


// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
  }
  
  // Call the function
  make_shirt("Large", "I love TypeScript!");
  