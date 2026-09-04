// ! Function : It is a resuable pice of code which help us to avoid the repeteation of code in our program. 
// ! It help us to follow dry principal (do not repeat yourself).
// function ab(a,b){
//     console.log(a + b);
// }
// ab(10,20);

// const { useCallback } = require("react")


// function abc(a , b){
//     console.log(a + b)
// }
// abc(10,20)


// ! Types of Function : 
// !  1. Name function (Function Declaration) : function which is having some name is called named function.
// ? Arguments : Data which is passed while calling the function is called arguments.
// ? Parameters : Function accept arguments inside the parathesis, is called as parameters.

// function num(a,b){
//     console.log(a + b);
// }
// num(100,200);



// function sum(a,b){
//     console.log(a + b);
// }
// sum(5,8);

// !  2. Anonymous function : Function which doesn't have any name is called anonymous function.

//  function(){

//  }

// !  3. Arrow function (ES6) : It is also known as fat arrow function. It is the shorter form of writing function.
// let fun = () => {
// console.log("arrow function");
// }
// fun();

// let fun = ()=>{
//     console.log("dnejnf")
// }
// fun()

// ? property 1 : If there is only one parameter then there is no need of using paranthesis.

// let sum =a=>{
//     console.log(a);
// }
// sum(100);

// ? property 2 : If there is only one statement then there is no need of using curley brakets.


// let fun1 = ()=> console.log("statement 1");

// fun1();



// ? property 3 : If there is only one statement then there is no need of using curley brakets. but if there are multiple
// ?    statement and we have not use curley braket, then output will be suffled.

// let funa = () => {
//     console.log("hy");
//     return 123;
//     console.log("hy");
//     console.log("hy");
// }

// let res = funa();
// console.log(res);


// ? property 4 : If there in only one statement, which is the returned statement then there is no need of using curly brackets,
// ?     as well as return keyword. It is known as implict return.

// let fun1 = data => data
// console.log(fun1(1000)); 
 



// !  4. Function with Expression  : When we are storing of function as a value inside the variable it is as known as function with expression.
// !       and the store function is known as first class function or first citizen function.

// let fnWithEx = function(){
//     console.log("Function With Expression");
// }
// let fnWithEx2 = ()=>{
//     console.log("Function With Expression");
// }
// fnWithEx();
// fnWithEx2();

// !  5. First class function ---> function ko value ki tarh twite kr tenhai

// function abc (val){
//     val();
// }
// abc(function(){
//     console.log("jbdwjhbdj");
// });

// function abc(val){
// val()
// }
// abc(function(){
//     console.log("ndihih")
// }
// )

// !  6. First citizen function  



// !  7. Immediately Invoked Function Expression (IIFE) : After creating the function immediately, we are invoking 
// !    the function, is known as IIFE. It helps us to prevent the global variable pollution.

// (function(){
//     console.log("IIFE");
// })();


// ((a,b)=>{
//     console.log(a,b);
//     console.log("IIFE");
// })(100,200);



// !  8. Higher order function  : A function which accepts another function as a argument. It is known as higher order function.
// function abc(val){
//     return function(){
// console.log("kwdhuwjb")
//     }
// }
// abc()()





// !  9. Call back function : A function which is passed as the argument it is known as callback function.
// function abc(a,b,callback){
//     callback(100,200,10000);
// }
// abc (10,20,function(a,b,c){
//     console.log(a+b+c);
// })
// abc()












// function abc(){
//     return function(){
//         console.log("ehgfuejwh")
//     }
// }
// abc()()

// function abc(){
//     console.log("tarun")
//     callback();
// }
// function df(callback){
//     callback();
// }
// df(tarun);

// !  10. Recursive function : Function which calls itself, is valid recursive function.
//  * 5 = 5 * 4 * 3 * 2 * 1 = 120

// function findFactorial(n){
//     //* base case
//     if(n==1){
//         return 1;
//     }
//     return n * findFactorial(n-1);
// }
// let res = findFactorial(5);
// console.log(res);

// function abc (n){
//     if (n==1){
//         return 1;
//     }
//     return n * abc(n-1)
// } 
// let res = abc(5)
// console.log(res)


// !  11. Generative function : It is the special type of function which can pause and resume is execution. 
// & Yeild : It is a keyword which is used to pause the execution of the generative function.
// & Next () : It is a method which is used to resume the execution of the generative function. It is return as object which contains two property.
// ? value : data which is given by yield keyword.
// ? done : It stores the boolean value, which specific wheather the execution of generative function is completed or not.

// function* genFn(){
//     yield "data 1"
//     yield "data 2"
//     yield "data 3"
//     return "data 4"

