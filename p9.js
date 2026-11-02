"use strict";
let summ = 0;
let numm = 123;
let remm;
do {
    numm = numm % 10;
    summ = summ + numm;
    remm = Math.floor(numm / 10);
} while (numm > 0);
