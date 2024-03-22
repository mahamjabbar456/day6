// Question 18
let place:string[] = ["Saudi Arabia","Swat","Thialand","America","Paris"];
console.log(`Orginal array : `,place);
let sorted:string[] = place.toSorted();
console.log(`Alphabetical order array : `,sorted);
console.log(`Orginal array : `,place);
// let reversed:string[] = place.toReversed().toSorted();
let reversed:string[] = place.toSorted().toReversed();
console.log(`Reverse Alphabetical order array : `,reversed);
console.log(`Orginal array : `,place);
place.reverse();
console.log(`Reverse the order : `,place);
place.reverse();
console.log(`Back to original order : `,place);
// console.log(place.sort());
place.sort();
console.log(`Sort array : `,place);
place.sort((a,b)=>b.localeCompare(a));
console.log(`Sort array in original order : `,place);