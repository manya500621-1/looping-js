let summ:number=0;
let numm:number=123;
let remm:number;
do{
    numm=numm%10;
   summ=summ+numm;
  remm=Math.floor(numm/10);
}while(numm>0)