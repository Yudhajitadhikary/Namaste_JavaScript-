
// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// }
// // var getName=()=>{//it behaves like a variable 
// //     console.log("Namaste JavaScript");
// // }
// console.log(getName())
// getName();
// console.log(x);
// var x=1;
// a();
// b();
// console.log(x)
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }
// function a(){//JS will first try to find out if we are having b in it's local space (Execution context) if not it will try to find the same from Global Execution Context
//     // console.log(b);
//     var b=10;// it will be 10
//     c();//here also it will give 10 as output
//     function c(){
//         console.log(b)
//     }
// }
// // var b=10;
// a();
// console.log(b)//Reference not defined
// console.log(b);//in global scope
// console.log(a)//cannot access a before initialization
// let a=10;// is added in Script allocated memory in different memory space we cannot access those before assigning value to it (Temporail Dead zone)
// var b=100;
// var a=100
// let b=100//Script
// {
//     var a=10;//global scope
//     let b=20;//blocked scope (Not access outside the block)
//     const c= 30;//blocked scope (Not access outside the block)
//     console.log(a);//10
//     console.log(b)//20(Block)
//     console.log(c)

// }
// console.log(a);//10 (as it's pointing to same memory)
// console.log(b);//100(Script Shadow)same for const
// // console.log(b);//error
// // console.log(c);//error

// const a=100
// {
//     const a= 20;
//     {
//         const a=30;
//         console.log(a);
//     }
// }
// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var z = x();
// console.log(z);//7 (Though the function x is not there in Execution context, but since y is a function , so y still remembers it's lexical scope,when a function is returned not only the code is returned but the function is returned with a closure (Funtion with it's lexical scope))
// z();
// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b)
//         }
//         y();
//     }
//     x();
// }
// z();
// function x(){
//     // var i=1;
//     // setTimeout(
//     //     function(){
//     //         console.log(i);
//     //         },3000);
//     for(let i=1;i<=5;i++){//let has blocked scope
//         setTimeout(function(){
//             console.log(i);//always prints 6 for var due to closure, environment of all i are same 

//         },i*1000)
//     }
//     for(var i=1;i<=5;i++){
//        function close(i){//using Closure
//            setTimeout(function (){
//                console.log(i);
//                 },i*1000);
//        }
//        close(i); 
//     }
    
//             console.log('Namaste Javascript')
// }
// x();
// function outer(){
//     var a=10; //let will also work the same way due to closure
//     function inner(){
//         console.log(a);//10
//     }
//     let a=10;
//     return inner;
// }
// let a=100;

// outer()();//10

// function counter(){
//     var count=0;
// return function incrementCounter(){
//     count++;
//     console.log(count)

// }
// }
// // console.log(count);//Reference Error
// //to access count variable 
// var counter1=counter()
// counter1()
// function Counter(){//constructor function
//     var count=0;
//     this.incrementCounter=function (){
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter=function (){
//         count--;
//         console.log(count)
//     }
// }
// var counter1=new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();
// a();
// b();
//function Statement
// function a(){
//     console.log("a called")
// }
//function Expression
// var b = function (params){
//     console.log(params)
// }
//function Declaration aka function Statement

//Anonymous Function
// function () {

// }
// function xyz(){

// }
// Named function expression
// var b= function xyz(){
//     console.log('b called')
// }
//Parameters & Arguments
//First Class Function
// b(xyz); //the ability to use function as values are know as firat class functions

//What is a Callback function in JavaScript

// setTimeout(function (){
//     console.log('Timer')
// }, 5000);
// function x(y){
// console.log("x")
// y()
// }
// x(function y(){// y function is a callback function x can call it anytime it wants
// console.log('y')
// })
//In the above case call stack will be having Global , then x and then y and once those are executed the call stack will be empty and then magically the setTimeout function will be pushed ib call stack , after 5 secs.

// let count =0;
// document.getElementById("clickme").addEventListener("click", function xyz(){
// console.log('Button Clicked',++count);
// })// Not recommended
// function attachEventListeners(){
// let count =0;
// document.getElementById("clickme").addEventListener("click", function xyz(){
// console.log('Button Clicked',++count);
// });
// }
// attachEventListeners();
// console.log("Start");
// setTimeout(function cb(){
//     console.log("Callback")
//     },5000);

// console.log("End");
// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("While expires");

// console.log("Start")
// function cb(){
// console.log("Callback")//de-prioritizing function
// }
// setTimeout(function cb(){
//     console.log("Callback")
// },0);
// console.log("End")

// function x(){//callback function
//     console.log("Namaste");
// }
// function y(x){//higher order function
//     x();
// }
// const radius=[3,1,2,4];
// const calculateArea= function (radius){
// const output=[];
// for(i=0;i<radius.length;i++){
//   output.push(Math.Pi * radius[i]*radius[i])  
// }
// return output;
// };
// console.log(calculateArea(radius));

// const radius=[2,3,4,5];

// const area=function (radius){
//     return Math.PI *radius*radius
// }
// const circumference=function (radius) {
//     return 2* Math.PI * radius
// }
// const diameter=function (radius){
//     return 2* radius
// }
// Array.prototype.calculate=function (logic){
//     const output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// };
// console.log(radius.calculate(area))

// const arr=[5,1,3,2,6];

// function findSum (arr){
//     let sum=0;
//     for (let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr))
// const output=arr.reduce(function (acc,curr){
// acc=acc+curr;
// return acc;
// },0);
// const output1=arr.reduce(function (max,curr){
//     if(curr>max){
//         max=curr
//     }
//     return max;
// },0)
// console.log(output1)
// function binary(x){
//     return x.toString(2);
// }
// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3
// }
// // const output=arr.map(binary);
// const output=arr.map((x)=>x.toString(2));
// console.log(output)
// filter odd values 
// function isOdd(x){
//     return x%2;
// }
// const output=arr.filter(isOdd);

const users=[
    {firstName:'Yudhajit',lastName:'Adhikary',age:26},
    {firstName:'Donald',lastName:'Trump',age:75},
    {firstName:'Elon',lastName:'Musk',age:50},
    {firstName:'Deepika',lastName:'Padukone',age:26}
]
// const output= users.map(x=>x.firstName +" "+x.lastName);
// const output=users.reduce(function(acc,curr){
// if(acc[curr.age]){
// acc[curr.age]=++acc[curr.age]
// }
// else{
//     acc[curr.age]=1
// }
// return acc;
// },{})
const output=
users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output)
//{26:2,75:1,50:1}











