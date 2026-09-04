//! words vs keywords 
//^ js mein aise words jinse kuch ho sakha hai wo sare words js ke keywords hai 

//! words : shyam, tarun, lolo names are words 
 //^ keywords : var, let, const, if, for, while, do-while they are keywords.

//! var, let, const --->  line-bt-line comparison.

//? declaration and initilization

//^ VAR : 
// var a = 12;
//? jb bhi var se bane ye apne app ko window me add karta hai
//? function scoped hota hai
//? app firse declare kr sakte ho same name se and error nhi aayega 


// var a;             //? declare karna 
// a = 12;            //? ye ek bug h

// var  a = 5;        //? re-declaration and initilization
// var a = 12; 

//  function abc(){
//     if(true){
// var a = 5;              //? this a functional scope
//     }
//  }

//^ let :

// let a;

// let a = 5;          
// let a = 12;              //?  SyntaxError: Identifier 'a' has already been declared

// let dulha = "lab";       
// let dilhan = "lady";

//^ const :

// const dulha = "lab";
// const dilhan = "lady";
// const discount = 12;    //? ye kabhi nhi badhlegi 
// const a = 12;


//! scope (global , block , functional)

// var a = 4;       //?  this is a gobal jaha pe open source hoga vaha  

// {
//   let a = 12;         //? this is a block jaha bhi curley braket lage ge vaha access  kr sakhye 
// }

//  function abc(){
//     if(true){
// var a = 5;              //? this a functional 
//     }
//  }



//! Reassignment , Redeclaration 

// var a = 32;
// a = 23;                  //? reassign
                      //? redeclaration is possible to var 
// var a = 233;

// let a = 32;
// a = 33;           //? redeclaration is not possible to let

// let a = 37;


//! Temporal Dead Zone : utna area jithna mein js ko pta to hai ki variable exist kr ta hai pr vo apko value ni de skahta 

// var me tdz nhi hota 
// let me tdz hota hai
// const me tdz hota hai


// console.log(a) 
// 
// 
//             //? undefined
// var a = 12;

// console.log(a);      //? Reference a is not define


// console.log(a); 
// let a = 12;                //?  Uncaught ReferenceError: Cannot access 'a' before initialization



//? var a = undefined;
//! Hoisting impact per type :
//!   hoisting --> ek variable ko jb js me banate hai to vo variable
//!       do hissso me tooth jata hai and ushka declare part uper chala jata hai
//!      and uska initialization part neeche  chala jata hai 

// console.log(a);

// var a = 12;

// var a = undefined;
// a = 12;

// var --> hoist --> undefined 
// let  --> hoist --> no values then  x y z
// const --> hoist --> no values then  x y z


// console.log(a);
// let a = 12;           //? Referenceerror : Cannot access 'a' before initialization

// console.log(a);
// var a = undefined;         //? ye wala part sun se upeer chala jata 
// a = 12;                 //? ye wala part niche chal jata hai 


// console.log(a);
// const a = 12;          //? reference error : Cannot access 'a' before initialization

// -----------------------------------------------------------------------------------------------------------------------------------------------

//!    QQQQ

// console.log(nm);           //? undefined 
// var nm = "tarun";

//!    QQQQ

// console.log(age);           //? Cannot access 'a' before initialization
// let age = 23;

//!    QQQQ
// var x = 1;      // global
// {
//     var x = 2;    // global
// }
// console.log(x);      // 2

//!    QQQQ
// let a = 10;      // block / global
// {
//     let a = 20;
//     console.log("Inside:", a);    
// }
// console.log("Outside:", a);      

//!     QQQQ

// const person = {name: "Tarun"};
// console.log(person);
// person.name = "Panchal";               // allowed
// console.log(person);
// person = {};                      // not allowed

// ------------------------------------------------------------------------------------------------------------------------------------------------------

//! Practice  Questions :

// var a = 10;      // 10
// console.log(a);

// console.log(a);
// var a = 10;          // undefined


// var a; 
// a = 10;
// console.log(a);     // 10

