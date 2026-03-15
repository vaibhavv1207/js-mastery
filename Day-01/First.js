// // Variable Understanding

// // 1. (var)

// var a = 5;
// console.log(a);

// if (true){
//     var b = "Hello Welcome";
// }
// console.log(b);  // Here is the Main Problem that var -> Function/Globally Scoped 

// // Means a var declare anywhere can be used where you want. It get leaked .

// // Checking Redeclare , Reassign 

// // Redeclare

// var c = "Ajay";
// console.log(c); // Output -> Ajay

// var c = "Aman";
// console.log(c); // Output -> Aman 

// // Means in ("var") keywords Both Redeclare , Reassign Work 


// // 2. (let)

// let Name = "John";
// console.log(Name);


// if (true){
//     let value = 5;
// }
// console.log(value);  // Here we get an error that ("value is not defined")  

// // let -> Block Scopped so that why we get the error above 

// // Checking Redeclare , Reassign 

// // Redeclare

// let num = 5;
// console.log(num);

// let num = 6;  // We get Error that ("num") is already Declare 
// console.log(num);

// // Redeclare Doesn't  Work

// // Reassign

// let num1 = 10 ;
// console.log(num1);  // Output ->

// num1 = num1*2;
// console.log(num1);  // Output -> 20

// // Reassign will work 


// 3 (const)

const value = 20;
console.log(value);  

value = 30;
console.log(value);