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

// console.log(house);


const villain = {};

// Use destructuring with a default value and the out put should be unkown 
const {thing = "unknown" } =villain
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

const {codename:commando, location : base } = missionDossier;

console.log(commando,base);


const subtractNumbers = function(...numbers){
    let result = numbers[0];
    for(let i = 1; i < numbers.length; i++)
        result = result - numbers[i];
    console.log(result)

};

subtractNumbers(2, 2);
subtractNumbers(2, 3, 4, 89, 7);
subtractNumbers(8, 7, 96, 1000);

console.log("Batman" || "Superman"); 
console.log(false || 0 || "" || "Iron Man" || 42);
console.log(undefined || null || NaN || 0);

console.log("Pizza" && "Burger" && "Pasta");

console.log(true && "Secret Message" && 0 && "Hidden Gold");


console.log("Cat" && "Dog" || "Bird");
console.log("" && "Apple" || "Banana" && "Cherry"); 



const fruits = ["apple", "banana", "mango"];

//for (const [index, value] of fruits.entries()) {
    //console.log(`${index}: ${value}`);
//}


for(const[i,f] of fruits.entries()){
  console.log(`${i + 1} : ${f}`) // i + 1 means i is an array and array start form 0  then add 1 ;  

};




const students = ["Alice", "Bob", "Charlie"];

for(const [i,name] of students.entries()){
  console.log(`student #${i + 1} is ${name}`)
};


const cars = ["formula 1","audi s9","roketbunny"];

const [f1,a8,rk9] = cars;
console.log(f1);
console.log(a8);
console.log(rk9);



const movies = ["Inception", "Titanic", "Coco"];


for(const [i,movieName] of movies.entries()){
  console.log(`show time #${i + 1}: ${movieName}`)


};


const tasks = ["Buy groceries", "Walk the dog", "Finish homework", "Call mom"];

for(const[i,work] of tasks.entries()){
  const position = i + 1;
  if(position % 2 === 0){
    console.log(`task number ${position}: ${work}`)

  }

};

let count = 0;

console.log( 0||10 );
console.log( 0??10 );


let name = null ; 

console.log(name || "batman");

console.log(name ?? "ballu bhaya");


const utshob = null ?? "i want a car ";

const values  =  0 ?? 99 ;

console.log(utshob);

console.log(values);



const life = ["me", "my father","my mother","my ugly sister"].join("....");

console.log(life);


const nullAnd  =  " lutfor jaman utshob ".trim();
console.log(nullAnd);
 



const capitalizeName = function(name){
    return name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};
console.log(capitalizeName("Bushra afzal onty"));
console.log(capitalizeName("Lutfor jaman utshob"));



const creditCardNumber = function(num){
  const str = num + "";
  const last = str.slice(-4).padStart(str.length,"*")
  console.log(last);



};

creditCardNumber(12458968532);
creditCardNumber(12458969685);
creditCardNumber("12458965632");
creditCardNumber(1245850);


const bugBookings = [];

const createBookings = function(flightNum = 'g12',numberOfPassenger =1,price = numberOfPassenger * 199){

  const booking = {
    flightNum,
    numberOfPassenger,
    price
  };

  console.log(booking);
  bugBookings.push(booking)

};

createBookings("lh1",200);
createBookings("lh2");
createBookings("lh2",undefined,150);
createBookings("lh2",450,);


const flight = "mk209";
const stive = {
  name : "stive williams ",
  passport : 12457963520,
}

const checkIn = function(flightNum,passenger){
  passenger.name = "MR " + passenger.name.trim();

  if(passenger.passport ===  12457963520 ){
    alert(`Check-in complete for flight ${flightNum}`);

  }else{
    alert("Check-in incomplete");
  }

};

checkIn(flight,stive);
console.log(flight);
console.log(stive);