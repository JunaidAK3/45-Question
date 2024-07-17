/*

Question 32:

Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

----------------
Solve Problem 32
----------------

*/
// List of current usernames
var currentUsers = ['Junaid', 'Ahmed', 'Uzair', 'Adnan', 'Zohaib'];
// List of new usernames
var newUsers = ['Junaid', 'Ali', 'Ahmed', 'Arbaz', 'JUNAID'];
// Loop through the newUsers list
newUsers.forEach(function (user) {
    if (currentUsers.some(function (currentuser) { return currentuser.toLowerCase() === user.toLowerCase(); })) {
        console.log("Sorry, ".concat(user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("".concat(user, " is available!"));
    }
});
