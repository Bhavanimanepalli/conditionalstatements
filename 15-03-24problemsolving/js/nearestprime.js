// Write a javascript program to find the nearest prime for user defined number
let n4 = Number(prompt("enter a value"));
for (let i = 1; i < n4; i++) {
  let p = n4 + i;
  let count = 0;
   for (let j = 1; j <= p; j++) {
    if (p % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(p);
    break;
  }
  let q = n4 - i;
  count = 0;
  for (let k = 1; k <= q; k++) {
    if (q % k === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(q);
    break;
  }
}

