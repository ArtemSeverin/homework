/** @format */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model, year, release, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.release = release;

  if (ageMore(owner)) {
    this.owner = owner;
  }
}

function ageMore(owner) {
  return owner.age >= 18;
}

Person.prototype.infoPerson = function () {
  console.log(`Имя ${this.name}, возраст ${this.age}`);
};

Car.prototype.infoCarPerson = function () {
  console.log(
    `Марка ${this.make}, Модель ${this.model}, Год ${this.year}, Номер ${this.release}, `
  );

  if (this.owner) {
    console.log("владелец");
    this.owner.infoPerson();
  } else {
    console.log("владельцу меньше 18");
  }
};

const person1 = new Person("Salomon", 40);
const person2 = new Person("May", 21);
const person3 = new Person("Tom", 17);

const car1 = new Car("BMW", "X5", 2023, "KA5678MH", person1);
const car2 = new Car("Volvo", "XC40", 2000, "BK0867AA", person2);
const car3 = new Car("Toyota", "Yaris", 2022, "AA5654MK", person3);

car1.infoCarPerson();
console.log("---------------------");
car2.infoCarPerson();
console.log("---------------------");
car3.infoCarPerson();

// console.log(person1);
