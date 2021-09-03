function createUser(name, id, age) {
  return {
    name: name,
    id: id,
    age: age,
  };
} //factory function

class createUser2 {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

// let user1 = new createUser2("syed", 9, 24);

// console.log(user1.getName());

// let user2 = new createUser("pragyan", 19, 30);

// console.log(user1, user2);

///---------- Class Inheritance

class Address {
  constructor(city, country, zipCode) {
    this.city = city;
    this.country = country;
    this.zipCode = zipCode;
  }
  getName(){
      return this.city;
  }
}

class User extends Address {
  constructor(name, id, age , city,country,zipCode) {
    super(city,country,zipCode);
    this.name = name;
    this.id = id;
    this.age = age;
  }
  getName(value){
      if(value=="name")
      return super.getName();
      else if(value=="city")
      return this.name;
  }
}

let user1 = new User("syed",10,28,"Hyd","india",500087);

console.log(user1.getName("name"));
console.log(user1.getName("city"));

