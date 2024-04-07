// let a = new String("HELLO");
// let b = "HELLO";

// if(a==b)
// {
//     console.log("yes");  //yes
// }

// console.log(a);
// console.log(b);

// const obj =  {
//     name : 'Ajay',
//     lastname : 'Singh',
// };

// const obj1 =  {
//     'name' : 'Ajay',
//     'lastname' : 'Singh',
// };
// console.log(obj1);

// const obj =  {
//     "name" : 'Ajay',
//     "lastname" : 'Singh'
// };

// console.log(obj);
// const str = JSON.stringify(obj);
// document.write(JSON.stringify(obj));


// const obj =  {
//     "name" : 'Ajay',
//     "lastname" : 'Singh'
// };

// obj.age  = 20;    //we cannot reassign object again but can change its properties with const but can do with let
// obj.name  = 'Sumit'; //we can change the value of object
// console.log(obj);


// let arr = [1,2,3,4];
// arr  = [5,6,6,6,];

//--------------------------------------------------------
//array
// const arr = [1,2,3,4];
// arr[10] = 20;   //(11) [1, 2, 3, 4, empty × 6, 20]
// arr.push(10);
// console.log(typeof(arr)); //object


// const obj =  {
//     "name" : 'Ajay',
//     "lastname" : 'Singh'
// };

// const arr = [1,2,3,4];

// console.log(typeof(arr));
// console.log(Array.isArray(arr));   // to check if array or not Array.isArray
// console.log(typeof(obj));

//checkifobj([1,2,3,4])  to check  if given argument is object or not

// function checkifobj(obj){
//   if((Array.isArray(obj)))
//   {
//     console.log('false');
//   }else{
//     if(typeof(obj) == "object"){
//     console.log('true');}
//     else{
//         console.log(false);
//     }
//   }
// }
// checkifobj(obj);

//-------------------------------------------------------------------
//for/of for/in

// const arr = ['name' , 2];

// const obj = {
//     'name': 'sumit', age: 20,
// };

// for(let i = 0; i < 2; i++)
// {
//     console.log(i);
// }
// for(let i = 0; i < 2; i++)
// {
//     console.log(obj[i]);
// }

// for(let i of arr){
//     console.log(i);
// }
// for(let i of obj){    for/of dont works with object but works with arr
//     console.log(i);
// }

// const arr = ['name' , 2];

// const obj = {
//     'name': 'sumit', age: 20,
// };

// for(let i in arr){
//     console.log(i);
// }

// for(let i in obj){     //for/in works with arr as well as object but print its keys
//     console.log(i);
// }

//--------------------------------------------------------------------
//DOM is not a part of JS but an API 
//The Document Object Model (DOM) in JavaScript is a programming interface that represents 
//andinteracts with any HTML or XML document as a tree structure wherein each 
//node is an object representing a part of the document.

// console.log(window);
// console.log(window.innerHeight);
// window.console.log(window.innerWidth);


// console.log(window.document);
// // console.log(window);
// console.dir(window.document);
// // console.dir(window);


// const res = document.getElementsByTagName('h3');  //aray is a proper class and iterables is generalized object of array
// console.log(res);

// const res = document.getElementById('h31');  
// console.log(res);
// console.dir(res);

//----------------query selector all
// const res = document.querySelectorAll('h3#h32');    //h3#h32 h3.h2  div>h3
// console.log(res);

// const res  = document.getElementById("ht1")

// // res.innerText = "HELLO WORLD";
// res['innerText'] = "HELLO WORLD";

// console.log(res);


// const res = document.getElementsByTagName("p");
// // res[0].innerHTML = "<h3>HELLO</h3>";
// // res[0].innerText = "<h3>HELLO</h3>";

// // res[0].tagName = "h1";
// res[0].setAttribute('TagName', 'h1');
// console.log(res);

// const ne = document.createElement("h3");

// ne.innerText = "Dynamic Text";
// // console.log(ne);

// document.body.appendChild(ne);   //same object cannot be append to two places

// const firstDiv = document.getElementsByTagName("div");
// firstDiv[0].appendChild(ne);
 
// const pa = document.getElementById('h31');    to remove element
// pa.remove();

// difference between deep copy and shallow copy  cloneNode()