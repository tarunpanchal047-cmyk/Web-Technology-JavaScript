
//^=========================================================================================================================================================================================
//=========================================================================================================================================================================================
//=========================================================================================================================================================================================

//! BOM / Window : BOM stand for Browser Obectj Model.
//! Whenever we open any browser the browser .it self consider as an object this object is known as BOM.
//! The another name of BOM is window. It is the global obj in the forentend JS.
//? Some main Object present inside the BOM is :
// Document (DOM)
// Navigator 
// Location
// Screen
// History 


//! DOM Stands for Document Object Model.
//! Whenever we run html code the browser inside the browser. browser create this tree like structure is known as DOM TREE.
//! Inside the dom tree all the html elelement are represented in form of Nodes 
//! this dom tree is created to manupulate the html to the javascript.(manupulate means adding the element removing the element, adding the attribue removing the attribute,
//!     adding the styling and removing the style )



//? Methods for accessing html element 
//^ getElementById() : used to target html element based on the id attribute. In this method there is no need 
//^ of using the symbols.
// let res = document.getElementById('head1')
// console.log(res)

//^ getElementByClassName() : used to target html element based on the class attribute. It targets all the matching html
//^ elements have the same class attribute. It stores all  the targetted element inside an array like object known as HTMLCollection.
// let res = document.getElementByClassName('.developer')
// console.log(res)

//^ getElementByTagName() : used to target html element based on their tag name. It targets all the matching html
//^ elements have the same tag. It store all the targetted element inside an array like object known as HTMLCollection.
// let res = document.getElementByTagName('p')
// console.log(res)

//^ querySelector() : used to target html element based on id, class attribute as well as tagName. It target only 
//^ the first matching element. In this method we have to use the symbols for id(#) and class(.)
// let res = document.querySelector('#head')
// console.log(res)

// let res1 = document.querySelector('.developer')
// console.log(res1)

// let res2 = document.querySelector('p')
// console.log(res2)

//^ querySelectorAll() : used to target html element based on id, class attribute as well as tagName. It target all the 
//^  matching element.inside an array like object known as NodeList. In this method we have to use the symbols for id(#) and class(.) also.
// let res = document.querySelectorAll('#head')
// console.log(res)

// let res1 = document.querySelectorAll('.developer')
// console.log(res1)

// let res2 = document.querySelectorAll('p')
// console.log(res2)



//! manupulating attribute through JS :

// let inp = document.querySelector('input')

//^ getting attribute value 
// console.log(inp.placeholder)
// console.log(inp.type)

//^ updating attribute 
// inp.type = 'password'

//^ adding new attribute 
// inp.minLength = 10

//^ getAttribute() : inbuilt method in js used to get the values of attributes present inside the html.
// console.log(inp.getAttribute('type'))
// console.log(inp.getAttribute('placeholder'))

//^ setAttribute() : inbuilt method in js used to get the values of attributes present inside the html as well as
//^ adding new atrributes.
// inp.setAttribute('type',"password")
// inp.setAttribute('minLength',"10")
// console.log(inp)


//! Accessing content in DOM :

// let ele = document.querySelector('.box')

//^ innerHTML : It returns content as well as tags at it written inside the html.
// console.log(ele.innerHTML)
//^ innerText : It returns all content present inside the targetted element.
// console.log(ele.innerText)
//^ textContent : It returns content as well as extra spaces as it  is written in the html structure.
// console.log(ele.textContent)