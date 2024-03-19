// Write the Javascript program to find nth prime number
let n = Number(prompt("enter max  value"));
let output = Number(prompt("enter  value"));

let sequence = 0;
for (let i1 = 1; i1 <= n; i1++) {
  let count1 = 0;
  for (let j1 = 1; j1 <= i; j1++) {
    if (i1 % j1 === 0) {
      count1++;
    }
  }
  if (count1 === 2) {
    sequence++;
  }
  if (output === sequence) {
    console.log(i1);
    break;
  }
}