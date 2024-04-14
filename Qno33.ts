// 33 .Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// methode 1
let num1 : number[]=[1,2,3,4,5,6,7,8,9]

for(let num of num1){
    if (num === 1) {
        console.log(`${num}st`);
    }else if( num === 2){
        console.log(`${num}nd`);
    }else if( num === 3){
        console.log(`${num}rd`);
    }else{
        console.log(`${num}th`);
    }
}

// methode 2
let num2 : number[]=[1,2,3,4,5,6,7,8,9]

for(let i=0 ; i<num1.length; i++){
    let suffix: string;
    if (num2[i] === 1){
        suffix = "st"
    }else if(num2[i] === 2){
        suffix = "nd";
    }else if(num2[i] === 3){
        suffix = "rd";
    }else {
        suffix = "th";
    }
console.log(`${num2[i]}${suffix}`);
}