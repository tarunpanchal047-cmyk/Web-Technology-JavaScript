//? emporal Dead Zone (TDZ) in JavaScript – Full Explanation

//! Definition

// Temporal Dead Zone (TDZ) is the time between entering a block scope and the line 
// where a let or const variable is declared.

//^ During this period:

// The variable exists in memory.
// But it cannot be accessed.
// If you try to access it, JavaScript throws a ReferenceError.

//! Simple Definition (Interview):

// Temporal Dead Zone (TDZ) is the period from the start of a block until a let or const variable
//  is initialized. Accessing the variable during this period results in a ReferenceError.

//? Block Starts 
//      |
//      |
//      |------ TDZ ------
//      |
// console.log(a) ❌
//      |
// let a = 10
//      |
// TDZ Ends
//      |
// a = 10 ✅



// `var me nhi hota hai `
// let or const me hota hai 

// console.log(a);         // reference error : a is not defined 


// console.log(a);

// let a = 12;              // reference error: Cannot access 'a' before initialization


