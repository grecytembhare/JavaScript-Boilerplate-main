'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ________________________________________________________________________

// de-structuring technique for array
// const arr = [2,3,4];
// const [a,b,c] = arr;
// console.log(a,b,c);
// console.log(arr);

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

// ______________________________________________
// same  for object in above we created object restaurant

let [main, secondary]= restaurant.categories;
console.log(main,secondary);
//  swap the value ...........> switching the variables

let temp = main;
main = secondary ;
secondary = temp;
console.log(main,secondary);

const [starter ,mainCourse] = restaurant.order(2,0)
console.log(starter,mainCourse);
// ____________________________________________________________________

// spread operator
const arr1 = [1,2,3];
const newArray = [arr1[0], arr1[1], arr1[2],3,4];
console.log(newArray);


const newArr2 = [5,6, ...arr1]; ///this is updated way of accesing another array
console.log(newArr2);








