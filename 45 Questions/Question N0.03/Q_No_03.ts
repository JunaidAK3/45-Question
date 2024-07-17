// tsc Q_No_03.ts && node Q_No_03.js
/*
Question No.03:
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

-----------------
Solve Problem 03
-----------------
*/

let Name:string = 'Junaid ali khan'

// Normal
console.log('Normal: ',Name)

// Lowercase
console.log('Lowercase: ',Name.toLowerCase())

// Uppercase
console.log('Uppercase: ',Name.toUpperCase())

// Titlecase

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt:String){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();});
}
console.log("Titlecase: " + toTitleCase(Name));
