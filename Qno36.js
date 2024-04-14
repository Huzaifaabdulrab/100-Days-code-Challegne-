"use strict";
//  36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(`I am making a ${size} T-shirt with the message: "${message}".`);
}
make_shirt("medium", "Hello world");
