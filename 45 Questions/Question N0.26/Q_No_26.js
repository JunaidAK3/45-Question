/*

Question 26:

Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

----------------
Solve Problem 26
----------------

*/
var alien_color;
// Version 1: Runs the if block (alien color is green)
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Version 1: The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Version 1: The player just earned 10 points for shooting the alien.");
}
// Version 2: Runs the else block (alien color is not green)
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Version 2: The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Version 2: The player just earned 10 points for shooting the alien.");
}
