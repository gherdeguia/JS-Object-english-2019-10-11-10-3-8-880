//Exercise 1
//create user object
var user = {
    name: null,
    surname: null

};


//set initial values for object properties
user.name = "John";
user.surname = "Mark";

console.log("Name: "+user.name);
console.log("Surname: "+user.surname);
console.log("===================================");

//modify object property
user.name = "Peter";

console.log("Name: "+user.name);
console.log("Surname: "+user.surname);
console.log("===================================");

//Exercise 2

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

//calculate fruit properties.

console.log("Appple: "+fruit.apple);
console.log("Pear: "+fruit.pear);
console.log("Peach: "+fruit.peach);

var totalFruit = fruit.apple + fruit.pear + fruit.peach;

console.log("Total: "+totalFruit);
