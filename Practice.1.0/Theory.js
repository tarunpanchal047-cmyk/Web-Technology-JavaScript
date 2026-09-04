 
// ! JAVASCRIPT
// ~ Javascript is a programming language. We use it to given instructions to the compiler.
// ~ It is used to add dynamic functionality to our website.
// ~ Examples : Include fetching the data from an API, authentication, and authorization.
// ~ It is a scripting as well as a programming language.
// ~ It is an object-based programming language.
// ~ It is a partially object-oriented programming language because JavaScript uses prototypal inheritance.

//     ^ History of JS
//     ~ It was developed in September 1995 by Brendan Eich in only 10 days.
//     ~ Initially, it was named Mocha. Then, the name was changed to LiveScript.
//     ~ Again, for marketing purposes, the name was changed to JavaScript because at that time Java was a very popular language. 
//     ~ To get the popularity of Java, the owner of Java (Sun Microsystems) and the owner of JavaScript (Netscape Corporation) together 
//     ~ made an agreement and then the name was changed into JavaScript.
//     ~ Again, in 1997, JavaScript became ECMA Script. ECMA stands for European Computer Manufacturers Association.
//     ~ Then, different versions of ECMAScript were released. The latest version of ECMAScript is ECMAScript 2026.
//     ~ The famous versions of ECMAScript are: ES6, ES7 and ES9.

//         ^ Feature of ECMA Script
//                 * Let keyword
//                 * const keyword
//                 * Arrow function
//                 * Promises
//                 * Symbols
//                 * Async, Await
//                 * map, filter , reduce
//                 * spread operator
//                 * rest parameter etc.

//         ^ Featuers of JavaScript
//                 * Dynamic In nature
//                     ~ Variables are not bound to store specific data, inside one variable, you can store any type of data.
//                 * Interpreted 
//                     ~ It means the JS code will be checked line by line from top to bottom, left to right.
//                 * Synchronoused 
//                     ~ The code will be executed line by line from top to bottom, left to right.
//                 * Signle theraded
//                     ~ It means the JS engine will execute only one task at a time. After completing the previous statement, only then the next line of code will be executed. But we can make JavaScript change from synchronous to asynchronous by using Promises and async/await.
//                 * Weekly and lossely type programming language
//                     ~ It means a semicolon is not mandatory at the end of every line, but if you are writing multiple statements on the same line, then you have to put a semicolon.



// ! TOKEN : Smallest individual unit of program.

// ! Variable rules : 
// ! 1. Variable names are case sensitive "a" and "A" is different.
// ! 2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
// ! 3. Only a letter, underscore(_) or $ should be 1st character.
// ! 4. Reserved words cannot be variables names.

// ! VARIABLE:
//     ~ Variables is a just like a container which is used to store the data. It will be change.
//     ~ There are three types of variabile :
//         * VAR
//         * LET
//         * CONST

//      ^ VAR : A function-scoped variable that can be re-declared and re-assigned.
//         ? declaration --> possible
//             var abc;
//         ? initialization --> possible
//             abc = 10;
//         ? Declaration & Initialization (same) --> possible
//             var a = 100;
//         ? Re-Declaration; --> possible
//             var a = 1000;
//         ? Re-Initialization --> possible
//             a = "abc";
    
//     ^ LET : A block-scoped variable that cannot be re-declared in the same scope but can be reassigned.
//         ? declaration --> possible
//             let abc;
//         ? initialization --> possible
//             abc = 10;
//         ? Declaration & Initialization (same) --> possible
//             let a = 100;
//         ? Re-Declaration; --> Not possible
//             let a = 1000; //not possible
//         ? Re-Initialization --> possible
//             a = "abc";

//     ^ CONST : A block-scoped variable that cannot be re-declared or reassigned after initialization.
//         ? declaration --> Not possible
//             const abc; //not possible
//         ? initialization --> Not possible
//             abc = 10; //not possible
//         ? Declaration & Initialization (same) --> possible
//             const a = 100; //possible
//         ? Re-Declaration; --> Not possible
//             const a = 1000; //not possible
//         ? Re-Initialization --> Not possible
//             a = "abc"; //not possible


//     ! Identifiers : An Identifier is the name that given to the variable by the programmer.

//     ! Rule of Identifier 
//     ~ It should not start with number.
//     ~ Special character are not allowed.
//     ~ Only underscore and clone are allowed.
//     ~ Reserved keyword is not use the identifier.
//     ~ Spaces are not allowed between identifier. 
//     ~ It is a case sensitive language. which means lowercase and uppercase treat differently.

    

