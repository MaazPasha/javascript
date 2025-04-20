console.log(typeof 123);             // number
console.log(typeof 'Hello');         // string
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object (legacy bug)
console.log(typeof {});              // object
console.log(typeof []);              // object
console.log(typeof function() {});   // function
console.log(typeof Symbol('x'));     // symbol
console.log(typeof 10n);             // bigint
console.log(typeof NaN);             // number
console.log(typeof new Object()) // "object"