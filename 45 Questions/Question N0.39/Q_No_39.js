/*

Question 39:

City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.

----------------
Solve Problem 39
----------------

*/
// Define the city_country function
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs and print the result
console.log(city_country('Lahore', 'Pakistan')); // Output: "Lahore, Pakistan"
console.log(city_country('Dubai', 'UAE')); // Output: "Dubai, UAE"
console.log(city_country('New York', 'USA')); // Output: "New York, USA"
console.log(city_country('Tokyo', 'Japan')); // Output: "Tokyo, Japan"
console.log(city_country('Paris', 'France')); // Output: "Paris, France"
