// document.getElementById('fetchBtn').addEventListener('click', fetchData);

// function fetchData() {
//     fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=QF7ABWUH3JXDE6HW6M4J6SRJ9')
//         .then(response => response.json())
//         .then(data => {
//             const dataContainer = document.getElementById('dataContainer');
//             dataContainer.innerHTML = '';

//             data.forEach(item => {
//                 const postElement = document.createElement('div');
//                 postElement.innerHTML = `
//                     <h2>${item.title}</h2>
//                     <p>${item.body}</p>
//                     <hr>
//                 `;
//                 dataContainer.appendChild(postElement);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }
let arr = [45,23,32];
let a = arr.map((value, index, array) =>{
    // console.log(value, index, array);
    return value+index;
})
// console.log(a);
console.log(arr);

let arr2 = [45,23,32,0,3,5];
let a2 = arr2.filter((a)=>{
    return a<10;
})

console.log(a2);

//map method create a new array by performing some function on each element of array
//filter an array with value that passes a test creates a new array
//reduce reduces an array to a single value

let arr3 = [1,2,3,4,5,6,6];

let a3 = arr3.reduce((h1, h2)=>{
    return h1+h2;
})
console.log(a3);