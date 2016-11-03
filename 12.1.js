var person = {
  firstName: "John",
  lastName: "Doe",
  age: 10
};
var json1 = JSON.stringify(person);
console.log(json1);
console.log(typeof(json1));
console.log("hi, the quotation marks do not get printed");
// json data strings must be double quoted, single quote gives error

// JSON.* is kinda like univesally available - Anoop
var personReborn = JSON.parse(json1);
//console.log(personReborn);
//console.log(personReborn.firstName + " * " + personReborn.lastName);
