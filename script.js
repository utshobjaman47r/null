"use strict"; 

const weekdays = ["mon","tue","wed","thus","fri","sat","sun"]
const openingHours ={
        [weekdays[3]]:{
            open  : 12,
            close : 22 
        },
        [weekdays[4]]:{
            open: 11,
            close: 23,
        },
        [weekdays[5]]:{
            open : 0,
            close : 24,
        }

    };




const restuturent = {
    name        :"Classico Italiano ",
    location    :"Via angelo Taveant 23 , Frinze, Itally",
    categories  :["Italian","Pizza","Vegetarian","Organic Shit "],
    startMenu   : ["Focaccia","Bruschetta","garlic Bread ","caprese salad "],
    mainManus   : ["pizza","pasta","resato"],

    // in ES6 model we can still get the object byound the scope and use it as a object porperty . just  write the object . 

    openingHours,
    
    order : function(staterIndex,mainIndex){
        return [this.startMenu[staterIndex],this.mainManus[mainIndex]]

    },
    orderDilavery:function({staterIndex = 1,mainIndex = 1 ,time = "20:20 ",address}){
        console.log(`order recived ! ${this.startMenu[staterIndex]},and ${this.mainManus[mainIndex]} 
            will be delivered ${address} on ${time}`);

    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`here is your pasta with ${ing1},${ing2} and ${ing3}`)

    },

    orderPizza:function(mianIngredent,...others){
        console.log(mianIngredent);
        console.log(others);
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
// const {name,openingHours,categories}= restuturent;
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

restuturent.name = "frasy food and restaurant ";

console.log(restuturent.name);
console.log(restaurantCopy.name);




// spred operetor  basically in the right side of = operator
//  or ... spread opereator  remains  inside of object litaral or array  

const arrTw =[1,2,3,...[6,7,]];

console.log(arrTw);

const song = [1,2,3,4,...["get on the dance floor"]];

console.log(song);

// rest operator usually on the left hean side of = 
const [a,b,...others] = ["batman ","godzilla","salman kahn ","sharukh khan","null"];

console.log(a,b,others);

// destructreing 

const [pizza, ,resato,othersFoods ]=[...restuturent.mainManus,restuturent.startMenu];

console.log(pizza,resato,othersFoods );


// objects 

// const {sat , ...weekdays} = restuturent.openingHours; 

// console.log(weekdays);
// console.log(sat);



//functions 


const add = function (...number){
    let sum = 0;
    for(let i = 0; i < number.length ; i++ )
        sum = sum + number[i];
    
    console.log(sum)

};




add(12,4,5,3,6)
add(2,7,9,6);
add(5,6,7);
add(2,2);



const mj = [2,4,8,9];
add(...mj);


//restuturent.orderPizza("mushroom","olive","onin","spinish");
restuturent.orderPizza("mushroom","olive","onin","spnish");

restuturent.orderPizza("mushroom");


// logical opereator 



console.log(45 || "uthsob");

console.log("" || "uthosb ");

console.log(0 || "allha huakbar ");

console.log(true || flase);
console.log(undefined || null);



// nullish qualasin operator works with only nullish values 
// nullish values are null undefined not 0 or emty string ""


// restuturent.numGuest = 40;
restuturent.numGuest = 0;
const guest1 = restuturent.numGuest ?? 10;
console.log(guest1);

const guest2 = restuturent.numGuest ?? 10 ;
console.log(guest2);



//console.log("salman khan " &&  "uthosb");

// console.log("" && "utshob");

// console.log(null && "denli national park ");
// console.log(null && undefined );


// console.log("milkeyway" && undefined);

// console.log("hello"&& 45 &&"hi" && "nothing " && null && "knock");



// if(restuturent.orderPizza){
//     restuturent.orderPizza("mushroom","spinech")
// };

// restuturent.orderPizza && restuturent.orderPizza("mushroom","spinech");
// us


const res1 = {
    name : "the denli resturant and food leb ", 
    numGuest: 27,
};

const res2 = {
    name  :"no food here restaurent ",
    owner :"uthsob ",
    numGuest : 0, 
};

// or assignment operator 
// res1.numGuest = res1.numGuest || 10 ;
// res2.numGuest = res2.numGuest || 10 ;

// res1.numGuest ||= 10;
// res2.numGuest ||= 10;

res1.numGuest ??= 10;
res2.numGuest ??= 10;


res1.owner = res1.owner && "the ower is hidden "
res2.owner = res2.owner && "the ower is hidden "



console.log(res1);
console.log(res2);

console.log(res2);


const mainTs = [...restuturent.mainManus,...restuturent.startMenu];

console.log(mainTs)



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1, players2] = game.players;

