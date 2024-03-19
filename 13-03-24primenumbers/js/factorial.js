//4.the factorial of user defined number
let num = Number(prompt("enter the number"));
let fact = 1;
for (let i = num; i >= 1; i--) 
{
  fact = fact * i;
}
console.log(fact);