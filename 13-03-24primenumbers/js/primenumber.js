//to check whether the given number is prime or not
var x = prompt(Number("enter a number"));
var count=0;
if(x>1)
{
    for(i=1;i<=5;i++)
    {
      if(x%i==0)
      {
        count++
      }
    }
    if(count==2)
    {
        console.log("it is prime number");
    }
    else{
        console.log("it is not a prime number");
    }
}
else
{
console.log("it is not a prime number");
}






