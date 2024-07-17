/*

Question 42:

Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

----------------
Solve Problem 42
----------------

*/

// Make an array of magician's names
const magicians: string[] = ['David Copperfield', 'Dynamo', 'Penn and Teller', 'Derren Brown', 'Shin Lim'];

// Define the make_great function
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
}

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

// Call the make_great function to modify the array of magicians
make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians)