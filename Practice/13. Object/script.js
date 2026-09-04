// ! Object : it is non premitive datatypes which is used to store the data in the form of key and value pairs.
// ? key and value pairs is seprated by using column.
// ? key and value pairs together is known as property and multiple property separated by commas.

// ! Create :

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

// ! Read :

// console.log(obj);
// console.log(obj.isTester);
// obj.printName();
// console.log(obj.objName);
// console.log(obj.skills[1]);
// console.log(obj.addres.city);


// ! Update :

// console.log(obj);
// obj.isTester = false;
// console.log(obj);

// objnewProp = "newvalue";
// console.log(obj);


// ! Delete

// delete obj.isTester;
// delete obj.isDev;
// console.log(obj);

// ! Constructor's way :
// let obj = new Object({id : 1, objName : "tarun"});
// console.log(obj);

// ! Constructor function :

// function ObjConstructor(id,name){
//     this.empId = id
//     this.empName = name
//     this.sal = 23000
// }
// let obj = new ObjConstructor(1, "abc")
// console.log(obj);


// ! this keyword : It is a pointing mechanism, which points to the curret context of object.
// & Inside name function the value of this keyword, in non -strict mode, will points to the window.
// & Inisde name function the value of this keyword, in case of strict mode, will points to the undefined.

// console.log(this)


// function abc (){
//     "use strict"
//     console.log(this)
// }
// abc()                        // undefined



// "uuse strict"
// b = 200;
// console.log(b)





// var empName = "abc";

// let obj = {
//     empName : "xyz",
//     val : this,    // window
//     printName : function(){
//         console.log(this.empName)
//     },
//     printName2 : ()=>{
//         console.log(empName)
//     }
// }

// console.log(obj.val);
// obj.printName()
// obj.printName2()



// ! method's of object :

// let obj ={
//     id : 1,
//     objName : "abc",
//     sal : 12344

// }


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

// let obj ={
//     id : 1,
//     objName : "abc",
//     sal : 12344

// }
 // Object.freeze(obj);
// console.log(obj);


// & Update ---> not possoble
// obj.objName = "newVal"
// & addition ---> not possible
// obj.newProp = "newVal";
// & deletion ---> not possible
// delete obj.id;





// ! Object.isFrozen() : returns boolean value, used to check wheater object is freezed or not.
// let obj ={
//     id : 1,
//     objName : "sandeep",
//     sal : 2000

// }

// Object.freeze(obj)

// console.log(Object.isFrozen(obj));



// ! Object.isSealed() : Doesnot prevents, the modification of existing property, and prevents the addition of new
// ! properties, prevent the deletion of existing properties.

// let obj ={
//     id : 1,
//     objName : "sandeep",
//     sal : 2000

// }
// Object.isSealed(obj);
// console.log(obj);


// & Update --->  possoble
// obj.objName = "newVal";
// & addition ---> not possible
// obj.newProp = "newVal";
// & deletion ---> not possible
// delete obj.id;



// ! Object.assign(destination,source) : Copy of the values of all properties from one or more source 
// ! object to a target object. Returns the target object.

// let obj = {
//     id : 1,
//     objName : "asdf",
//     sal : 12344

// }
// let obj2 = {
//     isDev : true
// }
// let obj3 = {
//     address : "abc"
// }
// let newObj = Object.assign({},obj,obj2,obj3);
// console.log(obj);




//! Shallow copy : Copies the main container but shares the nested items. Changing a nested item in the copy will change the original.

// let obj = {
//     id : 1,
//     objName : "abc",
//     isDev : true,
//     address : {
//         street : "A",
//         pin : 12345,
//         city : "Delhi"
//     }
// }
 
//^ 1st way 
// let newObj = {...obj}

//^ 2nd way
// let newObj = Object.assign({},obj)

// newObj.objName = "newData"
// newObj.address.city = "Bangalore"

// console.log("original",obj)
//  console.log("new",newObj);


//! Deep copy : Copies the container and duplicates all nested items. the copy is 100% independent. changing the copy never affects the original.

//? JSON.stringify() : Inbuilt method in JS that converts JS object into JSON.

//? JSON.parse() : Inbuilt method in js that converts JSON into object.
//^ 1st way 
// let newObj = JSON.parse(JSON.stringify(obj))

//^ 2nd way 
// let newObj = structuredClone(obj);

// newObj.id = 1000

// newObj.address.city = "Gurugram"


// console.log("original",obj)
// console.log("new",newObj)