// console.log(players1,players2);

// const [gk1,...othersP]  = players1;
// const [gk2,...othersPlayers]  = players2;
// console.log(gk1,othersP);
// console.log(gk2,othersPlayers);


const [gk, ...fieldPlayers] = players1;

// Testing the output:
// console.log(gk);
// console.log(fieldPlayers);




// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final); 



const menuTs = [...restuturent.mainManus, ...restuturent.startMenu];

console.log(menuTs);


for(const item of menuTs){
    console.log(item)
};



if(restuturent.openingHours && restuturent.openingHours.mon){

    console.log(restuturent.openingHours.mon.open);

};

console.log(restuturent.openingHours.mon ?. open)





const days =  ["mon","tues","wed","thus","fri","san","sat"];

for(const day of days ){
    //console.log(day)
    const open = restuturent.openingHours[day] ?. open ?? "closed ";
    console.log(`on ${day}, we open on ${open}`);
};


console.log(restuturent.order?.(0,1) ?? "the method is not excist ");


console.log(restuturent.orderBATstack?.(0,1) ?? "the method is not excist ");

//  arrays 

const user =  [
    {name :"ballu bhai ",email: "amaremailnai@gmail.com"},
    {name :"utshob",email: "uthsobjaman2012@email.com"},
];

console.log(user[0] ?. name ?? "the user is empty ");
console.log(user[1] ?. name ?? "the user is empty ");
console.log(user[2] ?. name ?? "the user is empty ");


// other wise 
console.log("hello")
if(user.length > 0){
    console.log(user[0].name);
}else {
    console.log("there is not difined ")
};
if(user.length > 0){
    console.log(user[1].name);
}else {
    console.log("there is not difined ")
};


const porperties = Object.keys(openingHours);
console.log(porperties);

let openStr = `we open at ${porperties.length} days `;


for(const day  of porperties ){
    openStr+= `${day}, `
};


console.log(openStr);

// values 


const valuesb = Object.values(openingHours);

console.log(valuesb);


// entire object 

const entires = Object.entries(openingHours);

console.log(entires)


for(const [key,{ open, close }] of entires){
    console.log(`on ${key}, we open at ${open} and colse at ${close}`)

};





// sets  are the unique values 

const orderSet = new Set([
    "pizza",
    "pasta",
    "resato",
    "macoroni chese",
    "resato",
    "pasta",
    "resato",  
    "pasta",
    "resato",


]);

console.log(orderSet);



const name = new Set("bushraaaaaa");

console.log(name);
console.log(orderSet.size);


console.log(orderSet.has("pasta"));
console.log(orderSet.has("bushra "));
console.log(orderSet.has("uthsob "));

orderSet.add("bushra does love utshob");
orderSet.add("water bottle ");




console.log(orderSet);
console.log(orderSet.has("bushra"));
console.log(orderSet.has("uthsob hate bushra "));


orderSet.delete("water bottle ");
// orderSet.clear()
console.log(orderSet);

for(const order of orderSet){
    console.log(order)
};


// real life  example 

const staffs  =  ["waiter ","doorman","maneger","waiter ","chasiar","no one","waiter "];

console.log(staffs);

const uniqueStaffs =[...new Set(staffs)];

console.log(uniqueStaffs);

console.log(new Set(staffs).size);

//  maps 


const rest =  new Map();

rest.set("name","food for you ");
rest.set(1,"fornt of the galaxy appartmanet ");
rest.set(2," beside the Wyne Manner");

console.log(rest);
console.log(
    rest.set("catagoris",["Italian","Pizza","Vegetarian","Organic Shit "])
    .set("open",11)
    .set("close",23)
    .set(true,"we are open ")
    .set(false, "the door is closed "),
);
console.log("the resturent name is ")
console.log(rest.get("name"));
console.log("you shit assholses can find it in ")
console.log(rest.get(1));
console.log("if you have no money then !!!")
console.log(rest.get(false));





const yourWishes  = new Map();

yourWishes.set("bike","i want three catagoris of bike");
yourWishes.set("technology","i have to computer and in future i would love to updarade ");
yourWishes.set("for fture","need a cyle and fram and tracktor");
yourWishes.set("lost love","to      see boushra to have a beautiful life that's all ");
yourWishes.set("last wish"," see my parants proud and always be with them like batman");


console.log(yourWishes.get("bike"));
console.log(yourWishes.get("for fture"));
console.log(yourWishes.get("last wish"));
console.log(yourWishes.get("lost love"));


const time = 21;


console.log(rest.get(time > rest.get("open") && time < rest.get("close")));


