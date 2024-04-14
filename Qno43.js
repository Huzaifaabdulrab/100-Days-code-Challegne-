"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magician) {
    let modifiedMagicians = [];
    for (let i = 0; i < magician.length; i++) {
        let modifiyName = "Great " + magician[i];
        modifiedMagicians.push(modifiyName);
    }
    return modifiedMagicians;
}
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
console.log(make_great(magicianNames));
function show_magicians(originalMagicians, modifiedMagicians) {
    console.log("originalMagicians");
    for (let i = 0; i < originalMagicians.length; i++) {
        console.log(originalMagicians[i]);
    }
    console.log("\nmodifiedMagicians");
    for (let i = 0; i < modifiedMagicians.length; i++) {
        console.log(modifiedMagicians[i]);
    }
}
show_magicians(magicianNames, make_great(magicianNames));
// function makeGreat(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const magician of magicians) {
//         greatMagicians.push(`Great ${magician}`);
//     }
//     return greatMagicians;
// }
// // Define the function to show magicians
// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Initial array of magicians
// const magicians: string[] = ["Merlin", "Gandalf", "Dumbledore"];
// // Make a copy of the array
// const originalMagicians: string[] = [...magicians];
// // Call makeGreat with a copy of the array
// const greatMagicians: string[] = makeGreat([...magicians]);
// // Show the original array
// console.log("Original Magicians:");
// showMagicians(originalMagicians);
// // Show the array with Great added to each magician's name
// console.log("\nGreat Magicians:");
// showMagicians(greatMagicians);
