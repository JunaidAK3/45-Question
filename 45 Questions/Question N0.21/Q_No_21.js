/*
Question 21:

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

----------------
Solve Problem 21
----------------
*/
// Function to create a Student Data in object
function createData(Name, Father_Name, Roll_No, Class) {
    return {
        Name: Name,
        Father_Name: Father_Name,
        Roll_No: Roll_No,
        Class: Class
    };
}
// Create an array to store multiple Student Data in objects
var StdData = [];
// Add some books to the StdData
StdData.push(createData("Junaid Ali Khan", "Anwar Ali Khan", 3424, 9));
StdData.push(createData("M.Ahmed Arbaz", "M.Hassan", 3425, 9));
StdData.push(createData("Adnan Ali", "Ali Khan", 3426, 9));
StdData.push(createData("Uzair Khan", 'Ali Khan', 3427, 9));
// Function to display the StdData contents
function DataAnalysis(StdData) {
    StdData.forEach(function (Student) {
        console.log("Name: ".concat(Student.Name));
        console.log("Father_Name: ".concat(Student.Father_Name));
        console.log("Roll_No: ".concat(Student.Roll_No));
        console.log("Class: ".concat(Student.Class, "th"));
        console.log('---------------------');
    });
}
DataAnalysis(StdData);
