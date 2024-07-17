/*
Question 13:
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

----------------
Solve Problem 13
----------------
*/
var myFavTrans = ['Motorcycle', 'Car', 'Bus', 'plane'];
for (var i = 0; i < myFavTrans.length; i++) {
    console.log("I would like to own a ".concat(myFavTrans[i]));
}