//     ! Special Operator : special operators are operators that perform specific tasks beyond basic arithmetic or comparison. Interviewers often ask about these operators.

//     ^ == vs ===
//     ? == : It checks only values 
//     ? === : It checks values as well as data types. It is also knowm as strict type checking.


//     ! Typeof : It is tells which type of data, you are using.


//     ! Datatype : Data type is the type of value that variable can store. 
//     ! In JavaScript, data types are mainly divided into Primitive and Non-Primitive types.
//     !  Primitive types include Number, String, Boolean, Undefined, Null, BigInt, and Symbol.
//     !  Non-Primitive types include Object, Array, Function, and Date. We can check the type of
//     !  a value using the typeof operator.

//     ^ 1. Primitive (Immutable) : Primitive datatypes are the basic or simple datatypes that
//     ^  store a single value directly. They are immutable, which means their values cannot be 
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
//      
//      console.log(sym1 == sym2)
//      console.log(typeof sym1)      //symbol

//     ^ 2. Non-primitive : Non-Primitive data types are complex data types that can store multiple values or collections of data.
//     ^  They are stored by reference, and their contents can be modified.
//     ? function : A Function is a reusable block of code that performs a specific task.
//     function abc(){
//     console.log("function")
// }
// console.log(typeof abc)    // function

//     ? array : An Array stores multiple values in a single variable.
//     let arr = []
// console.log(arr)
//     console.log(typeof arr)   //object

//    ? object : An Object stores data in key–value pairs.
// let obj = {}
// console.log(obj)
// console.log(typeof obj)        //object



// ! TypeCasting : Conversion of one data-type into another data-type is known as typecasting.
// ^ There are two types of typecasting.

// ^ 1. Implicit TypeCasting : Those typecasting which is done automatically by the js is known as impilicit typecasting. It is also known as type conversion.


// ^ 2. Explicit TypeCasting : Those typecasting which is done manually by the developer or programmer is known as explicit typecasting. 



// ! Scopes : Accessibility and availability of variable inside js program is known as scope of the variable.

// ? The scope of any variable is decided based on the two factors :
// & type of variable : i.e; var / let / const
// & position of the variable inside the js.

// ! Global : If you have declared any variable outside the block and function by using var keyword,
// !   then the scope of variable is in the global scope.


// ! Script Scope : If you have declared any variable outside the block and function
// !    by using let and const keyword, then the scope of the variable is in the script scope.


// ! Block Scope : If the variable are declared by using var, let and const, inside
// !   the block. Then only var variale can be accessible the block. Block scope restrict
// !   the variable created by using let and const keyword from accessing outside it.


// ! Local Scope / Function Scope : If the variable are declared by either using var, let or 
// !        const, then the scopes of the variable is in thr local scope, which means variable 
// !        can be accessed only within the function, because local scope restricts the variable 
// !        from accessing outside it.


// ! Hoisting :

// !  Hoisting before declaration and intilization if we are trying to access in the value of a variable that is known as hoisting.
// !  it is the default javascript behaviour that move all the variable declareation to the top of the scope.
// !  if we are trying to hoist the variable that is declared by that using var keywoed that it will gives undefined.
// !  if we are trying to hoist the variable that is declaered by using let and const keyword then the output will be uncaught reference error. Because the variable went into a dead zone which is known as TDZ (temporal dead zone).

// ? One
// var a;

// console.log(a)
// console.log(b)

// var a = 100;
// let b = 200;
// const c = 300;  



// ! Decision / Conditional Statement : Decision statements are control statements 
// ! used to execute different blocks of code based on whether a condition is true or false.

// ~ falsy val : 0, false, null, undefined, NaN, "", 0n, -0

// ! 1. if Statement : Executes the code only if the condition is true.



// ! 2. if-else : Executes one block if the condition is true; otherwise, executes another block.


//     ! Switch : Used to select one block of code from multiple options.


//     ! Ternary operator : A short form of the if...else statement.
    

//     ! LOOPS in javascript : A loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.
 
//     ? 1. for loop : The for loop is used when you know how many times you want to repeat the code.


//     ? 2. while : The while loop executes the code as long as the condition is true.


//     ? 3. do-while : The do...while loop executes the code at least once, even if the condition is false.








