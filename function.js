"use strict";

const bookings = []; // sotring the objcet inside the array  

const createBooking  =  function(numPassenger = 1 ,flightNum = "HH1" ,price =199 * numPassenger){
    // ES 5 ugley boiler plate 
    // numPassenger = numPassenger || 1;
    // price = price || 199;
    const booking = {
        numPassenger,
        flightNum,
        price,
    };
    console.log(booking);
    bookings.push(booking);

};

createBooking("5","LH11",2500);
createBooking(undefined,'B85L');
createBooking(5,undefined,599);
createBooking(78,"busR099",1999);
createBooking(10,"t100");

