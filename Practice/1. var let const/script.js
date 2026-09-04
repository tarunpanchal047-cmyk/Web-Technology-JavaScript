


//! TOKEN : Smallest individual unit of program.

//! Variable rules : 
//! 1. Variable names are case sensitive "a" and "A" is different.
//! 2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
//! 3. Only a letter, underscore(_) or $ should be 1st character.
//! 4. Reserved words cannot be variables names.

//! VARIABLE:
    //~ Variables is a just like a container which is used to store the data. It will be change.
    //~ There are three types of variabile :
        //* VAR
        //* LET
        //* CONST

     //^ VAR : A function-scoped variable that can be re-declared and re-assigned.
        //? declaration --> possible
            //var abc;
        //? initialization --> possible
            //abc = 10;
        //? Declaration & Initialization (same) --> possible
            //var a = 100;
        //? Re-Declaration; --> possible
            //var a = 1000;
        //? Re-Initialization --> possible
            //a = "abc";
    
    //^ LET : A block-scoped variable that cannot be re-declared in the same scope but can be reassigned.
        //? declaration --> possible
            //let abc;
        //? initialization --> possible
            //abc = 10;
        //? Declaration & Initialization (same) --> possible
            //let a = 100;
        //? Re-Declaration; --> Not possible
            //let a = 1000; //not possible
        //? Re-Initialization --> possible
            //a = "abc";

    //^ CONST : A block-scoped variable that cannot be re-declared or reassigned after initialization.
        //? declaration --> Not possible
            //const abc; //not possible
        //? initialization --> Not possible
            //abc = 10; //not possible
        //? Declaration & Initialization (same) --> possible
            //const a = 100; //possible
        //? Re-Declaration; --> Not possible
            //const a = 1000; //not possible
        //? Re-Initialization --> Not possible
            //a = "abc"; //not possible








            //? QQQQQQQQQQQ

// a = 12; // bug    // 12


// console.log();
// var abc;           // undefined 


// var a = 10;
// console.log(a);    // 10

// var a = 10;      // declare and initilization
// var a = 10;         // 10 
// console.log(a);


// console.log(a);
// var a;          // declare karna      
// var a;              //undefined 


// var username = "Tarun";
// console.log(username);         // Traun




// var num = ((123*12-39)%45)*122;
// console.log(num);                       //5124



// var a = 12;  // window me add hota hai 
// var a = 13;    // no error 


// let a = 12;      // ye window me add nhi hota 
// let  a = 14;      // SyntaxError: Identifier 'a' has already been declared


// let a = 10;            // declare and initilization
// console.log(a);      // 10



// console.log(a);      // declare karna 
// let a;                    // ReferenceError: Cannot access 'a' before initializatio


// let num = 12;
// console.log(num);        // 12

// let dulha = " lab";
// let dulhan = "laby";
// console.log(dulha);          // lab      this name will be change in let 


// const dulha = " lab";
// const dulhan = "laby";
// console.log(dulha);        // lab



// dhula = "haramjayda";       let me value badal sakhte hai 
// 'haramjayda'




// let a = 12;
//  var b = 13; 
// console.log(a)
// console.log(b)




