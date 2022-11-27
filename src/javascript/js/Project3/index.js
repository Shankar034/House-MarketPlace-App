console.log("This is index js file");

//56deca0da88e4d4fa642b7ea6ac3495a


//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '56deca0da88e4d4fa642b7ea6ac3495a';

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");


//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('POST', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey= ${apiKey}`, true);
xhr.getAllResponseHeaders('Content-type', 'application/json');

//What to do when response is ready
xhr.onload = function(){
  if(this.status === 200){
    console.log(this.responseText);
  }
  else{
    console.log("Some error occured");
  }
}
xhr.send();

let news = `<div class="card">
<div class="card-header" id="headingOne">
  <h2 class="mb-0">
    <button
      class="btn btn-link btn-block text-left"
      type="button"
      data-toggle="collapse"
      data-target="#collapseOne"
      aria-expanded="true"
      aria-controls="collapseOne"
    >
      Collapsible Group Item #1
    </button>
  </h2>
</div>

<div
  id="collapseOne"
  class="collapse show"
  aria-labelledby="headingOne"
  data-parent="#accordionExample"
>
  <div class="card-body">
    Some placeholder content for the first accordion panel. This panel
    is shown by default, thanks to the <code>.show</code> class.
  </div>
</div>
</div>`;
