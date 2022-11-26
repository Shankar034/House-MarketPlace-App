console.log("This is index js file");

//56deca0da88e4d4fa642b7ea6ac3495a

newsAccordion = document.getElementById("newsAccordion");

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
