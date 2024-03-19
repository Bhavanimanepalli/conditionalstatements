let n=Number(prompt("enter value"));
let sum1=0;
let n2=n;
let n3=n;
let length1=0;
while(n>0)
{
    length1++;
    n=Math.floor(n/10);
}
for(let i=0;n2>0;i++)
{
    let rem = n2%10;
    sum1=sum1+rem**(length1-i);
    n2=Math.floor(n2/10);
}
if(sum1===n3)
{
    console.log("The given number is disarium");
}
else{
    console.log("The given number is not a disarium");
}