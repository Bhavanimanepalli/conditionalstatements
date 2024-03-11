//1..weather report using else-if
let temperature = Number(prompt("enter temperature"));
if(temperature>=30)
{
    console.log("weather is hot");
}
else if(temperature>=18 && temperature<=29)
{
    console.log("weather is neutral");
}
else{
    console.log("weather is cold");
}

//2..To check whether the given year is leap year or not 
let year = Number(prompt("Enter year"));
if((year % 4 == 0)&&(year % 100 != 0) || (year % 400 == 0))
{
    console.log("it is a leap year");
} 
else
{
  console.log("it is not a leap year");
}

//to check whether the given charcter is vowel or not
let char = 'Z';
if (char === 'a' || char  === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char  === 'E' || char === 'I' || char === 'O' || char === 'U')

{
    console.log("vowel");
}
else{
    console.log("consonent");
}

//checking type of triangle 
let side1 = Number(prompt("enter side1"));
let side2 = Number(prompt("enter side2"));
let side3 = Number(prompt("enter side3"));
if(side1 === side2 && side1 === side3)
{
    console.log("equilateral triangle");
}
else if(side1 === side3 && side1 != side2)
{
    console.log("isosceles triangle"); 
}
else if(side1 != side2 && side1 != side3)
{
    console.log("scalene triangle"); 
}
else{
    console.log("not a triangle");    
}

//checking weekdays
let day = "3";
switch(day){
    case day = "1":
        console.log("monday");
        break;
    case day = "2":
        console.log("tuesday");
        break;
    case day = "3":
        console.log("wednesday");
        break;
    case day = "4":
        console.log("thursday");
        break;
    case day = "5":
        console.log("friday");
        break;
    case day = "6":
        console.log("saturday");
        break;
    case day = "7":
        console.log("saturday");
        break;
    default:
        console.log("it is not a day");
}

//checking weekmonths
     let month = Number(prompt("enter month"));
     month===1 ? console.log("january") : month===2 ? console.log("february") : month===3 ? console.log("march") : month===4 ? console.log("april") : month===5 ? console.log("may") : month===6 ? console.log("june") : month===7 ? console.log("july") : month===8 ? console.log("august") : month===9 ? console.log("september") : month===10 ? console.log("october") : month===11 ? console.log("november") : month===12 ? console.log("december") : console.log("not a month");   

//checking the given number is prime or not
let x=Number(prompt("Enter a number"))
let i=2
++i;
if(x%1===0 && x%x===0 && x%i!==0) {
    console.log("prime number")
} else{
    console.log("not a prime number")
}