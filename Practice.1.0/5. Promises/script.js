
//! Promise : It is a object. it tells completion or faliure of a synchronous task.

//^ There are 3 states of promises :
//? resolved / fulfilled
//? rejected / failed
//? pending / waiting 

// let p1 = new Promise((resolve,rejected)=>{
    // resolve('p1 is resolved')
    // rejected('p1 is rejected')
// })
// console.log(p1);

//^ instance methods
//? then 
//? catch 
//? finally

// p1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally")
// })

//!==================================================================================================================

// let p1 = new Promise((res,rej)=>{
//     res('p1 resoleved')
//     setTimeout(()=>{
//         res('p1 is resolved')
//     },4000)
// })
//     let p2 = new Promise((res,rej)=>{
//     res('p2 resoleved')
//     rej('p2 rejected')
//     setTimeout(()=>{
//         res('p2 is rejected')
//     },1000)
//     })
//     let p3 = new Promise((res,rej)=>{
//     res('p3 resoleved')
//     setTimeout(()=>{
//         res('p3 is resolved')
    
// })
// })

//! Promise Static Methods :
//^ Promise.all(): It accept an array which consists multiple promises. It resolves when all the promise present 
//^ inside the array is resolved. It rejects when any one of promise 

// let pTotal = Promise.all([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


//^ Promise.allSettled(): It accept an array which consists multiple promises. It returns a new promise.
//^ It wait for all the promise present inside the array to sellted down, and returns the complete information about each promises.

// let pTotal = Promise.allSettled([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//^ Promise.race(): It accepts an array which consists multiple promises,  it returns a new promise. It returns 
//^ the first settled promise, either it is resolve or it is rejected.
// let pTotal = Promise.race([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

//^ Promise.any(): It accepts an array which consists multiple promises, it returns a new. It returns 
//^ the first resolved promise, if none of the promise is resolved then it throws an aggregate error.
// let pTotal = Promise.any([p1,p2,p3])
// pTotal.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
