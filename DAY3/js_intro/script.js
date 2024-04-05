// console.log('HELLO');
// let const var important
//hoisting
// var age = 18;
// age = "DONE";


// console.log(message); var is by default undefined

// var message = 'HELLO WORLD';   scanning
// console.log(message);          execution

// message = "ELSE";
// console.log(message);

//console.log(message); //error because scope of var is function scope

//var is by default undefined
//function env(){
//var message = 'HELLO WORLD';   //scanning
//console.log(message);          //execution

//message = "ELSE";
//var message = "ELSE";   //redeclaration is allowed
//console.log(message);
//}

//env();


// function env(){
//     for(var i = 0; i<5 ; i++)
//     {
//         console.log('---',i);
//     }
//     console.log(i);
// }

// env();

//let

//javascript is interpreted as well as compiled language
//scope of let is within block   ES6
//redeclaration is not allowed  let message = "else"
//reassignment is allowed     message = "else"
// let message= "HELLO";
// message = "else";
// console.log(message);


//CONST
//redeclaration and reassignment is not allowed   and it cannot be uninitialized
// const message = "HELLO";
// console.log(message);

//by default var
//typeof to know datatype
//immutable means we cannot change address of primitive data type
//undefined meaning ?
// message = "HELLO";  
// console.log(typeof(message));


//DATA TYPES IN JAVASCRIPT
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.

//CAMEL CASE IS USED  userAge
  
//type  coercion is done with + operator other than that operator will work
// let arr = ['a', 'b', 'c', 'e'];
// let arr = '12';
// let age = 20;
// let ans = arr+age;

// let ans = arr + age; it will print 1220
// let ans = age -(-arr);  //to convert str to number and it will print 32

//PARSEINT
// let p = parseInt(arr);
// let n = parseInt(age);
// console.log(p,n);

// let a = 12;
// let b = '12';

// if(a == b){
//     console.log('YES');
// }else{
//     console.log('NO');
// }


// if(a === b){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// let arr = ['a', 'b', 'c', 'e'];
// let cpy = [...arr];   //new reference will be given to arr == is not used in industry ==== is used

// console.log(arr, cpy);

// if(arr === cpy)    (=== check reference as well)
// {
//     console.log('yes');
// }else{
//     console.log('no');
// }

// const str = 'sagar';
// const arr  = 'sumit';
// const ans = `${arr}  ${str}`;   // ` is used below esc key back tick
// console.log(ans);


// function print(x){
//    console.log(x);
// }
// const a = 'Hello';
// print(a);
// print('Hello');
//print();  undefined will print 

//sum();  NaN

//sum(1);   NaN

// function sum(a,b)
// {   if(a&&b){
//     console.log(a+b);
// }else if(a){
//     console.log(a);
// }else{
//     console.log(0);
// }
// }

// sum(20);
// sum(20,20);



//  let a = 1;           // 0 , NULL, undefined, enpty string and false are falsy values
//  if(a){
//     console.log('YES')
//  }else{
//     console.log('NO')
//  }


// function sum(a = 0,b = 0)   parameter as zero
// {  
//     console.log(a+b);

// }
// sum();

//----------------------------------------------------------------------------------------
//function decalration above definition only works with function name declaration
print();
//a();
//b();


//Function declaration
function print(){
    console.log('--');
}

//Function assignment(named)
const a = function print(){
    console.log('--');
}


//Function assignment(anonymous)
const b = function (){
    console.log('--');
}

//---------------------------------------------------------------------------------------
//return a value from arrow function
//Function assignment(arrow function assignment)
const c = () => {
    console.log('--');
}

//function decalration below definition  works with all function  declaration
print();
a();
b();

//-----------------------------------------------------------------------------------------

//switch case

//----------------------------------------------------------------------------------------

//check (null == defined) and (null === defined

//------------------------------------------------------------------------------------
//OBJECT

// const obj  = new Object();
// obj[12] = 'twelve';
// obj[1] = 'one';
// obj[2] = 'two';
// console.log(obj);

// const obj  = new Object();
// obj[12] = 'twelve';
// obj['name'] = 'one';
// obj[2] = 'two';
// console.log(obj);

const obj  = {
'first' : 'twelve',
'name': 'one',
2 : 'two'};
const fllname = obj.first + ' ' + obj.name;
 console.log(fllname);


//----------------------------------------------------------------------------

const x = prompt('Please tell the property to know');
console.log(obj[x]);                                  //dynamically access object
