//! Event Handler in javascript 
// event handler are special arrtibute which is used to call a function when the user perform the action 
// all event handler prefix it all keyword.


//! Types of Event Handler
//? click Event : onClick , ondblClick 
//? from Event : onSubmit 
//? mouseEvent : onMouseMove, onMouseUp, onMouseDown, onMouseHover
//? Keyboard Event : onKeypress, onkeydown, onkeyup
//? input Event : onfocus, onblur, onchange

// function abc(){
//     console.log("Btn is clicked")
// }





// let i = 0;
// function mouseMove(){
//     console.log(i)
//     i++;
// }




// function changeMode(){
//     let body = document.querySelector('body')
//     body.style.backgroundColor = "black"
// body.style.color = "white"
// }


// function changeMode(){
//     let body = document.querySelector('body')
//     body.classList.toggle('mode')
// }


// function changeMode(){
//     let body = document.querySelector('body')
//     body.classList.toggle('mode')

//     let btn = document.querySelector('button')
//     if(btn.innerText == "Dark Mode"){
//         btn.innerText = "LigthMode"
//     }else{
//         btn.innerText = "Dark Mode"
//     }
// }

//    let sp = document.querySelector('span')

// sp.style.fontSize = "2rem"

// function tarun (){
//     let res = document.querySelector('input')
//    let btn = document.querySelector('button')
//    let sp = document.querySelector('span')
//   let resverse = res.value.split("");
//   let abc = resverse.reverse().join("")
//    sp.innerText = abc
// }



//& ===========================================================================================================

// function varun(){
//     let res = document.querySelector('input')
//     let btn = document.querySelector('button')
//     let sp = document.querySelector('span')
//     let varr = res.value.split('')
//     let tar = varr.reverse().join("")
//     sp.innerText = tar
// }








// img 























// let h1 = document.querySelector("h1")
// h1.style.color = "blue" 
// h1.style.backgroundColor = "black"


// let h1 = document.querySelector("h1")
// h1.classList.add("huhu")
// h1.classList.remove("huhu")
// h1.classList.toggle("huhu")









//^==================================================================================================
//*=============================================================================================================================
//? h1 :-
// let h1 = document.querySelector("h1")
// h1.addEventListener("click", function(){
//     h1.style.color = "red"
// })



//? p :-

// let p = document.querySelector("p")
// p.addEventListener("dblclick", function(){
//     p.style.color ="brown";
// })



//& add remove :-

// let p = document.querySelector("p")
//  function abc(){
//     p.style.color ="brown";
// }
// p.addEventListener("dblclick",abc)
// p.removeEventListener("dblclick",abc)



//? input :-

// let input = document.querySelector("input")

// input.addEventListener("input", function(dets){
//     if(dets.data !== null){
// console.log(dets.data)
//     }
// })



//? change :-


// let sel = document.querySelector("select")
// let device = document.querySelector("#device")
// sel.addEventListener("change", function(dets){
  
//     device.textContent = `${dets.target.value} Device Selected`
// })



//?  A
// let h1 = document.querySelector("h1")
// window.addEventListener("keydown", function (dets){
//     if(dets.key === " "){
//  h1.textContent = "SPC"
//     }else{
//     h1.textContent = dets.key
//     }
// })









