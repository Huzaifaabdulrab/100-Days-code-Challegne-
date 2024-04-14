"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function make_great(magician) {
    magician.forEach(magicians => {
        console.log(`The ${magicians} is great magicians`);
    });
}
make_great(magicianNames);
