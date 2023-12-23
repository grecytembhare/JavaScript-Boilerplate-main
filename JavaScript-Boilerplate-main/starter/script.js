'use strict';


var greeter="hey hii" //global
// variable can be re declared
greeter ="say hello world" //reassign
//function declaration
function test (){
    var hello = "heloLo"; //local 
    console.log(hello)
}
// console.log(hello)
console.log(greeter)
//calling the fun.
test()
// ___________________________________________________________
// parameters
function test (apples, oranges){
   
    const juice =  `juice with  ${apples} apple and ${oranges} oranges`
    // console.log(juice)
    return juice;
}
//calling the fun.
const result = test(5,0)
console.log(result)

// ________________________________________________________
//hoisting(Ecmascript6  ....> version) ES6
// var name = "grecy"
// console.log(name)

// console.log(name)  //without initializing things are working hoisting (it is an issue)
// var name = "grecy"
// ________________________________________________________________

// const keyword
// const age = 30
// age = 25
// console.log("age", age)
// __________________________________________________________________

// ley keyword .....> Block scope

// console.log(time)   // it will not work in let beacuse it is block scope
let time = 4
if(time> 3){
    let hello = "heloo"
    console.log(hello)
}
// console.log(hello)   // it will not work because it is a block scope
// ____________________________________________________

//arrow fun.
// syntax
// const variabl_name = ()=>{}
/*
 if we have multiple parameter then we have to put in into the round brackets 
 but if we have onw parameter then we can avoid the round brackets
 in the bwlow e.g we have only one paremeter
   */
  const age = 30
const calAge= birthYear =>2037 - birthYear
console.log(calAge(1999))
// calculating number of year to get retirment
const yearTest = birthYear =>{
    
    const agee = 2037 - birthYear;
    const retirment = 65-age;
    return retirment;
}
console.log(yearTest(1999))

//write a program to develop BMI  calculator
//BMI = weight (kg)/height(m)
// ____________________________________________________________

let hasDriverLicense = false; //boolean 
const passTest = true;
if(passTest){
    hasDriverLicense=true; 
}
if (hasDriverLicense){
    console.log("I can drive")
}
// ________________________________________
// array

const friends = ['Tom', 'Jerry', 'Sam'] //assigning values in an array
console.log(friends)
console.log(friends[0]);
console.log(friends[1]);

// if we take input from user or if we dont know the number then we use lenght function
console.log(friends.length);

// if we use .lenght then it will count normally but if we want index of last value or number  so that we need to subtract 1
console.log(friends.length-1);

// if we want to add values to the existing array
// friends[2]="jay"
friends[3]="jay"
console.log(friends)

// push and pop
const newLenght = friends.push('Alice')
console.log("hiii",newLenght)
console.log(friends)

// unshift ...> value will add in the front of the array
friends.unshift('john');
console.log(friends)

friends.pop();
console.log(friends)



