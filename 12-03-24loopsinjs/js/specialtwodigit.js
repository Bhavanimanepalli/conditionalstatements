let num = Number(prompt("enter number"));
let num2=num;
let num3=num;
let sum1 = 0;
while(num>0)
{
    let a = num % 10;
    sum1 = sum1 + a;
    num = Math.floor(num/10);
}
console.log(sum1);
let sum2 = 1;
while(num2>0)
{
    let a = num2 % 10;
    sum2 = sum2 * a;
    num2 = Math.floor(num2/10);
}
console.log(sum2);
console.log(sum3 = sum1 + sum2);
if(sum3===num3)
{
    console.log("it is a special digit");
}
else{
    console.log("not  a special digit");
}





