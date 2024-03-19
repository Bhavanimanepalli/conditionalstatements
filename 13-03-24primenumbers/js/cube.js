let powerInput = Number(prompt("enter a value"));
let firstDigit = Math.trunc(powerInput / 10);
let seconDigit = powerInput % 10;
console.log(firstDigit ** seconDigit);