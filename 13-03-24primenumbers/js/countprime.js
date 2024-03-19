let startNumber1 = Number(prompt("Enter the starting number"));
let endNumber1 = Number(prompt("Enter the ending number"));
let count1 = 0;
let num1 = 0;
for (let i = startNumber1; i <= endNumber1; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count1++;
    }
  }
  if (count1 === 2) {
    num1++;
  }
  count1 = 0;
}