////armstrong number without using length function
let num = Number(prompt("enter value"));
let sum=0;
let temp=num;
while(num>0)
{
    let a = num % 10;
    sum = sum + a**3;
    num = Math.floor(num / 10);
}
console.log(sum);
if(sum===temp)
{
    console.log("The given number is an armstrong number ");
}
else{
    console.log("The given number is not an armstrong number ");
}

//armstrong number using length function
let num1=Number(prompt("enter value"));
let sum1=0;
let n2=num1;
let n3=num1;
let length=0;
while(num1>0)
{
    length++;
    num1=Math.floor(num1/10);
}

while(n2>0)
{
    let a = n2%10;
    sum1=sum1+a**length;
    n2=Math.floor(n2/10);
}
if(sum1===n3)
{
    console.log("The given number is an armstrong number");
}
else{
    console.log("The given number is not an armstrong number");
}