let num = 121;
let temp = num;
let reverse = 0;

while (temp > 0) {
    let remainder = temp % 10;
    reverse = (reverse * 10) + remainder;
    temp = Math.floor(temp / 10);
}

if (num === reverse) {
    console.log(num + " is a Palindrome");
} else {
    console.log(num + " is Not a Palindrome");
}