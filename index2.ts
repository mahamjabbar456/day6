// Question 17
let guest:string[] = ["Abdul Jabbar","Maham","Taimoor","Mahnoor","Sabar","Daniyal"];

// Start my program with question 16.
console.log("I inform you all that i invite only two person for dinner because i do not arrange a big table.");
// i made a for loop which start from last array length and go at the end in the under of for loop i apply an if condition where when i 3 ka equal hota hai to ma loop ko print karti hon un do guest ko uska bd ma array ko full empty kardiya.
for (let i:number = guest.length;i>2;i--){
    let remove = guest.pop();
    console.log(`\n${remove} Sorry I cannot invite you for dinner.`);
}
guest.forEach((guest)=>{
    console.log(`\nDear ,${guest} , you are still invited for dinner.`);
})

guest.pop();
guest.pop();
console.log(guest);