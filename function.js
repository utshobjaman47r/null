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

const heyGreegins = greet("hey");

heyGreegins("Bushra");


// const greetingsF = function(greetings){
//     return function(name){
//         console.log(`${greetings} ${name}`)
//     }
// };

// const greetYou =greetingsF("hey");
// greetYou("Bushra");
// greetYou("Utshob");
