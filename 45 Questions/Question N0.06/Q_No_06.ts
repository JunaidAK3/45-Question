/*
Question 06:
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

-----------------
Solve Problem 06
-----------------
*/

let person_name = "\t\n   Junaid Ali Khan   \n\t"

console.log("Name with whitespace:")
console.log("=====================")
console.log(person_name)

let stripped_person_name = person_name.trim()

console.log("Name after stripping whitespace:")
console.log("================================")
console.log(stripped_person_name)

