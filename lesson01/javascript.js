var money = 1200;
var income = "шабашки";
var addExpenses = "Свет, Газ, Вода, Интернет, Телефон";
var deposit = true;
var mission = 10000;
var period = 8;

// alert("Денег на счету "+money+" рублей")
console.log(typeof(money))
console.log(typeof(income))
console.log(typeof(deposit))
console.log(addExpenses.length)
console.log("Период равен "+period+" месяцев."+" Цель заработать "+mission+" евро")
console.log(addExpenses.toLowerCase())
console.log(addExpenses.split(', '))

var budgetDay = money/30
console.log(budgetDay)