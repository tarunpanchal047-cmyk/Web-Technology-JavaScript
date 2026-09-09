
//     ! Datatype : Data type is the type of value that variable can store. 
//     ! In JavaScript, data types are mainly divided into Primitive and Non-Primitive types.
//     !  Primitive types include Number, String, Boolean, Undefined, Null, BigInt, and Symbol.
//     !  Non-Primitive types include Object, Array, Function, and Date. We can check the type of
//     !  a value using the typeof operator.



//     ! Typeof : It is tells which type of data, you are using.

//     ^ 1. Primitive (Immutable) : Primitive datatypes are the basic or simple datatypes that
//     ^  store in a single value directly. They are immutable, which means their values cannot be 
//     ^ changed once created (changing them creates a new value).
//      ? number : The Number data type is used to store integers and decimal (floating-point) values.
//      let no = 12345
//      console.log(no)
//      console.log(typeof no)       //number

//      ? string : The String data type is used to store text. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
//      let str = "true"
//      console.log(str)
//      console.log(typeof str)      //string

//      ? boolen : The Boolean data type stores only two values: true or false.
//      let bool = true
//      console.log(bool)
//      console.log(typeof bool)      //boolen

//      ? null : null represents an intentional empty value. It means the variable currently has no value.     
//      let xyz = null
//      console.log(xyz)
//      console.log(typeof xyz)    // object

//      ? undefined : A variable is undefined when it is declared but no value has been assigned to it.
//      let data
//      console.log(data)
//      console.log(typeof undefined)      //undefined

//      ? bigInt : BigInt is used to store very large integers that are beyond the safe limit of the Number data type.
//      let bigData = In
//      console.log(bigData)
//      console.log(typeof bigData)      //bigInt

//      ? symbol : A Symbol creates a unique and immutable identifier, often used as unique object property keys.
//      let sym1 = Symbol("data1")
//      let sym2 = Symbol("data2")
//      console.log(sym1 === sym2)
//      console.log(sym1 == sym2)
//      console.log(typeof sym1)      //symbol






// let a = 12;
// let b = a;
// a = a + 2;



//     ^ 2. Non-primitive : Non-Primitive data types are complex data types that can store multiple values or collections of data.
//     ^  They are stored by reference, and their contents can be modified.


//     ? array : An Array stores multiple values in a single variable.
//     let arr = []
//     console.log(arr)
//     console.log(typeof arr)   //object

//    ? object : An Object stores data in key–value pairs.
// let obj = {}
// console.log(obj)
// console.log(typeof obj)        //object

//     ? function : A Function is a reusable block of code that performs a specific task.
//     function abc(){
//     console.log("function")
// }
// console.log(typeof abc)    // function





// let a = 12;
//  a = true;
//  a = "tarun";
//  a = [];
//  a = null;
//  a = undefined;

//  console.log(a);









// let arr = [1,2,3]
// console.log(arr);


// let a = [1,2,3]
// let b = a;
// b.pop();



// function test() {
//     var a = 5;
// }

// console.log(a);







// let a = 10;

// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);


// var a = 10;

// function demo() {
//     console.log(a);
// }

// demo();

// let a;
//                          // undefined
// console.log(typeof a);




// const user = {
//     name: "Tarun"
// };

// user.name = "Amit";

// console.log(user);

// console.log(typeof 100);
// console.log(typeof "JavaScript");
// console.log(typeof true);






// console.log(typeof function() {});


// console.log(a);

// var a = 5;


// function test() {
//     console.log(a);
// }

// test();

// let a = null;

// console.log(typeof a);

//! QQ 
// NaN 
// NaN

// typeof 12
// 'number'

// typeof "tarun"
// 'string'

// typeof null
// 'object'

// typeof NaN
// 'number'

// NaN === NaN
// false

// NaN == NaN
// false

// .1 + .5
// 0.6

// [] 
// []

// [] + []
// ''

// 1 + "1"
// '11'

// 1 == "1"
// true

// 1 == "1"
// true

// 1 === "1"
// false
