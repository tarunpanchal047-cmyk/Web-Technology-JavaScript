
//^ ===============================================================================================================


//~! add event listner : it is a method in javascript which is used to call a function when the user perform some event
//! in aaccept three argument.
//  function abc(){
//     console.log('click')
 
// }

// let btn1 = document.querySelector('button')
// let btn2 = document.querySelectorAll('button')[1]
// let btn3 = document.querySelectorAll('button')[2]
// btn1.addEventListener('click',abc)
// btn2.addEventListener('click',abc)
// btn3.addEventListener('click',abc)




//! the first event with out on keyword 
//! the second argument is the call back function
//! and the third argument is the boolean value event bublling event capturing 

//! event propogation : the process of calling and event is known as propogaiton 
// there are two types of event propogation 
//? 1. event bubbling : event bubling the process of calling innner event first and the out of the by default all event handler event bubbling


//? 2. event capturing :
//? the process of calling outer event first and then the inner event is known as event capturing
//? if we went to make over to perform of caturing then we have to pass true as the last argument and the event lishner




// let h1 = document.querySelector("h1")
 // console.log(h1)
// h1.classList.add("kejioj")


// let btn = document.querySelector("button")
// btn.addEventListener(`click`,()=>{
// console.log("btn clicked")
// }
// )




// let grantparent = document.querySelector(".grantparent")
// grantparent.addEventListener(`click`,()=>{
//     console.log(" click grentparent")
// },true)
// let parent = document.querySelector(".parent")
// parent.addEventListener(`click`,()=>{
//     console.log(" click parent")
// },true)
// let child = document.querySelector(".child")
// child.addEventListener(`click`,()=>{
//     console.log(" click child")
// },true)

//! timing function
//^ setTimeout() : It accepts two arguments , first argument is the callback fucntion which we wants to execute 
//^  and second argument is the tine in millisecond. It automatically execute the callback function after given me time.
//^ It executes the callback function only once.

//^ clearTime() : It accepts one argument ie; reference of the setTimeout, which we wants 
//^ to stop. It is used to clear the setTimeout()

// console.log("task1");
// console.log("task2");

// let clearTime = setTimeout(()=>{
//     for(let i=0; i=10000000; i++){}
//     console.log("timing function")
// })

// console.log("task3");
// console.log("task4");

// document.querySelector('button').addEventListener('click',function(){
//     clearTimeout(clearTime)
//     alert('function cancelled')
// })



//! setInterval :
//^ it accepts two arrgument first argument is the callback function second argument is the time
// in millisecond. It executes the callback function after every span of time.
// To stop the setInterval, we uses clearInterval, which accepts the reference of the setInterval


// let i = 0
// let clear = setInterval(()=>{
//     console.log('Time',i++)
// },1000)


// document.querySelector('button').addEventListener('click',function(){
//     clearInterval(clear)
//     alert('function cancelled')
// })



//*=============================================================================================================================
// let h1 = document.querySelector("h1")
// h1.addEventListener("click", function(){
//     h1.style.color = "red"
// })





// let p = document.querySelector("p")
// p.addEventListener("dblclick", function(){
//     p.style.color ="brown";
// })



//& add remove 

// let p = document.querySelector("p")
//  function abc(){
//     p.style.color ="brown";
// }
// p.addEventListener("dblclick",abc)
// p.removeEventListener("dblclick",abc)
