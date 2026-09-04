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
//      console.log(arr)
//      delete arr[0];
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




//& spred operator 
// let arr = [1,2,3,4,5]
// let arr2 = [...arr];
// console.log(arr2)
// console.log(arr)
// arr.pop()
// console.log(arr)


