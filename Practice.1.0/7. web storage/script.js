

//! web storages are the inbuilt stiorage present inside the broeswer.   
//! there are 2 type of web storages
//? 1. local storages : local storage pursoses the data even after closing the browser.
//?  the size of the local storage is arround 2 to 8 mb depend on the browser.



//^ setItem(): Used to set data inside the local storage 
// localStorage.setItem("id",1)
// localStorage.setItem("Name","Tarun")
// localStorage.setItem("sal",89999)

//^ getItem() : Used to go the data from the local storage.
// let res = localStorage.getItem("Name")
// console.log(res)

//^ removeItem() : Used to remove only some particular data.
// localStorage.removeItem("id")

//^ clear() : Used to clear the complete data from the localStorage.
// localStorage.clear()


//? 2. session storages : sessionStorage pursiss the data only for a particular data the sixe of the sessionStorage is arround 2 to 8 mb depend on the browser.

//^ setItem(): Used to set data inside the local storage 
// sessionStorage.setItem("id",1)
// sessionStorage.setItem("Name","Tarun")
// sessionStorage.setItem("sal",89999)

//^ getItem() : Used to go the data from the local storage.
// let res = sessionStorage.getItem("Name")
// console.log(res)

//^ removeItem() : Used to remove only some particular data.
// sessionStorage.removeItem("id")

//^ clear() : Used to clear the complete data from the localStorage.
// sessionStorage.clear()

//????????????????????????????????????????????????????????????????????????????????????


let name = document.querySelector("#name")
let form = document.querySelector("form")

form.addEventListener("submit", function(dets){
    dets.preventDefault()
    if (nm.value.length <= 2){
console.log(form)
    }
})






















