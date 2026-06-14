"use strict"; 

const restuturent = {
    name        :"Classico Italiano ",
    location    :"Via angelo Taveant 23 , Frinze, Itally",
    categories  :["Italian","Pizza","Vegetarian","Organic Shit "],
    startMenu   : ["Focaccia","Bruschetta","garlic Bread ","caprese salad "],
    mainManus   : ["pizza","pasta","allu vorta dalul dia "],
    openingHours:{
        thus:{
            open  : 12,
            colse : 22 
        },
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open : 0,
            close : 24,
        }

    },
    order : function(staterIndex,mainIndex){
        return [this.startMenu[staterIndex],this.mainManus[mainIndex]]

    },
    orderDilavery:function({staterIndex = 1,mainIndex = 1 ,time = "20:20 ",address}){
        console.log(`order recived ! ${this.startMenu[staterIndex]},and ${this.mainManus[mainIndex]} 
            will be delivered ${address} on ${time}`);

    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`here is your pasta with ${ing1},${ing2} and ${ing3}`)

    }

};

restuturent.orderDilavery({
    time : "22:30",
    address : "via del sole, 21 ",
    mainIndex : 2,
    staterIndex: 2,

});

restuturent.orderDilavery({
    address : "wyne manner ",
    mainIndex : 2, 
});

//object destrutcre 
const {name,openingHours,categories}= restuturent;
// console.log(name,openingHours,categories);

 const {name:restaurantName,openingHours:hours,categories:tags} = restuturent;
 
//  console.log(restaurantName,hours,tags);


const {menu =[],startMenu : starters =[]} = restuturent; //  adding  a defalult value [] 

// console.log(menu,starters);

// nested object destructring 

const {fri:{open: o,close: c }} = restuturent.openingHours;

// console.log(o,c);





// const arr  =[1,23,415];
// const a = [...arr];
// console.log(a);

const arr2 =  [25,56,885,785];

const [x,z,y,r] = arr2;
// console.log(x,z,y,r)

let [main,,secndary] = restuturent.categories;

// console.log(main,secndary);

// old version 

// const temp = main ;
// main = secndary ;
// secndary = temp ;

// console.log(main,secndary);

// new version 

// [secndary,main] = [main,secndary]

// console.log(secndary,main)

//  recive 2  retrurn values form a function 
const [starter,main1 ] = restuturent.order(2,0)
// console.log(starter,main1)

//  nested destructring 
const nested = [2,4,[8,9]];
// const [i,,l] = nested;
// console.log(i,l);

const [i,,[l,j]] = nested;

// console.log(i,l,j);

// defulst values
// const [a=0,b=0,c=0,d=0] = nested;

// console.log(a,b,c,d)

// object mutuating 

let tom =  111;
let jack = 999;

const obj = {tom:23,jack:7,herry :14};
({tom,jack}=obj);
// console.log(tom,jack);


let earth1 = "the home planet of humans ";
let kriptonyete =  "the home palantes of kriptroniouns ";

const home = {
    earth1: "plantet earth ",
    kriptonyete: "galaxiy   appartment "
};

({earth1,kriptonyete} = home);

// console.log(earth1,kriptonyete);


const arr =  [2,5,8,9];
const newA = [10,11,12,...arr]

//console.log(newA);
//console.log(...newA);

const newMenu = [...restuturent.mainManus,"biriyani "]
//console.log(newMenu);

//shallow copy 
const mainMenuCopy  =  [...restuturent.mainManus];

//  bind to array together 

// const allMenu = [...restaurant.mainManus,...restaurant.startMenu];

const allMenu =  [...restuturent.startMenu,...restuturent.mainManus];
// console.log(...allMenu);



const str = "utshob";

const letters = [...str,"b"];
console.log(letters);



// const ingredients = [
//     // prompt("let's make pasta with , ingredient 1 "),
//     // prompt("let's make pasta with , ingredient 2 "),
//     // prompt("let's make pasta with , ingredient 3 ")
// ];

// console.log(ingredients);

// restuturent.orderPasta(...ingredients);

// objcet 
const newRestaurent = {funder:"lutfor jaman uthsob ", year : "2012",...restuturent};

console.log(newRestaurent);


const restaurantCopy  =  {...restuturent}

restuturent.name = "frasy food and resturant ";

console.log(restuturent.name);
console.log(restaurantCopy.name);




// rest operator unpack the array 

const arrTw =[1,2,3,...[6,7,]];

console.log(arrTw);

const song = [1,2,3,4,...["get on the dance floor"]];

console.log(song);


const [a,b,...others] = ["batman ","godzilla","salman kahn ","sharukh khan","null"];

console.log(a,b,others);