//     !  Output method in JS
//     ? console.log() : It is used for testing purpose.

//     ? document.writeln() : It is used to display the data on the UI.

//     ? alert() : It is a popup to methid in JS.

//     ? confirm() : It is another popup method, in which two options are present.
   

//     ? prompt() : It is a popup method, which is used to take the input from the user. It type case the data entered througgh prompt into string type.


//     ! PreseInt : Only take no if you enter number and string it contain only no avoid string.




// ! Function : It is a resuable pice of code which help us to avoid the repeteation of code in our program. 
// ! It help us to follow dry principal (do not repeat yourself).


// ! Types of Function : 
// !  1. Name function (Function Declaration) : function which is having some name is called named function.
// ? Arguments : Data which is passed while calling the function is called arguments.
// ? Parameters : Function accept arguments inside the parathesis, is called as parameters.


// !  2. Anonymous function : Function which doesn't have any name is called anonymous function.


// !  3. Arrow function (ES6) : It is also known as fat arrow function. It is the shorter form of writing function.

// ? property 1 : If there is only one parameter then there is no need of using paranthesis.



// ? property 2 : If there is only one statement then there is no need of using curley brakets.



// ? property 3 : If there is only one statement then there is no need of using curley brakets. but if there are multiple
// ?    statement and we have not use curley braket, then output will be suffled.





// !  4. Function with Expression  : When we are storing of function as a value inside the variable it is as known as function with expression.
// !       and the store function is known as first class function or first citizen function.



// !  5. First class function 
// !  6. First citizen function  



// !  7. Immediately Invoked Function Expression (IIFE) : After creating the function immmediately, we are invoking 
// !    the function, is known as IIFE. It helps us to prevent the global variable pollution.



// !  8. Higher order function  : A function which accepts another function as a argument. It is known as higher order function.

// !  9. Call back function : A function which is passed as the argument it is known as callback function.


// !  10. Recursive function : Function which calls itself, is valid recursive function.


// !  11. Generative function : It is the special type of function which can pause and resume is execution. 
// & Yeild : It is a keyword which is used to pause the execution of the generative function.
// & Next () : It is a method which is used to resume the execution of the generative function. It is return as object which contains two property.
// ? value : data which is given by yield keyword.
// ? done : It stores the boolean value, which specific wheather the execution of generative function is completed or not.



// !  12. Pure function : Function which gives sam eoutput for the same input, or which does not modify the external state is known as pure function.



// !  13. Impure function : Function which gives different output for the same input, or which modifies the external state is known as impure function.



// ! Default parameter : Default values which is initialized to the function parameter. so in case of absence of arguments these default value will be used.


// ! Arguments Object : It is a default array like object present in the non-arrow function, which allows us to access all the arguments passed
// !     while calling the function without using the parameter.



// ! Nested function : Function present inside a function is known as nested function.



// ! Closure : It is a object created by the outer function, when the inner function is trying to access the data, which is present  in the outer.

// ! Java script Currying : Currying is a finction programming technique that transforms a function taking multiple arguments into a sequence of nested function 
// !    each taking a single argument. Instead of evaluating f(a,b,c) all at once, curring decomposes it to 



// ! Function hoisting :  It is possible in only in non-arrow function.



// ! String : sequence of character

// ^ Way of creating string 



// ? Template literals : 
// & Advantages of template literals :
// ? we can create multi-line string.
// ? string interpolation : Embedding variables inside a string is known as a string interpolation.



// ! Property of String :
// ? length : using length property we can calculate length of string.
// let str = "jebfuvhrgiuerhujfbs   jbdfbeuisgbfukgb";
// console.log(str.length);

// ! Method of string :
// ? at() : It accepts index and fine the character present at the index. It supports negative values.
// let str = "Tarun";
// console.log(str.at(3));

// ? charAt() : It accepts index and fine the character present at the index. doesn't support negative value.
// console.log(str.charAt(2));

// ? chatCodeAt() : It accepts index value and returns the ascii value of that character present chat index.
// console.log(str.charCodeAt(0));

// ? property of access way to get character from string.
// console.log(str[0]);

// ? .slice(starting index, ending index ---> excluded) : It is used to extract sequence of characters. It accepts two arrguments starting index and ending index.

// ? substring() : It accepts two arguments starting and ending index return the sequence of characters.
// ? negative values are covered
// ? if starting index is greather than ending index than values are swapped.



// ! .toUpperCase() : It converts the string into uppercase.

