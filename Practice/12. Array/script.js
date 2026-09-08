// ! Array :

//  ! It in non-premitive data type which is use to multiple data inside the single variable of the data store indside the array is knonw as element 
// !  in java script array can be homogenous at an hatrogenous.

// ? literal's way :
// ? Homogenous Array : same line data 
// let arr = [10,20,30,40,50,60];
// console.log(arr);

// ? Haterogenous Array : differnet different data
// let arr = [1, "abc", true, 123n, null, undefined, Symbol("abc"),
//      function(){console.log("function")},["HTML", "CSS", "JS"],{}]

//      ! Read
    //  console.log(arr[1]);
    //  console.log(arr[6]);
    //  arr[7]();
    //  console.log(arr[8][2]);

// ! Update
// let arr = [1, "abc", true, 123n, null, undefined, Symbol("abc"),
//      function(){console.log("function")},["HTML", "CSS", "JS"],{}]

//      console.log(arr);

//      arr[4] = "NewData";

//      arr[10] = "NewData2";
//      console.log(arr);

//      ! Delete 
// let arr = [1, "abc", true, 123n, null, undefined, Symbol("abc")];
    //  console.log(arr)
    //  delete arr[0];
//      delete arr[1];
// console.log(arr);

// arr.unshift("Hello");
// arr.shift();
// arr.push("Hello");
// arr.pop();

// console.log(arr);

//   arr[5] = "NewData2";
//      console.log(arr);


// ! Property of Array :
// ? Length : it gives no of elements present inside the array.
// console.log(arr.lenght);


// ! Ways of creating array :
// ? literal's of way :
// let arr = [1,2,"string", true, null];
// console.log(arr.length)

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

// let arr = [1,2,3,4,5];

// let newArray = (arr.slice(1,3));
// console.log(newArray);
// console.log(arr);

// let res = arr.slice(1,3)
// console.log(res)
// console.log(arr)



//  ? splice : It accepts three arguments starting index, count (no of element wants to delete), new elements  
//  ? that we want to add. It is used to remove, update, as well as add new element in the array. It return new array 
//  ? and it modifies the original array.

// let arr = [1,2,3,4,5];
// let newArray = (arr.splice(1,0,"newData","newData2"));
// console.log(newArray);
// console.log(arr);

// arr.splice(2,1)
// console.log(arr)

// ! Reversed method : reverse the elements in an array in place. This method mutates the array and returns a reference 

// let arr = [10,20,30,40,50];
// let arr2 = [10,20,30,40,50];
// console.log(arr2)
// arr.reverse();
// console.log(arr);



// let arr = [10, 20, 30, 40, 50];
// arr.reverse();
// console.log(arr)




// ! Flat() : It converts multi-dimentional array into single dimentional array. 

// let arr = [1,2,3,[[[[4,5,6,[7,8,9]]]]]];

// console.log(arr.flat(3));
// console.log(arr.flat(Infinity));


// ! some() : It accept callback function as an arrgument, and execute the function for each element 
// !      present inside an array. it returns true, if any one of the alement matches the condition.
// !      If none of the element matched the condition then it returns false.

// let arr = [30,60,90,120,150];

// let result = arr.some((val)=>{
//     return val>50;
// })
// console.log(result);

// ! every() : It accept callback function as an arrgument, and execute the function for each element 
// !      present inside an array. it returns true, only when all the element passes the condition, if any one 
// !    of element present inside the array fails to pass the condition then it returns false.

// let arr = [30,60,90,120,150];

// let result = arr.every((val)=>{
//     return val>20;
// })

// console.log(result);

// let arr = [10,20,30,40,50];

// let res = arr.every((val)=>{
//     return val>30;
// })

// console.log(res);



// ! Push() : It is used to add the elements from the end of the array. It modifies the original array. It returns 
// !       the length of the updated array.

// let arr  = [10,20,30];
// console.log(arr);
// let res = arr.push(40,50,true,"string");
// console.log(res);
// console.log(arr);
// arr.push(700)


// ! pop() : It is used to remove the element from the end of the array.it modifies the original array. It returns the removed element.
// let arr  = [10,20,30];
// console.log(arr);
// let res = arr.pop();
// console.log(res);
// console.log(arr);

// ! shift() : It is used to remove the element from the start of the array. It modifies the original array. It returns the removed element.
// let arr = [10,20,30,40]
// console.log(arr);
// let res = arr.shift();
// console.log(res);
// console.log(arr);

// arr.shift();
// console.log(arr)

// ! unshift() : It is used to add the element from the start of the array,. It modifies the original array. It returns the lenght 0.
//  let arr = [10,20,30,40]
// console.log(arr);
// let res = arr.unshift(10,20,"hello");
// console.log(res);
// console.log(arr);

// arr.unshift(11);
// console.log(arr);



// ! Map() : It is used to iteral and modify the elements of the array. It accepts a callbackfunction, which is executed for all the elements present inside the array.

// let arr = [10,20,30,40,50,60];
// console.log(arr);
// let res = arr.map(m =>{
//       return m + 5;

// });
  

// console.log(res);



// let arr = [10,20,30,40]
// let res = arr.map(function(val){
//     return 25;
// })
// console.log(res)



// ! filter() : It is used to filter an array and returns new array which consists only those element which passes the condition.
// let arr = [1,2,3,4,5,6,7];
// let res = arr.filter( function(val){
//     if(val > 4) return true;
// })

// console.log(res);

// ! reduce() : It always return a single value. it accepts teo arrguments callback function, and initial data which is optinal.
// ? accumulator : it is the total result given by the reduce method.
// ? current Val : it store each element present inside an array.
// ^ syntax : arr.reduce(callback,initialVal);

