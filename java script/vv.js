// let obj = {
//     id : 1,
//     objName : "tarun",
//     sal : 98456,
//     isDev : true,
//     isTester : null,
//     isMarried : undefined,
//     printName : function(){
//         console.log("funciton");
//     },
//     skills : ["HTML","CSS","JS"],
//     addres : {
//         city : "delhi",
//         street : "A",
//     }
// }
// console.log(obj.addres.street)
// console.log(obj.skills[1])
// // console.log(obj.printName)
// let a =obj.printName;
// // console.log(a())
// a();

// let arr = [1,2,3,5,6];
// console.log(arr)
// //add 
// arr.push(99);
// console.log(arr)
// //delete
// arr.unshift(100);
// console.log(arr)
// arr.shift(100);
// console.log(arr)
// arr.pop(100);
// console.log(arr);






let arr = [1,2,3,4,5];
// let newArray = (arr.slice(3));
// console.log(newArray);
// console.log(arr);

//splice
//delete
// console.log(arr.splice(1))
// console.log(arr)
// add 
// console.log(arr.splice(2,2,55)); //3,4
// console.log(arr)
//update
console.log(arr.splice(1,2,100,200));
console.log(arr)