// ! .toLowerCase() : It converts the string into lowercase.


//  ! .padstart() : It is used to adds the current string with a given string at the start of the string. It accepts two 
//  !               arrguments i.e.; maxlength, "newString that we wants to add."


// ! .padend() : It is used to adds the current string with a given string at the end of the string.


// ! trimStart() : It removes extra whitespaces from start of the string.
// ! trimEnd() : It removes extra whitespaces from end of the string.
// ! trim() : It removes extra whitespaces from both ends start as well as end of the sting .

// ! replace() : It replaces the first matching substring in the string.

// ! replaceAll() : It replaces all the matching substring in the string.

// ! .match() : Matches a string with a regular expression, and returns an array containing the results of that search.

// ! .search() : Returns the index of the first matching substring.

// ! concat : It is used to merge two or more string, and returns a new string.

// ! repeat : Returns a string value that is made from count copies appended together. If count os 0, the empty string is returned.

// ! indexOf : It returns the indexOf first matching substring, or -1 if it is not present. it accepts two arguments ie; "substring" and "poistion" --> optiional

// ! lastIndexof : Returns of the occurence of a substring in the string , or -1 if it is not present.

// ! includes() : It returns the boolean value ie; true and false,checks weather substring is present in the string or not.


// ! Array :

//  ! It in not premitive data type which is use to multiple data inside the single variable of the data store indside the array is knonw as element 
// !  in java script array can be homogenous at an hatrogenous.

// ? literal's way :
// ? Homogenous Array : same line data 
// let arr = [10,20,30,40,50,60];

// ? Haterogenous Array : differnet different data
// let arr2 = [1, "abc", true, 123n, null, undefined, Symbol("abc"),
//      function(){console.log("function")},["HTML", "CSS", "JS"],{}]




// ! Property of Array :
// ? Length : it gives no of elements present inside the array.
// console.log(arr.lenght);


// ! Ways of creating array :
// ? literal's of way :
// let arr = [1,2,"string", true, null];

// ? Constructor's way :
// let arr = new Array(1,2,3,4);
// console.log(arr);

// ? Array.of()
// let arr = Array.of(1,2,3,4);
// console.log(arr);


// ! Method's of Array :
//  ? slice : It accepts two arguments starting and ending index. And remove the elements 
//  ? present between starting and ending index. it returns new array.It does not affect 
//  ? the original array.



//  ? splice : It accepts three arguments starting index, count (no of element wants to delete), new elements  
//  ? that we want to add. It is used to remove, update, as well as add new element in the array. It return new array 
//  ? and it modifies the original array.



// ! Reversed method : reverse the elements in an array in place. This method mutates the array and returns a reference 

// let arr = [10,20,30,40,50];
// let arr2 = [10,20,30,40,50];
// console.log(arr2)
// arr.reverse();
// console.log(arr);



// let arr = [10, 20, 30, 40, 50];
// console.log(arr.reverse());

// ! Flat() : It converts multi-dimentional array into single dimentional array. 


// ! some() : It accept callback function as an arrgument, and execute the function for each element 
// !      present inside an array. it returns true, if any one of the alement matches the condition.
// !      If none of the element matched the condition then it returns false.



// ! every() : It accept callback function as an arrgument, and execute the function for each element 
// !      present inside an array. it returns true, only when all the element passes the condition, if any one 
// !    of element present inside the array fails to pass the condition then it returns false.


// ! Push() : It is used to add the elements from the end of the array. It modifies the original array. It returns 
// !       the length of the updated array.

// ! pop() : It is used to remove the element from the end of the array.it modifies the original array. It returns the removed element.

// ! shift() : It is used to remove the element from the start of the array. It modifies the original array. It returns the removed element.

// ! unshift() : It is ised to add the element from the start of the array,. It modifies the original array. It returns the lenght 0.

// ! Map() : It is used to iteral and modify the elements of the array. It accepts a callbackfunction, which is executed for all the elements present inside the array.

// let arr = [10,20,30,40,50,60];
// console.log(arr);
// let res = arr.map(m =>{
//       return m + 5;

// });
  

// console.log(res);



// ! filter() : It is used to filter an array and returns new array which consists only those element which passes the condition.
// let arr = [1,2,3,4,5,6,7];
// let res = arr.filter((m)=>{
//     return m>5
// })

// console.log(res);

