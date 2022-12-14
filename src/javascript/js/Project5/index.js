console.log("This is Project CV scroller");

//Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Shankar Bhandari",
    age: 24,
    city: "Kanchanpur",
    language: "JavaScript",
    framework: "Vuejs",
    image: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
  },
  {
    name: "Shristi Upreti",
    age: 24,
    city: "Nepalgunj",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
  },
  {
    name: "Aryab Bhandari",
    age: 20,
    city: "Kanchanpur",
    language: "JavaScript",
    framework: "Nextjs",
    image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
  },
  {
    name: "Narendra Dhungal",
    age: 25,
    city: "Kanchanpur",
    language: "JavaScript",
    framework: "jQuery",
    image: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
  },
];

//CV Iterators

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

//Button listener for next button

const candidates = cvIterator(data);
nextCV();
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const CurrentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");


  if(CurrentCandidate != undefined){

      image.innerHTML = `<img src ='${CurrentCandidate.image}'>`;
    
    
      profile.innerHTML = `<ul class="list-group">
        
        <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
        <li class="list-group-item">${CurrentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${CurrentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${CurrentCandidate.language}</li>
        <li class="list-group-item">with ${CurrentCandidate.framework}</li>
        
      </ul>`;
  }else
  {
    alert('End of candidate applications !!')
    window.location.reload();
  }
}
