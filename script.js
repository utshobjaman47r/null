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
    orderDilavery:function({staterIndex,mainIndex,time,address}){
        console.log(`order recived ! ${this.startMenu[staterIndex]},and ${this.mainManus[mainIndex]} 
            will be delivered ${address} on ${time}`);

    },

};

restuturent.orderDilavery({
    time : "22:30",
    address : "via del sole, 21 ",
    mainIndex : 2,
    staterIndex: 2,

})


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
