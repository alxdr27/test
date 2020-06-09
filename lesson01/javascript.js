var money = 1200;
var income = "Фриланс";
var addExpenses = "Свет, Газ, Вода, Интернет, Телефон";
var deposit = true;
var mission = 100000;
var period = 8;


var money = +prompt("Ваш месячный доход?")
var addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
var deposit = confirm("Есть ли у вас депозит в банке?")

var expenses1 = prompt("Введите обязательную статью расходов")
var expenses2 = prompt("Введите обязательную статью расходов")
var amount1 = +prompt("Во сколько это обойдется?")
var amount2 = +prompt("Во сколько это обойдется?")


var showTypeOf = function(data){
    console.log(data, typeof(data)) 
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


function getExpensesMonth(){
    return amount1+amount2
}
getExpensesMonth();
console.log(getExpensesMonth())

console.log(addExpenses)

function getAccumulatedMonth(){
    return money - amount1 - amount2
}
var accumulatedMonth = getAccumulatedMonth()

getAccumulatedMonth();


function getTargetMonth(){
    return Math.ceil(mission/accumulatedMonth)
}
getTargetMonth();
console.log(getTargetMonth())
var budgetDay = Math.floor(accumulatedMonth/30);
console.log(budgetDay)

function getStatusIncome(){
    if (budgetDay > 1200) {
        return "У вас высокий уровень дохода"
    } else if (budgetDay < 1200 && budgetDay > 600){
        return "У вас средний уровень дохода"
    } else if (budgetDay < 600 && budgetDay > 0){
        return "К сожалению у вас уровень дохода ниже среднего"
    } else if (budgetDay < 0){
        return "Что то пошло не так"
    }
}
getStatusIncome();
console.log(getStatusIncome())
