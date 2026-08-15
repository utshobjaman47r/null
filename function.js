"use strict";

// const bookings = []; // sotring the objcet inside the array  

// const createBooking  =  function(numPassenger = 1 ,flightNum = "HH1" ,price =199 * numPassenger){
//     // ES 5 ugley boiler plate 
//     // numPassenger = numPassenger || 1;
//     // price = price || 199;
//     const booking = {
//         numPassenger,
//         flightNum,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);

// };

// createBooking("5","LH11",2500);
// createBooking(undefined,'B85L');
// createBooking(5,undefined,599);
// createBooking(78,"busR099",1999);
// createBooking(10,"t100");



// const flight = "L39R";

// const bushra = {
//     name : "bushra afzal onty ",
//     passport : 2254575235,
// };


// 1. Declare the object and string first
// const flight = "LH182";
// const bushra = {
//     name: "Bushra",
//     passport: 2254575235
// };

// const checkIn = function(flightNum, passenger) {
//     // Reassigning a primitive variable locally
//     flightNum = "BTNW47R"; 

//     // Mutating the object's property directly
//     passenger.name = "Ms. " + passenger.name;

//     // Check passport number
//     if (passenger.passport === 2254575235) {
//         alert("Checked in successfully!");
//     } else {
//         alert("Wrong passport!");
//     }
// };

// // 2. Pass the defined variables into the function
// checkIn(flight, bushra);

// console.log(flight);       // "LH182" (Unchanged!)
// console.log(bushra.name);  // "Ms. Bushra" (Mutated!)



const greet = function(greetings){
    return function(name){
        console.log(`${greetings} ${name}`)
    }

};

const heyGreegins = greet("hey you are too much beautiful");

heyGreegins("Bushra");


const greetA = (greetings) => {
    return (name)=> {
        console.log(`${greetings} ${name}`)
    };
        
};

const greetSupperArrow = greetings => name=> console.log(`${greetings} ${name}`);

greetSupperArrow("hi")("bushra");

// const greetingsF = function(greetings){
//     return function(name){
//         console.log(`${greetings} ${name}`)
//     }
// };

// const greetYou =greetingsF("hey");
// greetYou("Bushra");
// greetYou("Utshob");
// const speak = function(speaking){
//     console.log("hi my name is " + this.name)

// };

// const robot1 = {
//     name :"bibo",
//     talk : speak
// }

// speak.talk();


const speak = function(speaking){
    console.log('hello i am ' + this.name)
};


const robort1 = {
    name : "bimo",
    talk : speak
};

const robort2 = {
    name : "terminator",
    talk : speak
}
robort1.talk();
robort2.talk();

const lufthansa = {
    airline  : "lufhansa",
    iatacode : "LH",
    bookings : [],
    book : function(flightName,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightName}`)
        // this.bookings.push({flight:`${this.iatacode} ${flightName}`,name})
        this.bookings.push({flight:`${this.iatacode} ${flightName}`, name })


    }
    
};

lufthansa.book("B11","Bushra");
lufthansa.book("bat","uthosb");


const euroWings = {
    airline : "ewrowings",
    iatacode : "Ew11",
    bookings: []
};

const book = lufthansa.book; // by this the function can be outside ot the lufthansa object 
// it dose not work because this get confuesd who is calling the code 
// book("b11","Bushra");

book.call(euroWings,"11","Bushra afzal onty");
console.log(euroWings);


book.call(lufthansa,"bat10","batman");
console.log(lufthansa);

const swiss = {
    airline :"swissAirline",
    iatacode : "s100",
    bookings : [],
};

book.call(swiss,"Rm800","the terminator");

console.log(swiss);


const fligtData = ["DrCLA","lord orlock"];

book.apply(swiss,fligtData);
console.log(swiss);

book.call(swiss,...fligtData);

console.log(swiss);





