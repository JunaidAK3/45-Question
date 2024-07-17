/*
Question 12:
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

----------------
Solve Problem 12
----------------
*/
// My friends name list in array:
var names = ["Junaid", "Ahmed", "Uzair", "Adnan", "Dayo"];
// Print each name by accessing each element in the list:
names.forEach(function (name) {
    console.log("".concat(name, ", You're seleted onsite classes for web 3.O from Governor House"));
});
