/*

Question 41:

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

----------------
Solve Problem 41
----------------

*/
var magicians = ['David Copperfield', 'Dynamo', 'Penn and Teller', 'Derren Brown', 'Shin Lim'];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