// ! reduce() : It always return a single value. it accepts teo arrguments callback function, and initial data which is optinal.
// ? accumulator : it is the total result given by the reduce method.
// ? current Val : it store each element present inside an array.
// ^ syntax : arr.reduce(callback,initialVal);

// let arr = [1,2,3,4,5,6,7,8,9];

// let res = arr.reduce((acc,currentVal)=>{
//     return acc+currentVal;

// },100);
// console.log(res);


// ! Object : it is not premitive datatypes which is used to store the data in the form of key and value pairs.
// ? key and value pairs is seprated by using column.
// ? key and value pairs together is known as property and multiple property separated by commas.



// ! this keyword : It is a pointing mechanism, which points to the curret context of object.
// & Inside name function the value of this keyword, in non -strict mode, will points to the window.
// & Inisde name function the value of this keyword, in case of strict mode, will points to the undefined.





// & Object.keys() : It retunes all the keys present inside an object in the form of array.
// console.log(Object.keys(obj));

// & Object.values() : It retunes all the values present inside an object in the form of array.
// console.log(Object.values(obj));

// & Object.entries() : It returns both key and value pairs in the form of nested / mulyi-dimentional array.
// console.log(Object.entries(obj));

// & Object.fromEntries() : It accepts multi-dimentional array and converts it into object.
// console.log(Object.fromEntries([["id",1],["objName","qwert"]]));




// ! Object.freeze() : Prevents the modification of existing property the addition of new properties, prevents the
// ! delection of existing properties.



// & Update ---> not possoble
// obj.objName = "newVal"
// & addition ---> not possible
// obj.newProp = "newVal";
// & deletion ---> not possible
// delete obj.id;



// ! Object.isFrozen() : returns boolean value, used to check wheater object is freezed or not.


// ! Object.isSealed() : Doesnot prevents, the modification of existing property, and prevents the addition of new
// ! properties, prevent the deletion of existing properties.



// & Update --->  possoble
// obj.objName = "newVal";
// & addition ---> not possible
// obj.newProp = "newVal";
// & deletion ---> not possible
// delete obj.id;



// ! Object.aasign(destination,source) : Copy of the values of all properties from one or more source 
// ! object to a target object. Returns the target object.



//! Shallow copy : Copies the main container but shares the nested items. Changing a nested item in the copy will change the original.

//! Deep copy : Copies the container and duplicates all nested items. the copy is 100% independent. changing the copy never affects the original.

//! JSON.stringify() : Inbuilt method in JS that converts JS object into JSON.

//! JSON.parse() : Inbuilt method in js that converts JSON into object.


//! Destructing in Array 
// let arr = ["data1", "data2", "data3", "data4", "data5"]

// let [a,b, ...remainingData] = arr
// console.log(a)
// console.log(b)
// console.log(remainingData)


//! Deastructing in Object :

// let obj = {
//     id : 1,
//     objName : "abc",
//     isDev : true,
//     sal : 328789,
//     isTeaster : null
// }
// console.log(obj.id)
// console.log(obj.sal)
// let {id,sal,...data} = obj;
// console.log(id)
// console.log(sal)
// console.log(data)

//! Destructing nested :

// let obj = {
//     id : 1,
//     objName : "abc",
//     isDev : true,
//     sal : 328789,
//     isTeaster : null,
//    address : {
//     city : "Delhi",
//     pin : 12432
//    }
// }
// console.log(obj.address.city)
// let {sal} = obj
// console.log(sal)
// let {city} = address;
// console.log(city)





//! Destructuring in javascript is a shortcut for uppacking values from arrays or properties from objects
//! and saving them into variables. It is a clearner way to extract data without writing repetitive lines of code.

//? Array Destructinhg  (order matters) : Javascript assigns values to your variables based on their exact position 
//?     in case of array. you can name the variable whatever you.

//? Object Destructing (Names Matters) : Beacause object properties do not have a set of order, javascript looks of variable the match
//? the exact key names inside the object.

//& The javacript spread operator (...) is like unpacking items out of a container (like an array or an object) and 
//& spreads them into a new place.

//& The rest parameter is a javascript feature that lets a function accept any number of extra arguments and bundles them 
//& cleanly into a single array. It is written using three dots (...) followed by a name of your choice.


//! rest parameter :

// function  abc(...data){
//     console.log(data)
// }

// abc(1,2,3,4,5,6,7,8,9)


//! Advance topic  :
//! LOOPS :

//&    forEach : it is method, used with array only.
// let arr = [1,2,3,4,5,6]

