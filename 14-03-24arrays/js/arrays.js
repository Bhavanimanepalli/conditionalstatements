//arrays
//1.constrctor array
let student = new Array("Bhanu","ramya","raj");
console.log(student); 
//ex-2
let friends = new Array("Bhanu","mouni","shiva");
console.log(friends);                                   

//2.literal way
let students = ["sneha","bobby","raji"];
console.log(students[0]);
console.log(students[1]);  
console.log(student[2]);

//array methods
//1.push method
let dosth = new Array("jaan","janu");
dosth.push("jaanu");
console.log(dosth);

//ex-2
let priends = new Array("bob");
priends.push("bobbby");
console.log(priends);

//2.pop method
let employes = ["rose","roselyn"];
employes.pop();
employes.pop();
console.log(employes);

//3.unshift method
let stud = ["bhavana","bhavani"];
stud.unshift("bhargavi");
console.log(stud);

//4.shiftmethod
let monkey = ["monkeys","donkey"];
monkey.shift();
console.log(monkey);

//5.slice method
//1.start index
let manager = ["rupa","sri"];
console.log(manager.slice(1));
console.log(manager);

//2.start index,stop index
let pa = ["shivani","bharat","bharathi"];
console.log(pa.slice(1,3));
console.log(pa.slice(pa));

//6.splice method
//1.splice(startindex)-remove
let employ = ["shiva","siri"];
(employ.splice(1));
console.log(employ);

//2.splice(startIndex,deleteCount)
let ab = ["ramya","ram","raj"];
console.log(ab.splice(1,1));
console.log(ab);
(ab.splice(1,2));
console.log(ab);


//3. splice(startIndex,deleteCount,element0)
let ca = ["shekar","suresh","suryaa"];
(ca.splice(2,0,"saranya"));
console.log(ca);

//
let de = ["srinu","ravi","gagan"];
(de.splice(1,0,"deva"))
console.log(de);

//4.splice(startIndex,deleteCount,element0,..elementn)
let ac = ["aditya","kanna","sandy"];
ac.splice(2,1,"raju","devi");
console.log(ac);