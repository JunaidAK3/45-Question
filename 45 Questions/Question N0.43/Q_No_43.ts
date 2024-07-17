/*

Question 43:

Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

----------------
Solve Problem 43
----------------

*/
  

const magicians: string[] = ['David Copperfield', 'Dynamo', 'Penn and Teller', 'Derren Brown', 'Shin Lim'];

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = `The Great ${magicians[i]}`;
  }
  return greatMagicians;
}

function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

const greatMagicians: string[] = make_great([...magicians]);

console.log('Original Magicians:');
show_magicians(magicians);
console.log('Great Magicians:');
show_magicians(greatMagicians);

