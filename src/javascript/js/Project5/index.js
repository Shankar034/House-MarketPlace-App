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
