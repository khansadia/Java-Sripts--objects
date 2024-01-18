/* const person = {
    firstName: "Niklas",
    lastName: "Fähnrich",
    fullName: function () {
      const fullName = `${firstName} ${this.lastName}`;
      console.log(fullName);
    },
  };
  
  person.firstName = "Henrik";
  person["lastName"] = "Håkansson";
  delete person.firstName;
  console.log(person); */

  const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true,
    start: function () {
      console.log("The car is running");
    },
  };
  
  for (let key in car) {
    const currentValue = car[key];
    console.log(currentValue);}

    
const target = {
    a: 1,
    b: 2,
    d:10,
  };
  
  const source = {
    b: 4,
    c: 5,
    d:200,
  };
  
  const modifiedTarget = Object.assign(target, source);
  
  console.log(modifiedTarget);