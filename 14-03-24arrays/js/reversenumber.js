let number = Number(prompt("enter the number"));
console.log(number);
let reverse=0;
while(number>0)
{
    let  add = number % 10;
    reverse = reverse * 10 + add;  
    number = Math.floor(number / 10);
}
console.log("reverse");