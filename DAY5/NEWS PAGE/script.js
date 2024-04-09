console.log("...APP STARTTED....");

function callAPI() {
  fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=abb2d76ece684caf9ee4a447aa0ff915")
  .then((res) => 
    res.json()
  )
  .then((data)=>{
    renderUI(data);
  })
}

// abb2d76ece684caf9ee4a447aa0ff915

const root = document.getElementById("root");

function renderUI(data){

    //got the articles from data
    const articles = data.articles;
    // console.log(articles);

    //single article
    // const ar = articles[1];
    for(let i = 0; i < articles.length; i++)
    {

    const ar = articles[i];
    
    console.log(ar);

    
    const div = document.createElement("div");
    // div.innerText = ar.title;
    div.setAttribute("class", "news-card");

    const h3 = document.createElement("h3");
    h3.innerText = ar.title;

    const img = document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(h3);

    div.appendChild(img);

    const a = document.createElement("a");
    a.href = ar.url;
    


    
    root.appendChild(div);
    }
}

callAPI();
// renderUI();