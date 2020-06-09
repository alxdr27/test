var money = 1200;
var income = "шабашки";
var addExpenses = "Свет, Газ, Вода, Интернет, Телефон";
var deposit = true;
var mission = 100000;
var period = 8;

// alert("Денег на счету "+money+" рублей")
console.log(typeof(money))
console.log(typeof(income))
console.log(typeof(deposit))
console.log(addExpenses.length)
console.log("Период равен "+period+" месяцев."+" Цель заработать "+mission+" рублей")
console.log(addExpenses.toLowerCase())
console.log(addExpenses.split(', '))

var budgetDay = money/30
console.log(budgetDay)

var money = +prompt("Ваш месячный доход?")
var addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
var deposit = confirm("Есть ли у вас депозит в банке?")

var expenses1 = prompt("Введите обязательную статью расходов")
var expenses2 = prompt("Введите обязательную статью расходов")
var amount1 = +prompt("Во сколько это обойдется?")
var amount2 = +prompt("Во сколько это обойдется?")
var budgetMonth = amount1+amount2
console.log("Бюджет на месяц "+budgetMonth)
console.log("Цель будет достигнута за: "+Math.ceil(mission/budgetMonth)+" месяцев") 
var budgetDay = budgetMonth/30
console.log("бюджет на день "+Math.floor(budgetDay))

if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода")
} else if (budgetDay < 1200 && budgetDay > 600){
    console.log("У вас средний уровень дохода")
} else if (budgetDay < 600 && budgetDay > 0){
    console.log("К сожалению у вас уровень дохода ниже среднего")
} else if (budgetDay < 0){
    console.log("Что то пошло не так")
}


// function getExpensesMonth(){
//     return amount1+amount2
// }
// accumulatedMonth = function getAccumulatedMonth(){
//     return money - getExpensesMonth()
// }