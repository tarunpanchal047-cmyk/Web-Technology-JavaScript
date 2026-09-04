
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

// console.log(String.prototype);
// console.log(Array.prototype);
// console.log(Object.prototype);

// let str = "string";
// console.log(str.__proto__);


// let arr = []
// console.log(arr.__proto__);


// console.log(String.prototype === str.__proto__);

//? inheritance

// console.log(window.__proto__.__proto__.__proto__.__proto__.__proto__);