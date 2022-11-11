console.log("This is tutorail 17");

//3:38 minutes

document.getElementById("heading").addEventListener("mouseover", function (e) {
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = e.target.id;

  variable = Array.from(e.target.classList);


  variable = e.offsetX;

  variable = e.offsetY;

  variable = e.clientX;

  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
