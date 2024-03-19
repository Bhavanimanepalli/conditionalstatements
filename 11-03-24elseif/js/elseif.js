//weather report using else if
let temperature = Number(prompt("Enter the temperature outside"));
if(temperature<=20)
{
    console.log("cold weather");
}
else if(temperature>=21 && temperature<=30)
{
    console.log("moderate weather");
}
else if(temperature>=31 && temperature<=40)
{
    console.log("hot weather");
}
else{
    console.log("very hot weather");
}

//grade points program using else if
let marks = Number(prompt("Enter marks"));
if(marks<=40)
{
    console.log("D grade");
}
else if(marks>=41 && marks<=55)
{
    console.log("C grade");
}
else if(marks>=56 && marks<=70)
{
    console.log("B grade");
}
else if(marks>=71 && marks<=84)
{
    console.log("A grade");
}
else 
{
    console.log("A+ grade");
}

//bigger number in 3 digits using else-if
let x = 1;
let y = 2;
let z = 3;
if (x>y && x>z)
{
    console.log("x is bigger");
}
else if(y>x && y>z)
{
    console.log("y is bigger");
}
else 
{
    console.log("z is bigger");
}

//ternary operator for bigger number in 3 digits
x>y && x>z ?  console.log("x is bigger"):
y>x && y>z ?  console.log("y is bigger"):
console.log("z is bigger");


//smaller number in number in 3 digits using else-if
let a = 1;
let b = 2;
let  c = 3;
if (a<b && a<c)
{
    console.log("a is smaller");
}
else if(b<a && b<c)
{
    console.log("b is smaller");
}
else 
{
    console.log("c is smaller");
}

//ternary operator for smaller number in 3 digits
a<b&&a<c ?  console.log("a is smaller") 
: b<a && b<c ? console.log("b is smaller")
: console.log("c is smaller");

//switch statement example-1
let day = "funday";
switch(true)
{
    case 1:
        console.log("It is a monday");
        break;
    case 2:
        console.log("It is a tuesday");
        break;
    case 3:
        console.log("It is a wednesday"); 
        break;
    case 4:
        console.log("It is a thursday");
        break; 
    case 5:
        console.log("It is a  friday");
        break;
    case 6:
        console.log("It is a saturday");
        break;
    case 7:
        console.log("It is a sunday");
        break;
    default:
        console.log("It is not a day");
}