// var a = 10;
// var a = 20;
// console.log(a);    //20

// var a = 10;
// if (true){
//     var a = 20;
// }
// console.log(a);      // 20

// a= 5;
// let a;      // ReferenceError: Cannot access 'a' before initializatio
// a = 10;

// let a;
// let a = 10;    // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// let a = 10;
// let a = 20;
// console.log(a);     // SyntaxError: Identifier 'a' has already been declared
      

// let a = 10;              
// if (true) {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);            // 20 , 10



// console.log(a);    //  ReferenceError: Cannot access 'a' before initialization
// let a = 10;


// const a = 10;
// a = 20;              // TypeError: Assignment to constant variable.
// console.log(a);

// const a;                  
// a = 10;             //   SyntaxError: Identifier 'a' has already been declared

// const user = {
//     name: "Rahul"
// };

// user.name = "Amit";

// console.log(user.name);    // Amit

// if (true) {
//     var a = 10;
// }
// console.log(a);     // 10

// if (true){
//     let a = 10;
// }
// console.log(a);         //ReferenceError

// var a = 10;
// var a = 20;
// console.log(a);    //20

// let x = 10;
// let x = 20;    // syntax error

// let age = 20;
// age = 21;
// console.log(age);    // 21

// const age = 20;
// age = 21;       // type error 

// const user = {
//     name: "John"
// };

// user.name = "Alice";

// console.log(user.name);      // Alice 

//------------------------------------------------------------------------------------------------------------------------------------------

//! Data types : data ka type 
//^ primitive :--- aisi sari values sari copy kr ne pr tumhe ek real copy milegi
// string, number, boolean, null, undefined, symbol, bigint
//^ reference :--- inko copy karne par real copy nhi milegi but apko reference milega parent ka
// arrays , objects, functions
//  []        {}       ()

// '' single quotes
// ""   double quotes
// ``  backticks

//? string , number,    boolean,                null,                      undefined, 
 //  ""      7,34,44   true and false   koi bhi value nhi de   ek variable banaya or ushko value nhi de jo value by default mile gi vi hai undefined  
//? symbol,                                            
// unique immutable value crete kr ta hai                
// let u1 = Symbol("uid");
// let obj ={
//     uid: 1,
//     name: "Tarun",
//     age: 12,
//     email: "tarun@gmail.com",
// }
// let u1 = Symbol("uid");
// obj[u1] = "001";

 //? bigint
// let a =  9007199254740991n; 

//? arrays ,             
// let a = [1,2,3];
// let b = a;

// b.pop();

//? objects, functions
// let a = {
//     name: "harshita",
// }
// let b = a;
// b.name = "harshita";

//! Dynamic typing --> js main static typing nahi hai and yaha par hai dynamic typing jishka mtlb hai app data ko change kr sakhte ho ku ki yaha par dynmic data types hai

// let a = 12;
// a = true;
// a = "tarun";
// a = [];
// a = null;
// a = undefined;

// typeof quicks (e.g., typeof null === object);

//! type coercion (== vs ====)
// type coercion --> concept jishme ek type automatically convert ho jayega

// "2" + 1   // 21        add/concate
// 4 + "1"  //3           sub

//! truthy and falsy
// 0 "" false  null undefined NaN document.all         // all false

// true + false ----> 1 
// null + 1 ---> 1
// 5 + "5"  ----> '55'
// !! undefined ----> false


// -----------------------------------------------------------------------


//! Operators
//      +, -, *, /, % 
//  =, ==, ==
//  < , > , <= , >= , ! , != , !== , !!
//   -->    && , || , !
//   -->     ? ,:


//! Arithmatic :
//  +, -, *, /, % , **

//? 2 + 3 = 5     ,     "tarun" + " panchal" = "tarunpanchal"     ---> concatination
//? 12 - 2 = 10
//?  12/6 = 2
//?  4*4 = 16
//?  12 % 2 = 0
//? 2 ** 3 = 8

