//### "this" scope
/* // Create an object:
/* const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.firstName);
console.log(person.lastName);
console.log(person.firstName +  person.lastName); */
 
// const person = {
//     firstName: "Niklas",
//     lastName: "Fähnrich",
//     fullName: function () {
//       const fullName = `${this.firstName} ${this.lastName}`;
//       console.log(fullName);
//     },
//   };
  
//   person.fullName();
//    *///
// const car = {
//     make: "Volvo",
//     model: "V70",
//     year: 2016,
//     manualTransmission: true,
//     start: function () {
//       console.log("The car is running");
//     },
//   };
   
  // accessing the model property with dot-notation
  const model = car.model;
  console.log(model); // V70
  //const make = car.make;
 // console.log(make); //Vlovo

  const year = car.year;
  console.log(year); // 2016
  const make = car["make"];
  console.log(make); // Volvo
  

/* 
const country ={
    name:"Sweden",
    weather: "Ice cold",
    population: 100000,
    location:{longitude:1000, latitude: 2200},
};
const keys = Object.keys(country);

console.log(keys);

const values = Object.values(country);
console.log(values);

const entries = Object.entries(country);
console.log(entries); */