// arr.forEach((val,index,arr)=>{
// console.log(val,index,arr)
// })
// console.log(arr)


//&    for-in :
// let obj = {
//     id : 1,
//     objName : "abc",
//     sal : 34234,
//     isDev : true
// }
// for(let data in obj){
//     console.log(data,obj[data])
// }




//&    for-of :

// let arr = [1,2,3,4,5,6]
// for(let data of arr){
//     console.log(data)
// }


// let str = "gweufgyb"
// for(let data of str){
//     console.log(data)
// }

//& It is used to exact uniques value
// let unique = new Set([1,1,1,2,2,2,3,3,3])
// for(let data of unique){
//     console.log(data)
// }



//! Prototype : It is keyword, every object has an internally linked with each other, by using prototupe. It is a object.

//? constructure 



//? inheritance

// console.log(window.__proto__.__proto__.__proto__.__proto__.__proto__);

//^=========================================================================================================================================================================================
//=========================================================================================================================================================================================
//=========================================================================================================================================================================================

//! BOM / Window : BOM stand for Browser Obectj Model.
//! Whenever we open any browser the browser .it self consider as an object this object is known as BOM.
//! The another name of BOM is window. It is the global obj in the forentend JS.
//? Some main Object present inside the BOM is :
// Document (DOM)
// Navigator 
// Location
// Screen
// History 


//! DOM Stands for Document Object Model.
//! Whenever we run html code the browser inside the browser. browser create this tree like structure is known as DOM TREE.
//! Inside the dom tree all the html elelement are represented in form of Nodes 
//! this dom tree is created to manupulate the html to the javascript.(manupulate means adding the element removing the element, adding the attribue removing the attribute,
//!     adding the styling and removing the style )



//? Methods for accessing html element 
//^ getElementById() : used to target html element based on the id attribute. In this method there is no need 
//^ of using the symbols.


//^ getElementByClassName() : used to target html element based on the class attribute. It targets all the matching html
//^ elements have the same class attribute. It stores all  the targetted element inside an array like object known as HTMLCollection.


//^ getElementByTagName() : used to target html element based on their tag name. It targets all the matching html
//^ elements have the same tag. It store all the targetted element inside an array like object known as HTMLCollection.


//^ querySelector() : used to target html element based on id, class attribute as well as tagName. It target only 
//^ the first matching element. In this method we have to use the symbols for id(#) and class(.)


//^ querySelectorAll() : used to target html element based on id, class attribute as well as tagName. It target all the 
//^  matching element.inside an array like object known as NodeList. In this method we have to use the symbols for id(#) and class(.) also.




//! manupulating attribute through JS :

// let inp = document.querySelector('input')

//^ getting attribute value 
// console.log(inp.placeholder)
// console.log(inp.type)

//^ updating attribute 
// inp.type = 'password'

//^ adding new attribute 
// inp.minLength = 10

//^ getAttribute() : inbuilt method in js used to get the values of attributes present inside the html.
// console.log(inp.getAttribute('type'))
// console.log(inp.getAttribute('placeholder'))

//^ setAttribute() : inbuilt method in js used to get the values of attributes present inside the html as well as
//^ adding new atrributes.
// inp.setAttribute('type',"password")
// inp.setAttribute('minLength',"10")
// console.log(inp)


//! Accessing content in DOM :

// let ele = document.querySelector('.box')

//^ innerHTML : It returns content as well as tags at it written inside the html.
// console.log(ele.innerHTML)
//^ innerText : It returns all content present inside the targetted element.
// console.log(ele.innerText)
//^ textContent : It returns content as well as extra spaces as it  is written in the html structure.
// console.log(ele.textContent)


//! adding in through CSS
//  let res = document.getElementsByTagName('h1')[0]


 //^ inline CSS 
//  res.style.color = "red"
//  res.style.backgroundColor = "black"
//  res.style.padding = "10px"
//  res.style.borderRadius = "10px"

//^ Internal CSS
// res.style.cssText =  `color: red; background-color:blue; padding = "10px"; borderRadius = "10px";`



//^ external CSS
//? classList

//^ classList.add() : used for adding class.
// res.classList.add("abc")

//^ classList.remove() : used for remove class.
// res.classList.remove("abc")

//^ classList .toggle() : It is chekcs wheather matching class is present in targetted element 
//^ or not, if class is already present it removes the class, if it is not present it adds the classs.
// res.classList.toggle("abc1")