// let arr = [1,2,3,4,5,6,7,8,9];

// let res = arr.reduce((acc,currentVal)=>{
//     return acc+currentVal;

// },10);
// console.log(res);


//^ for each
// let arr = [1,2,3,4,5]
// arr.forEach(function(val){
//     console.log(val+10)
// })



//^ sort 
// let arr = [11,62,2,5,7]
// arr.sort(function(a,b){
//     return a - b;
// })
// console.log(arr)


//^ find 
// let arr = [
//     { id: 1, key:1},
//     { id: 2, key:2},
//     { id: 3, key:3},
// ];

// let va = arr.find(function(val){
//     return val.key === 1;
// })
// console.log(va)
// console.log(va)
// console.log(va)



//^ spred destructuringg
// let arr = [1,2,3,4,5]
// let [a,b,c] = arr;
// console.log(arr)
// 



// /& spred operator 
// let arr = [1,2,3,4,5]
// let arr2 = [...arr];
// console.log(arr2)
// console.log(arr)
// arr.pop()
// console.log(arr)


// 🔥 CRUD Operation Coding Practice — 10 Questions
// 1. Delete a Product from an Array

// Given an array of products, delete the product whose id matches deleteId.

// Input:

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ];
//  const abc = products.filter(product => product.id !==2 )
//  console.log(abc)

// Expected Output:

// [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ]

// 2. Update a Product

// Update the price of the product whose id = 2 to 1200.

// Input:

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 }
];

// const updateId = 2;

const newPrice = products.map(product => product.id === 2 ? 
    {...products, price:1200}:product)
console.log(newPrice)

// Expected Output:

// [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 1200 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ]

// 3. Search Users — String + Array

// Given a list of users, find all users whose name contains "rah". The search should be case-insensitive.

// Input:

// const users = [
//   { id: 1, name: "Rahul" },
//   { id: 2, name: "Amit" },
//   { id: 3, name: "Rohan" },
//   { id: 4, name: "Sourav" }
// ];

// const search = "rah";

// Expected Output:

// [
//   { id: 1, name: "Rahul" }
// ]

// 4. Add a New Product

// Add a new product to the existing product array.

// Input:

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 }
// ];

// const newProduct = {
//   id: 3,
//   name: "Keyboard",
//   price: 1500
// };

// Expected Output:

// [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ]
// 5. Remove Duplicate Users

// If multiple users have the same email, keep only the first user.

// Input:

// const users = [
//   { id: 1, name: "Rahul", email: "rahul@gmail.com" },
//   { id: 2, name: "Amit", email: "amit@gmail.com" },
//   { id: 3, name: "Rahul 2", email: "rahul@gmail.com" }
// ];

// Expected Output:

// [
//   { id: 1, name: "Rahul", email: "rahul@gmail.com" },
//   { id: 2, name: "Amit", email: "amit@gmail.com" }
// ]
// 6. Cart Operation — Add / Update Quantity ⭐

// Given a shopping cart:

// If the product already exists, increase its quantity by 1.
// If it does not exist, add it to the cart.

// Input:

// const cart = [
//   { productId: 1, name: "Laptop", quantity: 1 },
//   { productId: 2, name: "Mouse", quantity: 2 }
// ];

// const product = {
//   productId: 2,
//   name: "Mouse"
// };

// Expected Output:

// [
//   { productId: 1, name: "Laptop", quantity: 1 },
//   { productId: 2, name: "Mouse", quantity: 3 }
// ]
// 7. Remove a Product from Cart

// Remove the product whose productId matches removeId.

// Input:

// const cart = [
//   { productId: 1, name: "Laptop", quantity: 1 },
//   { productId: 2, name: "Mouse", quantity: 3 },
//   { productId: 3, name: "Keyboard", quantity: 2 }
// ];

// const removeId = 2;

// Expected Output:

// [
//   { productId: 1, name: "Laptop", quantity: 1 },
//   { productId: 3, name: "Keyboard", quantity: 2 }
// ]
// 8. Update Student Marks + Filter

// Update the marks of the student whose id = 1 to 55.

// Then return only students whose marks are >= 40.

// Input:

// const students = [
//   { id: 1, name: "Rahul", marks: 35 },
//   { id: 2, name: "Amit", marks: 70 },
//   { id: 3, name: "Riya", marks: 45 }
// ];

// const updateId = 1;
// const newMarks = 55;

// Expected Output:

// [
//   { id: 1, name: "Rahul", marks: 55 },
//   { id: 2, name: "Amit", marks: 70 },
//   { id: 3, name: "Riya", marks: 45 }
// ]
// 9. Update a Nested Object

// Update the city inside a user's address object.

// Input:

// const user = {
//   id: 1,
//   name: "Rahul",
//   address: {
//     city: "Kolkata",
//     pin: 700001
//   }
// };

// const newCity = "Delhi";

// Expected Output:

// {
//   id: 1,
//   name: "Rahul",
//   address: {
//     city: "Delhi",
//     pin: 700001
//   }
// }
// 10. 🔥 Complete CRUD — E-commerce Product

// This is the most important one.

// Perform these 4 operations:

// Create → Add a new product
// Update → Update a product by id
// Delete → Delete a product by id
// Read/Filter → Get products whose price is greater than 1000

// Initial Input:

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ];

// Step 1 — Add:

// { id: 4, name: "Monitor", price: 10000 }

// Step 2 — Update:

// id = 2
// price = 1200

// Step 3 — Delete:

// delete id = 3

// Step 4 — Filter:

// price > 1000

// Expected Final Output:

// [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 1200 },
//   { id: 4, name: "Monitor", price: 10000 }
// ]