//! Comparison :
// =           value dal na hi equal ka mtlb hai 
// ==       12 == 13 // false     ,    12 == "12" // true  //  not strict
// ===      12 === "12" // false      strict    
// !=       12 != 13 // true     not strict
// !==      12 !== "12" //true       strict
// >=       12 >= 12   // true
// <=        22<=22    // true
// >       12 > 11    // true 
// <          22 < 21  // true 

//! Assignment :
// =              let a = 12;
// +=              a += 3;
// -+              a -= 3;
// *=              a *= 2;
// /=             a /= 2;
// %=             a %= 3;

//! Logical :
//  true && true -> true
//  true && false -> false 
//  false && true -> false
//  false && false -> false  

// 11>12 || 12>10 -> true
// AND 
// OR 

// !12 -> false     , !!12 -> true 
// NOT

//! Unary :
// + , - , ! , typeof , ++ , --

//! Ternary :
//  ? , :
// condition ? true hui ka code : false hui ka code 
// 12 > 13 ? console.log("true") : console.log("false");    --- > false 

//! Control Flow :
//? if else else-if 

// if(true){
// var a = 12;
// console.log(a);
// }
// else{
// let a;
// console.log(a);
// }
// console.log(a);

// if(12>13){
//     var a = 12;
// }
// else if(12>14){
// let a = 12;
// }
// else if(12>15){
// const a = 12;
// }
// console.log(a)

//? switch case 

// switch(1){
//     case 1:
//        console.log("knsdkjn");
//        break;
//         case 2:
//             console.log("oieuroijioj")
//             break;
//             case 3:
//                 break;
//                 default:                   
// }


//? early return pattern 

// function getVal(val){
//     if(val<25) return "D";
//    else if(val<50) return "C";
//    else if(val<75) return "B";
//    else return "A";
// }
// console.log(getVal(76));


//! QQQQQQ 

// function getGrade(score){
//     if(score >= 90 && score <= 100){
//         return "A";
//     }
//     else if(score >= 80 && score <= 89){
//         return "B";
//     }
//     else if(score >= 70 && score <= 79){
//         return "C";
//     }
//     else if(score >= 60 && score <= 69){
//         return "D";
//     }
//     else if(score >= 33 && score <= 59){
//         return "E";
//     }
//     else if(score >= 0 && score <= 32){
//         return "Fail";
//     }
//     else {
//         return "X Invail marks";
//     }
// }

// console.log(getGrade(67));

//! QQQQ 

// function getGrade(score){
//         if(score >= 90 && score <= 100)    return "A";
//          if(score >= 80 && score <= 89)     return "B";
//          if(score >= 70 && score <= 79)     return "C";
//          if(score >= 60 && score <= 59)     return "D";
//          if(score >= 50 && score <= 39)     return "E";
//          if(score >= 0 && score <= 32)      return "Fail";
//          return "Invaild marks";
//         }
// console.log(getGrade(54));

//! Rock paper scissors logic

// function rps(user,computer){
//     if(user === computer) return "draw";

// if(user === "rock" && computer === "scissor") return "user";
// if(user === "scissor" && computer === "paper") return "user";
// if(user === "paper" && computer === "rock") return "user";

// return "computer";
// }

// console.log(rps("scissor","rock"));

//! Loops :

//? computer me kcuh bhi repeat kr ne ko loop kh te hai
// 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

//^ for : kaha se jana hai --> kaha tk jana hai -- > kaise  jana hai
// 1 - 50 
// for(start; end; change){

// }

// for(let i = 1; i<101; i++){
// console.log(i);
// }

//^ while : kaha se jana hai --> kb rukna hai ---> kaise jana ha 
// 1 - hello
// hello na aajaye - while

// start
//  while(end){
//    code
// change
//}

// let i = 1;
// while( i<101){
// console.log(i);
// }

//^ do-while : do ka mtlb h kro --> or while ka mtlb khatam krke do 
// let i = 12;
// do{
//     console.log(i);
//     i++;
// }
// while(i<2);

