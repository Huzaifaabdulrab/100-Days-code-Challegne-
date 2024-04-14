//  30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//METHODE 1 FOR OF LOOP

let users : string[] = ["Admin","Huzaifa","Admin","Abdulrab","Ali","Raza"]
for(let user of users){
    if(user==="Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}

//METHODE 2 FOR LOOP
//let users : string[] = ["Admin","Huzaifa","Abdulrab","Ali","Raza"]
// for(let i=0; i<users.length; i++){
//     if(users[i]=="Admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }else{
//         console.log(`Hello ${users[i]} thank you for logging in again.`)
//     }
// }