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
console.log(entries);