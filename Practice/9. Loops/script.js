
//     ! LOOPS in javascript : A loop is a control statement used to execute a block of code repeatedly until a specified condition becomes false.
 
// for (start; end; change){

// }


//     ? 1. for loop : The for loop is used when you know how many times you want to repeat the code.

//     for(let i=0; i<=10; i++){
//         console.log(i);
//     }

//     ? 2. while : The while loop executes the code as long as the condition is true.
// satrt 
// while(end){
       //code
//     change
// }


//     let i=10;
//         while(i<=15){
//         console.log(i);
//         i++
//     }

//     ? 3. do-while : The do...while loop executes the code at least once, even if the condition is false.
// start 
// do{
    
// }
// while(end);



//     let i=0;
//     do{
//         console.log(i);
//         i++
//     }
//     while(i<=10);


//! break :
// for (let i=1; i<=201; i++)
//     {
//         console.log(i);
//         if(i === 32){
// break;
//         }
       
//     }

    //! Continue :
// for (let i=1; i<=201; i++)
//     {
       
//         if(i === 32){
// continue;
//         }
//         console.log(i);
//     }







//     !  Output method in JS
//     ? console.log() : It is used for testing purpose.
    // console.log("Statement1");

//     ? document.writeln() : It is used to display the data on the UI.
    // document.writeln("Statement2");

//     ? alert() : It is a popup to methid in JS.
    // alert("Password not matching");

//     ? confirm() : It is another popup method, in which two options are present.
    // let res = confirm("Are you 18+")
    // console.log(res);


//     ? prompt() : It is a popup method, which is used to take the input from the user. It type case the data entered througgh prompt into string type.

    // let no1 = Number(prompt("Enter No 1"));
    // let no2 = parseInt(prompt("Enter No 2"));

    // console.log(no1 + no2);


//     ! PreseInt : Only take no if you enter number and string it contain only no avoid string.
    // let res1 =  parseInt(prompt("enter no"));
    // console.log(res1);

    // let num4 = parseInt(prompt("enter num4"));
    // let num5 = parseInt(prompt("enter num5"));
    
    // console.log(num4 + num5);










    
// for( let i=1; i=10; i++  ){
//     console.log(i)
// }



// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }


// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=15)





















//! EVENT LOOP :
            //~ Event loop is a mechanism in Javascript that continuously checks :
                //~ --> Whether the call stack is empty and moves tasks from queues to the stack for execution.
                //& Call Stack : 
                    //~ A data structure where JavaScript executes code line by line(LIFO- Last In First Out).
                
                //& Web APIs :
                    //~ Features provided by the browser(not JS itself) to handle async tasks like:
                        //* SetTimeout
                        //* DOM ecents
                        //* API calls

                //& callback queue(Task Queue):
                    //~ A queue where callbacks from async operations wait before execution.

                //& Microtask Queue :
                    //~ A high-Priority queue for : Promises(.then)

                    //&Event Loop is a process that : 
                        //? Checks if call stack is empty
                        //? First executes Microtasks
                        //? Then executes callback Queuue tasks


        //!--
        
        /*
            console.log("Start");

            setTimeout(()=>{
                console.log("TimeOut1");

                Promise.resolve().then(()=>{
                    console.log("Promise2");
                })
            },0);

            Promise.resolve().then(()=> {
                console.log("Promise2");

                setTimeout(()=>{
                    console.log("TimeOut2");
                },0)
            });

            console.log("End");

            //^output is :
                //   Start
                // End
                // Promise2
                // TimeOut1
                // Promise2
                // TimeOut2
            
            */

           //!--
           /*
                    for(var i = 0; i<4; i++){
                    setTimeout(()=>{
                        console.log(i);
                    },0)
                }

                //^output is 
                // four times 4

            */


            //!----

        
            // console.log("A");

            // Promise.resolve().then(()=> {
            //     console.log("B");

            //     Promise.resolve().then(()=>{
            //         console.log("C");
            //     });
            // });

            // setTimeout(()=>{
            //     console.log("D");
                
            // },0);

            // console.log("E");

            //^ OUTPUT is :
                    // A
                    // B
                    // C
                    // D
                    // E

        

    //----









// for (let i=10; i>0; i--){
//     console.log(i);
// }


// let i = 10;
// while(i>0){
//     console.log(i);
//   i--
// }



// for( let i=1; i<21; i++){
//     if(i%2 === 0){
//     console.log(i);
    
// }
// }






// let i = 1;
// while(i<16){

//     if(i%2 === 1){
//     console.log(i);
//     }
//     i++
// }


// for (let i=1; i<11; i++){
//     console.log(`5 * ${i} = ${5 * i}`);
// }



// let sum = 0;

// for(let i = 1; i<101; i++){
//     sum = sum + i;
//     console.log(i)
// }