"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Medium", message = "I love TypeScript") {
    console.log(`I am making a ${size} size T-Shirt , with the message ${message}`);
}
make_shirt();
make_shirt("Large");
make_shirt("Small", "Hello world");
