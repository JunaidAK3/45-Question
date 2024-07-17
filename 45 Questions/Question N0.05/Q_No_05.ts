/*
Question 05:
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

-----------------
Solve Problem 05
-----------------
*/

let famous_person_01:string = "Malala Yousafzai"
let famous_person_02:string = "Muhammad Ali Jinnah" 
let quote_01:string = '"Education is the most powerful weapon which you can use to change the world."'
let quote_02:string = '"Failure is a word unknown to me."'

let message1 = famous_person_01 + 'once said, ' + quote_01
let message2 = famous_person_02 + 'once said, ' + quote_02

// let message1 = `${famous_person_01} once said, ${quote_01}`
// let message2 = `${famous_person_02} once said, ${quote_02}`

console.log(message1)
console.log(message2)