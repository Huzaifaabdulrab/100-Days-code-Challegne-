
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings


let fruite1 : string = ("Apple");
let fruite2 : string = ("Mango");

console.log(fruite1 === fruite2);
console.log(fruite1 !== fruite2);

// • Tests using the lower case function

let name1 : string = ("Huzaifa");
console.log(name1.toLocaleLowerCase()==="huzaifa");

// / • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1 : number = 10;
let number2 : number = 5;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// • Tests using "and" and "or" operators

let Condition1 : boolean = true
let Condition2 : boolean = false

console.log(Condition1 && Condition2)
console.log(Condition1 || Condition2)

// • Test whether an item is in a array

let fruite3 : string[]=["Apple","Mango","Banana","Kiwi"]

console.log(fruite3.includes("Apple"));
console.log(fruite3.includes("Grapes"));

// • Test whether an item is not in a array

console.log(!fruite3.includes("kiwi"));
console.log(fruite3.includes("Orange"))
