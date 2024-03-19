let num1=Number(prompt("enter number"));
let sum1=0;
let sum2=0;
while(num1>0)
{
    let a = num1%10;
    sum1=sum1+a;
    num1=Math.floor(num1/10);
}
console.log(sum1);
num1=sum1;
while(num1>0)
{
    let a = num1%10;
    sum2=sum2+a;
    num1=Math.floor(num1/10);
}
console.log(sum2);
if(sum2==1)
{
   console.log("magic number");
}
else{
    console.log("not a magic number");
}