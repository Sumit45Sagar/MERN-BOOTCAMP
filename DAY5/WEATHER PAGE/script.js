// console.log("attached");

// function fetchAPI() {
//   fetch(
//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=QF7ABWUH3JXDE6HW6M4J6SRJ9"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     })
//     .then(renderUI);
// }

// // fetchAPI();

// function renderUI(data){
//     // const days = data.days;
//     // console.log(days);

//     const row = document.createElement("tr");
//     //make heading row
//     const cell1 = document.createElement("th");
//     cell1.innerText = 'Date';
//     row.appendChild(cell1);

//     const cell2 = document.createElement("th");
//     cell2.innerText = 'Maximum Temperature';
//     row.appendChild(cell2);

//     const cell3 = document.createElement("th");
//     cell3.innerText = 'Minimum Temperature';
//     row.appendChild(cell3);

//    root.appendChild(row);

//    const childrow = document.createElement("tr");
//    const c1 = document.createElement("th");
//    c1.innerText = 'Date';
//    childrow.appendChild(c1);
//    const c2 = document.createElement("th");
//    c2.innerText = 'Date';
//    childrow.appendChild(c2);
//    root.appendChild(childrow);

// }
// //map filter reduce ,array methods       s
// renderUI();



console.log("attached");

const root = document.getElementById("root");

function fetchAPI() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=QF7ABWUH3JXDE6HW6M4J6SRJ9"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderUI(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchAPI();

function renderUI(data) {
  
  root.innerHTML = "";

  
  const headerRow = document.createElement("tr");

  const dateHeader = document.createElement("th");
  dateHeader.innerText = "Date";
  headerRow.appendChild(dateHeader);

  const maxTempHeader = document.createElement("th");
  maxTempHeader.innerText = "Maximum Temperature (°F)";
  headerRow.appendChild(maxTempHeader);

  const minTempHeader = document.createElement("th");
  minTempHeader.innerText = "Minimum Temperature (°F)";
  headerRow.appendChild(minTempHeader);

  root.appendChild(headerRow);

  
  data.days.forEach((day) => {
    const dataRow = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.innerText = day.datetime;
    dataRow.appendChild(dateCell);

    const maxTempCell = document.createElement("td");
    maxTempCell.innerText = day.tempmax;
    dataRow.appendChild(maxTempCell);

    const minTempCell = document.createElement("td");
    minTempCell.innerText = day.tempmin ;
    dataRow.appendChild(minTempCell);

    root.appendChild(dataRow);
  });
}