//^ break : break lga to jo no diya console me vaha tk print hoga 
// for(let i = 1; i<101; i++){
// console.log(i);
// if (i === 31){
//     break;
// }

// }

//^ continue : continue diya jo number console me diya vo prnt nhi hoga or sub print hoga 
// for(let i = 1; i<101; i++){

// if (i === 31){
//     continue;
// }
// console.log(i);
// }


//! QQQQQQ
//^
//  for(let i = 1; i<11; i++){
//     console.log(i);
// }

//^ 
// let i = 10;
// while(i>0){
//     console.log(i);
//   i--;
// }

//^
// for(i = 1; i<21; i++){
//     if( i % 2 === 0){
//     console.log(i);
// }
// }

//^
// let i = 1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);     
//     }
//     i++;
// }

//^
// for(let i = 1; i<11; i++){
// console.log(`5 * ${i} = ${5 * i}`);

// }

//^
// let sum = 0;
// for(let i = 1; i<101; i++){
//     sum = sum + i;
   
// }
//  console.log(sum);

//^
// for(i = 1; i<51; i++){
//     if( i % 3 === 0){
//     console.log(i);
// }
// }

//^
// let val = prompt("given a number");
// for(i=1; i<=val; i++){
//     if(i%2 === 0){
//     console.log(`${i} is even `);
// }
// else{
// console.log(`${i} is odd`);

// }
// }

//^
// for(let i =1; i<101; i++){
//     if(i%3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }



//^
// for (let i = 1; i<101; i++){
//     console.log(i);

//     if(i%7 === 0){
//         break;
//     }
    
// }

//^ 
// for (let i = 1; i<21; i++){
//     if (i%3 === 0) continue;
//     console.log(i);
// }

//^
// let count = 0;
// for(let i = 1; i<101; i++){
//     if (i%2 === 1){
//         count++;
//         console.log(i);
        
//     }
//     if(count === 5) break;
// }

//^

// i am complete begginer in js and i prefer english give me sum question to solve  arround  for loops 
// 10 question which are altimate for begginer friendly

// i solve first one tell me abount the second set
// solve ho gaye mujh or question do 

//^
//! what is function ?

//! function declration / statement
// function tarun (){
// console.log("Happy New Year");
// }
// tarun();

//! function expression
// let trn = function(){
//     console.log("Hii Hii Hii Hii Hii Hii Hii");
// }
// trn();

//! use case 
// function dance(){
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// console.log("dance");
// }
// dance();
// dance();

//! fat arrow function 
// let trn = ()=>{
// console.log("HY hy hy hy hy hy")
// }
// trn();


//! parameter
// function print(v1){
//     console.log(`${v1} naach raha hai`);
// }
// print("ghoda");
// print("kutta");
// print("sher");
// print("horse");

//! arguments : jb arrgument jithne hai uthne hi parameter bna ne padege ager hume is se bachna hai to  hum rest ka use krte hai ager hun ... functioon ke parameter me lagr to vo rest operator hai 
// function add(v1,v2){
//     console.log(v1 + v2)
// }
// add(1,2);
// add(11,22);
// add(111,222);

//! default
// function trn(v1,v2){
//     console.log(v1+v2);
// }
// trn();                  // NaN

//! Rest 
// function abc(a, b, c, ...val){
//     console.log(a, b, c, val);
// }
// abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//! return : return mtlb jaha se ayaa hai vahi dal duge and early return 
// function abc(){
//     return 12;
// }
// let val = abc();
// console.log(val);

//! first class function --> function ko value ski trah treat kr te hai
// function abc(val){
// val();
// }
// abc(function () {
// console.log("hay");
// });

//! Higher order function vo function hote hai jo retuen kare function ya fir accept kre ek fnc apne parameter mein
// function abc(val){
// return function(){
// console.log("heyhay");
// }
// }
// abc()();

//! pure  : ek aise fnc jo bar ki value ko na badhle 
// let a = 12;
// function abc(){
// console.log("hehehheh");
// }
// abc();

//! impure : aise function jo bar ki value ko badal de vo impure fnc 

