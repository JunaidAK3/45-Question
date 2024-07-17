/*
Question 22:

Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

----------------
Solve Problem 22
----------------
*/
// String array
// Error Section
// =============
var Countries = ["Pakistan", "China", "Japan"];
// Countries.slice
for (var i = 0; i = Countries.length; i++) {
    console.log(Countries[4]);
}
// Solve Error Section
// =============
var Countries1 = ["Pakistan", "China", "Japan"];
// Countries.slice
for (var i = 0; i = Countries.length; i++) {
    console.log(Countries1[i]);
}
