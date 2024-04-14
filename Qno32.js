"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Make a list of current users
let current_user = ["Ali", "Raza", "Abdullah", "Ahmed", "Tariq"];
//Make a list of new users
let new_user = ["Ali", "Ahad", "Ahmed", "Raziq", "Ariyan"];
// for (let newUser of new_user) {
//     let lower_new_user = newUser.toLowerCase();
//     let username = false
//     for (let currentUser of current_user) {
//         let lowercase_current_user = currentUser.toLowerCase()
//         if (lower_new_user === lowercase_current_user) {
//         username true
//         }
//     }
// }
// let current_users: string[] = ["John", "Jane", "Alice", "Bob", "Eve"];
// // Make a list of new users
// let new_users: string[] = ["alice", "Bob", "charlie", "david", "eve"];
// // Loop through new users
// for (let new_user of new_users) {
//     // Convert both the new username and current usernames to lowercase for case-insensitive comparison
//     let lower_new_user = new_user.toLowerCase();
//     let found = false;
//     for (let current_user of current_users) {
//         if (lower_new_user === current_user.toLowerCase()) {
//             found = true;
//             break;
//         }
//     }
//     // Check if the username has been found in the current users list
//     if (found) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//     }
// }
