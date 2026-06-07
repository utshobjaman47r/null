// const arr = [10, 20, 30];

// const [a, b, c, d] = arr;

// console.log(d); // b variable is not difiend so it will through undifined 
// console.log(a,b,c)

// const restaurant = {
//   starterMenu: ["Soup", "Salad"],
// };

// const [first, second] = restaurant.starterMenu //  typeo 

// console.log(first);

// const restaurant = {
//   name: "Food House",
//   categories: ["Pizza", "Burger"],
// };

// let [main, secondary] = restaurant.categories;

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const arr = [1, 2, 3];

// const [a, , c] = arr;

// console.log(a, c);// 1 3 
// const menu = ["Pizza", "Burger", "Pasta"];

// const [first, ...others] = menu;

// console.log(first); // pizza 
// console.log(others); //  burgers ,pasta 


// const numbers = [1, 2, 3];

// const copy = [...numbers];

// copy.push(4);

// console.log(numbers); // 123
// console.log(copy); //1234


// const student = {
//   name: "Bruce",
//   age: 25,
//   skills: ["JS", "Python", "Git"]
// };

// const {name,age } = student 


// console.log(name,age)

// const student = {
//   name: "Bruce",
//   age: 25,
//   skills: ["JS", "Python", "Git"]
// };

// const [first,second] = student.skills;
// console.log(first,second)



// let firstName = "Clark";
// let lastName = "Kent";

// const hero = {
//   firstName: "Bruce",
//   lastName: "Wayne",
// };

// ({ firstName, lastName } = hero);

// console.log(firstName, lastName);

// let hero = "Superman";
// let city = "Metropolis";

// const dc = {
//   hero: "Batman",
//   city: "Gotham",
// };

// ({hero,city} = dc );

// console.log(hero, city);
   
const batman = {
  home: "Wayne Manor",
};

// Create a variable called house
// using destructuring
const {home:house} = batman;   
// ({house} = batman.home)
// // ({house}= batman);

console.log(house);


const villain = {};

// Use destructuring with a default value and the out put should be unkown 
const {thing = "unkown" } =villain
console.log(thing);

// const villain = {};

// // 1. We look for a property called 'alias' (or whatever you want to name it)
// // 2. Since it doesn't exist in 'villain', it falls back to "unknown"
// const { alias = "unknown" } = villain; 

// console.log(alias); // Output: unknown


// const batmanIo = {
//   name: "Bruce Wayne",
//   city: "Gotham",
// };

// const { name: hero } = batmanIo;

// console.log(hero); // Outputs: "Bruce Wayne"

const missionDossier = {
  codename: "Agent Kabir",
  location: "Mumbai Base",
};

const {codename:commando, location : farmehouse } = missionDossier;

console.log(commando,farmehouse);
