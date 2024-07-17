/*
Question 17:

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

----------------
Solve Problem 17
----------------
*/
// list of guests
var guest_list = ['Junaid', 'Ahmed', 'Uzair', 'Dayo'];
/*
for(let i = 0; i < guest_list.length; i++){
    
    console.log(`\n                  Dinner Invitation`);
    console.log('\n==================================================\n');
    console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
    console.log('\n==================================================');
    
}
    */
var not_coming_guest = guest_list[0];
// Remove old guest name and add new guest name
guest_list.splice(0, 1, "Adnan Ali");
// Invintations message
/*
for(let i = 0; i < guest_list.length; i++){
    
    console.log(`\n                  Dinner Invitation`);
    console.log('\n==================================================\n');
    console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
    console.log('\n==================================================');
    
}
    */
console.log("Mr ".concat(not_coming_guest, ", is not coming for dinner tomorow."));
// Adding a new new guest at starting index of array
guest_list.unshift('Junaid');
// Adding a new new guest at ending index of array
guest_list.push('Ukasha');
// Adding a new new guest at middle index of array
var middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 0, 'Ali');
// for(let i = 0; i < guest_list.length; i++){
//     console.log(`\n                  Dinner Invitation`);
//     console.log('\n==================================================\n');
//     console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
//     console.log('\n==================================================');
// }
console.log("We have found a bigger dinner table so we invited more three guests (Name : ".concat(guest_list[0], ", ").concat(guest_list[Math.floor(guest_list.length / 2)], ", ").concat(guest_list[6], ")"));
// Cancer the invitation all guest but two guest invited the dinner tomorow
console.log('\n\nUnfortunately we are out of space, so have space for two guests only.\n\n');
// cancer the name in lst for guest 
while (guest_list.length > 2) {
    var not_invited = guest_list.pop();
    console.log("Dear ".concat(not_invited, ",\nSorry, You are not invited for a dinner tomorow.\n"));
}
// sending a invitations to the last two guest on list
console.log('\n======================================\n');
console.log('Invitations to the last 2 Guests');
console.log('\n======================================\n');
for (var i = 0; i < guest_list.length; i++) {
    console.log("\n                  Dinner Invitation");
    console.log('\n==================================================\n');
    console.log("Dear ".concat(guest_list[i], ",\nYou are still invited for a dinner tomorow.\n\nTHANK YOU"));
    console.log('\n==================================================');
}
guest_list.splice(0, 2);
console.log(guest_list);
