// 'use strict'

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);

// let person = {
//     name: "john",
//     age: "20",
//     isMarried: "false"
// };
// console.log(person.name);

let persone = {
    name:"John",
    age:25, 
    isMarried: false
};
console.log(persone["name"]);
let arr =['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]);

let switcher = null;
if (switcher){
    console.log ("working...")
}
switcher = 1;
if (switcher){
    console.log ("working...")
}
let answer = confirm ("Are yo here?");
console.log(answer);
let answer2 = prompt("Are yo here?");
console.log(answer);