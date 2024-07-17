/*
Question 16:

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

----------------
Solve Problem 16
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
for (var i = 0; i < guest_list.length; i++) {
    console.log("\n                  Dinner Invitation");
    console.log('\n==================================================\n');
    console.log("Dear ".concat(guest_list[i], ",\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU"));
    console.log('\n==================================================');
}
console.log("We have found a bigger dinner table so we invited more three guests (Name : ".concat(guest_list[0], ", ").concat(guest_list[Math.floor(guest_list.length / 2)], ", ").concat(guest_list[6], ")"));
