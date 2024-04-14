"use strict";
// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
let guesArr = ["Arman", "Rizwan raza", "Shazaib", "Shamir"];
let canNot = "Arman";
console.log(canNot + ' ' + "canNot make it, For dinner");
let newgues = "Bilal";
guesArr[guesArr.indexOf(canNot)] = newgues;
// console.log(guesArr)
guesArr.map((item) => console.log(`Dear ${item} You Are Cordinary invited to a Dinner`));
