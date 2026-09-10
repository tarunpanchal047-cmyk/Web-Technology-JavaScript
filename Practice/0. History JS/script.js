 
//! JAVASCRIPT
//~ Javascript is a programming language. We use it to given instructions to the compiler.
//~ It is used to add dynamic functionality to our website.
//~ Examples : Include fetching the data from an API, authentication, and authorization.
//~ It is a scripting as well as a programming language.
//~ It is an object-based programming language.
//~ It is a partially object-oriented programming language because JavaScript uses prototypal inheritance.

    //^ History of JS
    //~ It was developed in September 1995 by Brendan Eich in only 10 days.
    //~ Initially, it was named Mocha. Then, the name was changed to LiveScript.
    //~ Again, for marketing purposes, the name was changed to JavaScript because at that time Java was a very popular language. 
    //~ To get the popularity of Java, the owner of Java (Sun Microsystems) and the owner of JavaScript (Netscape Corporation) together 
    //~ made an agrement and then the name was changed into JavaScript.
    //~ Again, in 1997, JavaScript became ECMA Script. ECMA stands for European Computer Manufacturers Association.
    //~ Then, different versions of ECMAScript were released. The latest version of ECMAScript is ECMAScript 2026.
    //~ The famous versions of ECMAScript are: ES6, ES7 and ES9.

        //^ Feature of ECMA Script
                //* Let keyword
                //* const keyword
                //* Arrow function
                //* Promises
                //* Symbols
                //* Async, Await
                //* map, filter , reduce
                //* spread operator
                //* rest parameter etc.
 
        //^ Featuers of JavaScript
                //* Dynamic In nature
                    //~ Variables are not bound to store specific data, inside one variable, you can store any type of data.
                //* Interpreted 
                    //~ It means the JS code will be checked line by line from top to bottom, left to right.
                //* Synchronoused 
                    //~ The code will be executed line by line from top to bottom, left to right.
                //* Signle theraded
                    //~ It means the JS engine will execute only one task at a time. After completing the previous statement, only then the next line of code will be executed. But we can make JavaScript change from synchronous to asynchronous by using Promises and async/await.
                //* Weekly and lossely type programming language
                    //~ It means a semicolon is not mandatory at the end of every line, but if you are writing multiple statements on the same line, then you have to put a semicolon.
//-----------------------------------

    //console.log("hello js");
    // console.log("helo");
    //console.log(window);
    // console.log(window);
    //console.log(this);

//~ Dynamic in nature
    // let data = "Hello"; // Pehle string hai
    // data = 45; // Ab number ban gaya (No error)

    // let data = "Hello";
    // console.log(data);
    // data = 23;
    // console.log(data);

//~ Synchronous
    // console.log("taks 1");
    // console.log("taks 2");
    // for(i=0; i<=1000000000; i++){
    //   console.log(i);
    // }
    // console.log("taks 4");
    // console.log("taks 5");

    // console.log("task 1");
    // console.log("task 2");
    // for(i=0; i<=1000; i++){
    //     console.log(i);
    // }
    // console.log("task 3");
    // console.log("task 4");


    // console.log("Statement 1")
    // console.log("Statement 2")
    

//~ Weakly and loosely typed programming language
    // let a = 10 // Semicolon nahi lagaya, fir bhi chalega
    // let b = 20; let c = 30; // Ek hi line mein multiple statements hain, toh semicolon zaroori hai