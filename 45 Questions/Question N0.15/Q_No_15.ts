/*
Question 15:
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

----------------
Solve Problem 15
----------------
*/

// list of guests

let guest_list:string[] = ['Junaid', 'Ahmed', 'Uzair', 'Dayo']

/*
for(let i = 0; i < guest_list.length; i++){
    
    console.log(`\n                  Dinner Invitation`);
    console.log('\n==================================================\n');
    console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
    console.log('\n==================================================');
    
}
    */


let not_coming_guest = guest_list[0];

// Remove old guest name and add new guest name

guest_list.splice(0, 1, "Adnan Ali")

// Invintations message

for(let i = 0; i < guest_list.length; i++){
    
    console.log(`\n                  Dinner Invitation`);
    console.log('\n==================================================\n');
    console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
    console.log('\n==================================================');
    
}
console.log(`Mr ${not_coming_guest}, is not coming for dinner tomorow.`);



