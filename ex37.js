"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", message = "I love Programming") {
    return console.log(`Size: ${size}, Message: '${message}'`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Hello, Digitalsima!");
