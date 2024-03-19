//temperature values using switch
let temperature = Number(prompt("Enter the temperature outside"));
switch(true)
{
    case temperature <= 20:
      console.log("cold weather");
      break;
    case  temperature >= 21 && temperature <= 30:
        console.log("moderate weather");
        break;
    case temperature >= 31 && temperature <= 40:
        console.log("hot weather");
        break;
    default:
        console.log(" very hot weather");
}

//alarm for a daily days using switch
let day ="wednesday";
switch(day)
{
    case day="monday":
      console.log("7am");
        break;
    case day="tuesday":
        console.log("5am");
        break;
    case day="wednesday":
        console.log("6am");
        break;
    case day="thursday":
        console.log("8am");
        break;
    case day="friday":
        console.log("8am");
        break;  
    case day="saturday":
        console.log("8am");
        break;  
    case day="sunday":
        console.log("9am");
        break;    
    default:
        console.log("6am");
}