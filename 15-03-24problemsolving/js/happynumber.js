//Write a javascript program to find the given number is happy number or not.
let num1=Number(prompt("enter value"));
let sum1=0;
let sum2=0;
let sum3=0;
while(num1>0)
{
    let a=num1 % 10;
    sum1=sum1+a**2;
    num1=Math.floor(num1/10);
}
console.log(sum1);
num1=sum1;
while(num1>0)
{
    let a=num1 % 10;
    sum2=sum2+a**2;
    num1=Math.floor(num1/10);
}
console.log(sum2);
 num1=sum2;
 while(num1>0)
 {
     let a=num1%10;
     sum3=sum3+a**2;
     num1=Math.floor(num1/10);
 }
 console.log(sum3);
 if(sum3===1)
 {
     console.log("happy number");
 }
 else
 {
     console.log("not a happy number");
 }