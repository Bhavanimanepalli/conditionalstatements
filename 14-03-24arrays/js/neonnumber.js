let num = Number(prompt("enter number"));
let neon = num;
let sum = 0;
let square = neon * neon;
while(square>0)
{
    let r = square % 10;
    sum = sum + r;
    square = Math.floor(square / 10);
}
 if(neon == sum)
 {
    console.log(neon +" neon number");
   
    
 }
 else{
    console.log(neon +" not neon number");
 }