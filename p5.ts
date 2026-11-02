let count:number=0;
let num:number=123;
let rem:number;
while(num>0){
   num=Math.floor(num/10);
   count++;
}
console.log(`digits are:${count}`);