// function huii(){
//     a++;
// }

//! closures --> ek fnc jo return kre ek or fnc aur return hone wala fnc use krega parent fnc ka koi variable ka isthmal krega
// function abc(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

//! lexical scope 
// function abc(){
//     let a = 12;
//     function efg(){
//         let b = 13;
//         function hij(){
//             let c = 15;
//         }
//     }
// }

//! IIFE 
// (function(){
//     console.log("ubuybikbkubiub")
// })();

//! hoisting
// abc();
// function abc(){
//     console.log("ubuybikbkubiub")
// }

//! declation and expression 

// abc();

// let ahbjnh = function abc(){
//     console.log("ubuybikbkubiub")
// }

//! QQQQQQQQQQQ
//^
// abc();
// let afgwr=function abc(){

// }

//^ 
// abc();
// function abc(){
//     console.log("hello")
// }

//^
// let abc = (a, b)=>{
//     return a * b;
// };

//^
// function abc(name){
//     console.log(name);
// }
// abc("tarun");

//^ 
// function abc(a, b, c,){
// console.log(a, b, c)
// }
// abc(1, 3);

//! String : string is a sequrnce of character used to represent txt
// let str = "Tarun panchal";
// let str2 = 'tarun';

// let str = "123";
// console.log(str);


// let str = "Tarun panchal";
// console.log(str[8]);              // length

//! template 
// let abc = `THis is a special string ${1 + 2 + 3}`;
// console.log( abc)


// let abc = {
//     item: "pen",
//     cost: "13",
// }
// let output = `the cost of pen ${abc.item} is ${abc.cost} rupess`;
// console.log(output);
// console.log("the cost of pen", abc.item, "is",abc.cost,"rupees");


// console.log("Tarun \n Panchal");

//! length
// let str = ("Tarun \t Panchal");
// console.log(str.length);

//! mrthod of string
//!
// let str = "jenfkjnskgmlkemwgsfemsfmenjnjgjw";
// console.log(str.toUpperCase());

//!
// let str = "jenfkjnskgmlkemwgsfemsfmenjnjgjw";
// console.log(str.toLowerCase());


//!
// let str = "jenfkjnskgmlkemwgsfemsfmenjnjgjw";
// console.log(str.toUpperCase());
// console.log(str);


//!
// let str = "      jenfkjnskgmlkemwgsfemsfmenjnjgjw    ";
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.trim());



//! slice
// let str = "123456789";
// console.log(str.slice(1))

//! concatination
// let str1 = "apna";
// let str2 = "tu"
// let res = str1.concat(str2);
// console.log(res);

// let str1 = "apna";
// let str2 = "tu"
// let res = str1 + str2;
// console.log(res);

//! replace 
// let str = "hello";
// console.log(str.replace("l","y"))

// console.log(str.replaceAll("l","y"))

//! charAt
// let str = "tarun";
// console.log(str.charAt(2));
 
//!charCodeAt
// let str = "tarun";
// console.log(str.charCodeAt(2));



//! concat : It is used to merge two or more string, and returns a new string.
// let str = "JS";
// let str2 = "JAVA";
// let str3 = "Python";
// console.log(str.concat(str2,str3));
// console.log(str2.concat(str3));

//! repeat : Returns a string value that is made from count copies appended together. If count os 0, the empty string is returned.
// let str = "Tarun";
// console.log(str.repeat(5));

//! indexOf : It returns the indexOf first matching substring, or -1 if it is not present. it accepts two arguments ie; "substring" and "poistion" --> optiional
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.indexOf("Akshit"));

//! lastIndexof : Returns of the occurence of a substring in the string , or -1 if it is not present.
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.lastIndexOf("Akshit"));

//! includes() : It returns the boolean value ie; true and false,checks weather substring is present in the string or not.
// let str = "Akshit is a good boy. Akshit is in 4th year";
// console.log(str.includes("Akshit"));


// let fullname = prompt("enter your name");
// let username = "@" + fullname + fullname.length;
// console.log(username);






