//! eventhandler in javascript 
// event handler are special arrtibute which is used to call a function when the user perform the action 
// all event handler prefix it all keyword 


//! types of Event Handler
//? click Event : onClick , ondblClick 
//? from Event : onSubmit 
//? mouseEvent : onMouseMove, onMouseUp, onMouseDown, onMouseHover
//? Keyboard Event : onKeypress, onkeydown, onkeyup
//? input Event : onfocus, onblur, onchange




//^ ===============================================================================================================


//~! add event listner : it is a method in javascript which is used to call a function when the user perform some event
//! in aaccept three argument.

//! the first event with out on keyword 
//! the second argument is the call back function
//! and the third argument is the boolean value event bublling event capturing 

//! event propogation : the process of calling and event is known as propogaiton 
//^ there are teo types of event propogation 
//? 1. event bubbling : event bubling the process of calling innner event first and the out of the by default all event handler event bubbling


//? 2. event capturing :
//^ the process of calling outer event first and then the inner event is known as event capturing
//^ if we went to make over to perform of caturing then we have to pass true as the last argument and the event lishner


//! timing function
//^ setTimeout() : It accepts two arguments , first argument is the callback fucntion which we wants to execute 
//^  and second argument is the tine in millisecond. It automatically execute the callback function after given me time.
//^ It executes the callback function only once.
//^ clearTime() : It accepts one argument ie; reference of the setTimeout, which we wants 
//^ to stop. It is used to clear the setTimeout()




//! setInterval :
//^ it accepts two arrgument first argument is the callback function second argument is the time
//^ in millisecond. It executes the callback function after every span of time.
//^ To stop the setInterval, we uses clearInterval, which accepts the reference of the setInterval


//&================================================================================================================
//& ================================================================================================================

//! Promise : It is a object. it tells completion or faliure of a synchronous task.

//^ There are 3 states of promises :
//? resolved / fulfilled
//? rejected / failed
//? pending / waiting 



//^ instance methods
//? then 
//? catch 
//? finally



//! Promise Static Methods :
//^ Promise.all(): It accept an array which consists multiple promises. It resolves when all the promise present 
//^ inside the array is resolved. It rejects when any one of promise 



//^ Promise.allSettled(): It accept an array which consists multiple promises. It returns a new promise.
//^ It wait for all the promise present inside the array to sellted down, and returns the complete information about each promises.



//^ Promise.race(): It accepts an array which consists multiple promises,  it returns a new promise. It returns 
//^ the first settled promise, either it is resolve or it is rejected.


//^ Promise.any(): It accepts an array which consists multiple promises, it returns a new. It returns 
//^ the first resolved promise, if none of the promise is resolved then it throws an aggregate error.


//^===============================================================================================================================================
//^================================================================================================================================================

//! fetch() : It is the inbuilt method, which is used to fetch the data from the api, server or backend.


//! async await :
//& async : It is a keyword which convert a function into asynchronous function.
//& await : It is a keyword which wait for the pormise to settled down. It can be only used within asyn function.


//!================================================================================================


//! web storages are the inbuilt stiorage present inside the broeswer.   
//! there are 2 type of web storages
//? 1. local storages : local storage pursoses the data even after closing the browser.
//?  the size of the local storage is arround 2 to 8 mb depend on the browser.



//^ setItem(): Used to set data inside the local storage 
// localStorage.setItem("id",1)
// localStorage.setItem("Name","Tarun")
// localStorage.setItem("sal",89999)

//^ getItem() : Used to go the data from the local storage.
// let res = localStorage.getItem("Name")
// console.log(res)

//^ removeItem() : Used to remove only some particular data.
// localStorage.removeItem("id")

//^ clear() : Used to clear the complete data from the localStorage.
// localStorage.clear()


//? 2. session storages : sessionStorage pursiss the data only for a particular data the sixe of the sessionStorage is arround 2 to 8 mb depend on the browser.

//^ setItem(): Used to set data inside the local storage 
// sessionStorage.setItem("id",1)
// sessionStorage.setItem("Name","Tarun")
// sessionStorage.setItem("sal",89999)

//^ getItem() : Used to go the data from the local storage.
// let res = sessionStorage.getItem("Name")
// console.log(res)

//^ removeItem() : Used to remove only some particular data.
// sessionStorage.removeItem("id")

//^ clear() : Used to clear the complete data from the localStorage.
// sessionStorage.clear()


