/*

Question 44:

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

----------------
Solve Problem 44
----------------

*/
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You've ordered a sandwich with:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
makeSandwich("turkey", "avocado", "bacon");
makeSandwich("ham", "cheese");
makeSandwich("roast beef", "cheddar cheese", "lettuce", "tomato", "mayo");
