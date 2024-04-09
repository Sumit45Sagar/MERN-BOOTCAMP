// let arr = [2,10,21,32];


// //---------------------------------------------froEach-----------------------

// // function printpreety(elem)  
// // {
// //     console.log(': ',elem);
// // }

// function printArray(arr)
// {
//     // for(let i = 0; i < arr.length; i++)
//     // {
//     //     console.log(arr[i]);
//     // }

//     // arr.forEach(printpreety);        //forEach function

//     // arr.forEach(function printpreety(elem)  //forEach using function assignment
//     // {
//     //     console.log(': ',elem);
//     // });

//     // arr.forEach(function (elem)      //froEach for annonymus function
//     // {
//     //     console.log(': ',elem);
//     // });

//     // arr.forEach((elem) => {     //froEach for arrow function
//     //     console.log(': ',elem);
//     // });

//     // arr.forEach((a , b , c) => {     // output a for element b for index and c for whole array  
//     //     console.log(': ',a , b, c);
//     // });


//     // arr.map((a , b , c) => {           //same using map function
//     //     console.log(': ',a , b, c);
//     // });
// }

// printArray(arr);

//----------------------------------------------------------------------------------
//GEC  - Global Execution Context
function printpreety(elem)  
{
    console.log('hello');
}

//setTimeout function    time in milliseconds  part of browser
setTimeout(printpreety,3000);