// }
// let res = genFn();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());


// function* abc(){
//     yield "data 1"
//     yield "data 2"
//     yield "data 3"
//     yield "data 4"
//     return "data 5"
// }

// let res = abc();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// !  12. Pure function : Function which gives same output for the same input, or which does not modify the external state is known as pure function.

// function pure(a,b){
// console.log(a*b);
// }
// pure(100,2);
// pure(100,2);
// pure(100,2);



// let a = 12;
// function pure(){
//     console.log("kefnwfjn")
// }
// pure()


// !  13. Impure function : Function which gives different output for the same input, or which modifies the external state is known as impure function.
// let count = 1;
// function impure(a,b){
//     console.log(a*b*count);
//     count++
// }
// impure(100,2);
// impure(100,2);
// impure(100,2);

// function increase() {
//     count++;
//     return count;
// }

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

// let count = 0;



// ! Default parameter : Default values which is initialized to the function parameter. so in case of absence of arguments these default value will be used.

// function abc(a,b){
//     console.log(a+b);
// }
// abc();

// abc(500,500);
// abc(500);


//! rest parameter :  Rest parameter (...) is a javascript feature that collects multiple function arguments into a single array.

// function  abc(a,b,c,...data){
//     console.log(a,b,c,data)
// }

// abc(1,2,3,4,5,6,7,8,9)



// function abc(...data){
//     console.log(data)
// }
// abc(1,2,44,43,546,456,567,57,5)

// ! Arguments Object : It is a default array like object present in the non-arrow function, which allows us to access all the arguments passed
// !     while calling the function without using the parameter.

// function sum(){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[0]+ arguments[1]);
//     }
// sum(100,200);


// function sum(){
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[0]+arguments[1])
// }
// sum (10,20)

// ! Nested function : Function present inside a function is known as nested function.

// function outer(){
// var a = 100;
// function inner(){
//     var b = 200;
//     console.log(a+b);
// }
// inner();
// }
// outer();

// ! Closure : It is a closure created by the outer function, when the inner function is trying to access the data, which is present  in the outer.
// function outer(){
// let name = "Tarun"
// function  inner(){
//     console.log(name)
// }
// return inner;
// }
// let result = outer();
// result();
// result();
// result();


// ! Java script Currying : Currying is a finction programming technique that transforms a function taking multiple arguments into a sequence of nested function 
// !    each taking a single argument. Instead of evaluating f(a,b,c) all at once, curring decomposes it to 

// function sum(a){
//     console.log("function 1");
//     return function(b){
//         console.log("function 2");
//          return function(c){
//             console.log("function 3");
//             console.log(a+b+c);
//          }
//          }
// }

// let fun2 = sum();
// let fun3 = fun2();
//  fun3();

// sum(10)(20)(30);


// ! Function hoisting :  It is possible in only in non-arrow function.

// abc();
// function abc(){
//     console.log("Function hoisting");
// }


// abc()
// function abc (){
//     console.log("tarun")
// }


// let abc = function (){
// console.log("Function Hoisting");
// }
// abc();






//^name function 

// function abc(a,b){
//     console.log(a + b);
// }
// abc(10,500);

//^ anonymous fnc
// function (){

// }


//^ fnc expresion
// let fnc = function(){

// }

//^  arrow function fat arrow function  

// let fun = () => {
//     console.log("Tarun Panchal");
// }
// fun();


// let fun = ()=>{
//     console.log("tarun")
// }
// fun()

//^ function with expression
// let fncWithExp = function(){
//     console.log("Tarun Panchal")
// }
// let fncWithExp2 = ()=>{
//     console.log("Varun")
// }
// fncWithExp();
// fncWithExp2();

//^ HOF
// function HOF(a,b,callback){
//     callback(a,b,callback);
// }
// HOF(10,20,function(a,b,c){
//     console.log(a+b+c);
// })
// HOF()()

//^ IIFE 
// ((a,b)=>{
//     console.log("IIFE")
//     console.log(a+b)
// })(10,20);


// ((a,b)=>{
//     console.log("IIFE")
// })()

//^ lexical scopping

// function abc(){
//     let a = 12;
//     function def(){
//         let b = 13;
//         function ghi(){
//             let c = 14;
//         }
//     }
// }
// abc()
// def()
// ghi()


//^ IIFE
// ( function (){

//  })()


//^ returns 
// function abc (){
// return 9;
// }
// let val = abc()
// console.log(val)


// function abc(){
//     return 12;
// }
// let val = abc()
// console.log(val)

// function abc(){
//     return 12 + 4;
// }
// let val = abc()
// console.log(val)




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// abc()
// function abc(){
//     console.log("rnyjnin")
// }












