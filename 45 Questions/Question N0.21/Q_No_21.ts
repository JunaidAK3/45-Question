/*
Question 21:

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

----------------
Solve Problem 21
----------------
*/

// Define the structure of Student object using an interface
interface Student{
    Name: string;
    Father_Name: string;
    Roll_No: number;
    Class: number;
}

// Function to create a Student Data in object
function createData(Name: string, Father_Name: string, Roll_No: number, Class: number): Student{
    return {
        Name,
        Father_Name,
        Roll_No,
        Class
    };
}

// Create an array to store multiple Student Data in objects
let StdData: Student[] = [];

// Add some books to the StdData
StdData.push(createData("Junaid Ali Khan", "Anwar Ali Khan", 3424, 9));
StdData.push(createData("M.Ahmed Arbaz", "M.Hassan", 3425, 9));
StdData.push(createData("Adnan Ali", "Ali Khan", 3426, 9));
StdData.push(createData("Uzair Khan", 'Ali Khan', 3427, 9));

// Function to display the StdData contents
function DataAnalysis(StdData: Student[]): void {
    StdData.forEach((Student) => {
        console.log(`Name: ${Student.Name}`);
        console.log(`Father_Name: ${Student.Father_Name}`);
        console.log(`Roll_No: ${Student.Roll_No}`);
        console.log(`Class: ${Student.Class}th`);
        console.log('---------------------');
    });
}

DataAnalysis(StdData);

