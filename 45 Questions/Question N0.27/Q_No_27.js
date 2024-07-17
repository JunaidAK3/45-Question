/*

Question 27:

Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

----------------
Solve Problem 27
----------------

*/
var alien_color;
// Version 1: Alien is green (earns 5 points)
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Version 1: The player earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Version 1: The player earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Version 1: The player earned 15 points for shooting the red alien.");
}
// Version 2: Alien is yellow (earns 10 points)
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Version 2: The player earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Version 2: The player earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Version 2: The player earned 15 points for shooting the red alien.");
}
// Version 3: Alien is red (earns 15 points)
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Version 3: The player earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Version 3: The player earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Version 3: The player earned 15 points for shooting the red alien.");
}
