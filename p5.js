"use strict";
let count = 0;
let num = 123;
let rem;
while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log(`digits are:${count}`);
