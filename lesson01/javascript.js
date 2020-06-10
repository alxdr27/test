let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

var money 
var income = "Фриланс";
var addExpenses = "Свет, Газ, Вода, Интернет, Телефон";
var deposit = true;
var mission = 100000;
var period = 8;

let start = function() {
    
    do{
        money = prompt("Ваш месячный доход?")
    }
    while(!isNumber(money))
}
start();

var addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
var deposit = confirm("Есть ли у вас депозит в банке?")

var expenses = []
// var amount1 = +prompt("Во сколько это обойдется?")
// var amount2 = +prompt("Во сколько это обойдется?")


var showTypeOf = function(data){
    console.log(data, typeof(data)) 
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let getExpensesMonth = function(){
    let sum=0;

    for (let i = 0; i < 2; i++) {
        expenses[i]=prompt("Введите обязательную статью расходов")
        do {
            sum=prompt('Во сколько это обойдётся?')
        } while (!isNumber(sum));
    }
    

    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth()
console.log("сумма обязательных расходов "+expensesAmount)

console.log(addExpenses)

function getAccumulatedMonth(){
    return money - expensesAmount
}
var accumulatedMonth = getAccumulatedMonth()

getAccumulatedMonth();


function getTargetMonth(){
    return Math.ceil(mission/accumulatedMonth)
}


var targetMonth = getTargetMonth();
getTargetMonth();
if (targetMonth>0) {
    console.log("Цель будет достигнута за "+targetMonth+" месяца")
} else {
    console.log("Цель не будет достигнута")
}


var budgetDay = Math.floor(accumulatedMonth/30);
console.log("Дневной бюджет: "+budgetDay)

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
