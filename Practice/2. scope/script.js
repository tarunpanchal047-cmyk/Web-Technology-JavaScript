

//! TypeCasting : Conversion of one data-type into another data-type is known as typecasting.
//^ There are two types of typecasting.

//^ 1. Implicit TypeCasting : Those typecasting which is done automatically by the js is known as impilicit typecasting. It is also known as type conversion.


// console.log(2+2)                  //4
// console.log(2+"2")             //22
// console.log(2*"2")             //4
// console.log(2 + "hii")           //2hii
// console.log(2 * "asd")                //NaN
// console.log(typeof(2 * "asd"))           //Number
// console.log(typeof(typeof(2 * "asd")))   //String
// console.log(typeof JSPIDERS)            //Undefined
// console.log(typeof String)             //function
// console.log(typeof Array)           // function
// console.log(typeof Object)        //     function
// console.log(typeof String())      // string
// console.log(typeof Array())          //object
// console.log(typeof Object())       //object


// console.log([]+[])    // undefined  //   [] + [] = ' ' --> string
// console.log([]+{})    // [object Object]
// console.log({}+[])    //[object Object]

// console.log(typeof "str")
// console.log(typeof str)
// console.log(typeof new string ("abc"))

//^ 2. Explicit TypeCasting : Those typecasting which is done manually by the developer or programmer is known as explicit typecasting. 

// console.log(true)                //true
// console.log(Number(true))         //1
// console.log(Boolean(1))         //true
// console.log(String(false))      //false


//! Scopes : Accessibility and availability of variable inside js program is known as scope of the variable.

//? The scope of any variable is decided based on the two factors :
//& type of variable : i.e; var / let / const
//& position of the variable inside the js.

//! Global : If you have declared any variable outside the block and function by using var keyword, then the scope of variable is in the global scope.
// var a = 100;
// console.log(a)

//! Script Scope : If you have declared any variable outside the block and function
//!    by using let and const keyword, then the scope of the variable is in the script scope.
// let b = 200;
// const c = 300;
// console.log(b)
// console.log(c)

//! Block Scope : If the variable are declared by using var, let and const, inside
//!   the block. Then only var variale can be accessible the block. Block scope restrict
//!   the variable created by using let and const keyword from accessing outside it.

// {
//     var a = 100;
//     let b = 200;
//     const c = 300;
// }
// console.log(a)
// console.log(b)
// console.log(c)

{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a)
console.log(b)
console.log(c)


//! Local Scope / Function Scope : If the variable are declared by either using var, let or 
//!        const, then the scopes of the variable is in thr local scope, which means variable 
//!        can be accessed only within the function, because local scope restricts the variable 
//!        from accessing outside it.


// debugger
// function abc(){
//     var a = 100;
//     let b = 200;
//     const c = 300;
// }
// abc ()
// console.log(a)
// console.log(b)
// console.log(c)


// console.log("  ");



//! practice

// var a = 12;   // ---> this a global scoped 



// {

//     var a  = 12;             //   ---> this is a block 
// }




// let abcd = 12;
// function abc (){
//         if (true){
// var c = 12;
// }                m
// }
// console.log(abcd);                                //--> this is a function scoped 