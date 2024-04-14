"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guetsArr = ["Arman", "Rizwan raza", "Shazaib", "Shamir"];
console.log("We found a bigger dinner table :", guetsArr);
guetsArr.unshift("Bilal");
guetsArr.splice(guetsArr.length / 2, 0, "Ali");
guetsArr.forEach(guest => {
    console.log(`Dear ${guest} You are invited to a dinner our place`);
});
console.log(guetsArr);
