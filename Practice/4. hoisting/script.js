
//! Hoisting :

//^  Hoisting before declaration and intilization if we are trying to access in the value of a variable that is known as hoisting.
//^  it is the default javascript behaviour that move all the variable declareation to the top of the scope.
//^  if we are trying to hoist the variable that is declared by that using var keyword that it will gives undefined.
//^  if we are trying to hoist the variable that is declaered by using let and const keyword then the output will be uncaught reference error.
//^  Because the variable went into a dead zone which is known as TDZ (temporal dead zone).

//? One
// var a;

// console.log(a)
// console.log(b)

// var a = 100;
// let b = 200;
// const c = 300;

//? Second
// var a = 10;

// function abc(){
//     console.log(a)     // undefined
//     var a = 10000;

//     console.log(b)
//     let b = 10000;      // uncauth referece error (TDZ)
//     console.log(a)      // 10000
//     console.log(b)           // 10000
//     a++
// }
// console.log(a)
// abc()
// console.log(a)




// var a = 12;
// {
//      var a = 13;
// }
// console.log(a);             // 13



//!

// console.log(a);
// var a = 12;


// console.log(b);
// let b = 12;



// console.log(c);
// const c = 14;



// var a = undefined

// console.log(a);
//  a = 12;               // error


//  var --> hoist --> undefined
//  let --> hoist --> x

//  const --> hoist -->  x
