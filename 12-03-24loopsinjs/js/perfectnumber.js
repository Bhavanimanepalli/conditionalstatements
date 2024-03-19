//perfect number
let num = Number(prompt("Enter the number"));
output = 0;
for(i=0;i<num;i++)
{
    if(num%i === 0)
    {
        output+=i
    }

}
if(num == output)
{
    console.log("it is a perfect number");
}
else{
    console.log("it is not a perfect number");
}

//wajp to print the biggest among two numbers
=