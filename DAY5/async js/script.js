// console.log('GEC START');

// function printPreety(){
//     console.log('preetyPrintstart');

//     let ans = 2+3;
//     console.log(ans);
//     console.log('preetyPrintend');
// }

// // setTimeout(printpreety,10000);
// // console.log('GEC END');


// //--------------------------event handler 
// const btn = document.getElementById('btn'); //dynamic event handler
// btn.addEventListener("click", printPreety);

//----------------------Promises---------------

// console.log('start');

// const req = fetch("https://api.github.com/users/Deepak3440");

// console.log(req);

// req.then(()=> console.log("Fetched"));

// console.log('end');


// console.log('start');
// fetch('https://dummyjson.com/products/1')            //dummyjson
// // .then(res => console.log(res))
// .then(res => res.json())
// // .then(json => console.log(json))
// console.log('end');

//----------------------------------------------------------API CALL USING PROMISES------

// const req = fetch("https://dummyjson.com/products/1");

// const res = req.then(res => res.json())

// console.log(req);

// res.then((data)=>console.log(data));


// the states of fetch in JavaScript:
// Pending: - The request has been sent, but the response has not yet been received.
// Fulfilled: - The request was successful, and the response is available.
// Rejected: - The request failed, and the reason for the failure is available.


const req = fetch("https://dummyjson.com/products/1")
.then((res) => res.json())
.then((data)=>console.log(data));
