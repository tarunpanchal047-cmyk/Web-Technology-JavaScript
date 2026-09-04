
//! fetch() : It is the inbuilt method, which is used to fetch the data from the api, server or backend.

// let res = fetch('https://api.github.com/users')
// res.then((data){
//     return data.json()
// }).then((actualData)=>{
//     console.log(actualData)
// }).catch((err)=>{
//     console.log(err)
// })




//! async await :
//& async : It is a keyword which convert a function into asynchronous function.
//& await : It is a keyword which wait for the pormise to settled down. It can be only used within asyn function.

// async function abc(){
// let res = await fetch('https://api.github.com/users')
// let actualRes = await res.json()
// console.log(actualRes)
// }

//!================================================================================================
// let form = document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     // e.preventDefault()
//     let mail = document.getElementsByTagName('input')[0].value
//     console.log(mail)
//     let pass = document.getElementsByTagName('input')[1].value
//     console.log(pass)
//     let confirmPass = document.getElementsByTagName('input')[2].value
// console.log(confirmPass)
//     if(pass === confirmPass){
//         alert("SignUp Successfully")
//     }else if(pass=="" &&){



//     }
//         else{
//         alert("Please try again...")
//     }
// })