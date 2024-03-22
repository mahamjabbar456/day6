// Question 16
let guest:string[] = ["Maham","Mahnoor","Menahil"];
for (let i = 0;i<guest.length;i++){
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}

let not_present:string = "Menahil"
console.log(`\n${not_present} is not coming today for dinner.`);
console.log(`\n I inform you all of that i found a big round table`)
// unshift is used to append element in start.
guest.unshift("Abdul Jabbar");
// push is used to append element in end.
guest.push("Daniyal");
// to append element in middle we use splice method 
// let halfarray:number = guest.slice(guest.length/2);
// console.log(guest.length);
guest.splice(guest.length/2,0,"Taimoor");
for (let i = 0;i<guest.length;i++){
    if(guest[i]==="Menahil"){
        guest.splice(i,1,"Sabar");
    }
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}

