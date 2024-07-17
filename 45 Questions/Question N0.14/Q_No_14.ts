/*
Question 14:
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

----------------
Solve Problem 14
----------------
*/

let guest_list:string[] = ['junaid', 'ahmed', 'uzair', 'dayo']

for(let i = 0; i < guest_list.length; i++){
    
    console.log(`\n                  Dinner Invitation`);
    console.log('\n==================================================\n');
    console.log(`Dear ${guest_list[i]},\n\nYou're invited for a dinner tomorow.\n\nTHANK YOU`);
    console.log('\n==================================================');
    
}