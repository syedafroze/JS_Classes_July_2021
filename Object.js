//Object  - its a data structure which stores data in form of key value pair

let Car = {
  name: "civic",
  color: "white",
  fuelType: "petrol",
  start: function () {
    return "started";
  },
  owners: [
    {
      owner: "First",
      name: "pragyan",
      ph: 87907890,
      city: "Hyd",
      country: "INDIA",
    },
    {
      owner: "Second",
      name: "Srini",
      ph: 87907890,
      city: "Hyd",
      country: "INDIA",
    },
    {
      owner: "third",
      name: "Kalyani",
      ph: 87907890,
      city: "Delhi",
      country: "INDIA",
    },
  ],
};
//[]
let ownerNames = [];

for (let i = 0; i < Car.owners.length; i++) {
  if (Car.owners[i].city == "Hyd") ownerNames.push(Car.owners[i].name);
}
console.log(ownerNames);

let names = Car.owners.filter((ownerObj) => ownerObj.city == "Hyd").map((obj) => obj.name);
console.log(names);


let Car2 = {
  name: "civic",
  color: "white",
  fuelType: "petrol"
}

//Object.keys(objectName)  retrunns keys 

console.log(Object.keys(Car2))

//Object.values(objectName)   retrun values 

console.log(Object.values(Car2));

// [ [name,civic] ,[color,white] , [fuelType,petrol]]

let arr = [];

for(let i in Car2){
    arr.push([i,Car2[i]]);
}
console.log(arr);


let arr2 = Object.entries(Car2);
console.log(arr2) ;


const user = {
    name:"syed",
    id:9,
    city:"Hyd",
}

Object.freeze(user);

user.name = "Ritchie"

console.log(user);




