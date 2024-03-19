//2. Write a javascript program to find the user entered number is strong number or not
let num1 = Number(prompt("Enter a number to find the user entered number is strong number or not"));
let strong = num1;
let sum = 0;
while (num1 != 0) {
  let d = num1 % 10;
  let fact = 1;
  for (let i = 1; i <= d; i++) {
    fact = fact * i;
  }
  sum = sum + fact;
  num1 = Math.floor(num1 / 10);
}
if (sum === strong) {
  console.log(`${strong} is strong number`);
} else {
  console.log(`${strong} is not a strong number`);
}