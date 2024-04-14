// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guesArr : string[]=["Arman","Rizwan raza","Shazaib","Shamir"]

let canNot : string ="Arman"
console.log(canNot+' '+"canNot make it, For dinner");

let newgues : string ="Bilal"
guesArr[guesArr.indexOf(canNot)] =newgues;

// console.log(guesArr)

guesArr.map((item)=>
console.log(`Dear ${item} You Are Cordinary invited to a Dinner`)
)
