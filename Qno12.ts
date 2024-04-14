// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let perNames : string[] = ["raza", "huzaifa","ali"]

// simple methode
let message : string= " your are so interligent";

console.log(perNames[0] + " " + message)
console.log(perNames[1] + " " + message)
console.log(perNames[2] + " " + message)

// for of loop methode

for(let pName of perNames){
    console.log(`${pName} You are so inteligent`);
}

// for loop methode

for(let i =0; i<perNames.length ; i++){
    console.log(`${perNames[i]}  Your are so inteligent`);
}