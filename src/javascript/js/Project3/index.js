console.log("This is index js file");

//56deca0da88e4d4fa642b7ea6ac3495a


//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '56deca0da88e4d4fa642b7ea6ac3495a';

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");


//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.getAllResponseHeaders('Content-type', 'application/json');

//What to do when response is ready
xhr.onload = function(){
  if(this.status === 200){
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index){
      // console.log(element, index);

 
    // for(let news in articles){
    //   console.log(articles[news]);
      let news = `<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse${index}"
                  aria-expanded="true"
                  aria-controls="collapse${index}"
                >
                ${element["title"]}
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#newsAccordion"
            >
              <div class="card-body">
                ${element["content"]}.<a href="${element["url"]}" target = "_blank">Read more here</a>
              </div>
            </div>
            </div>`;
      newsHtml +=news;

    });
    newsAccordion.innerHTML = newsHtml;
  }
  else{
    console.log("Some error occured");
  }
}

xhr.send();


