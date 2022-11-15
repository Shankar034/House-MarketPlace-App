console.log("This is tutorial 27");

let car = {
  name: "Maruti 800",
  topSpeed: 78,
  ren: function () {
    console.log("car is running");
  },
};

// new Date();

function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(` ${this.name} is running`);
  };
  this.analyze = function () {
    console.log(`This car is slower by ${200 - this.topSpeed} than Mercedes`);
  };
}

car1 = new GeneralCar("Nishan", 130);
car2 = new GeneralCar("Maruti Alto", 10);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
