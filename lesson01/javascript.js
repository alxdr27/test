let money; 
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let start = function() {
    
    do{
        money = prompt("Ваш месячный доход?")
    }
    while(!isNumber(money))
}
start();


let appData = {
    income: {},
    addIncome: [],
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {
        
    },
    
    asking: function () {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses = addExpenses.toLowerCase().split(' ,');
            appData.deposit = confirm("Есть ли у вас депозит в банке?")
        let question=0;
        let expense="";
        for (let i = 0; i < 2; i++) {
            expense=prompt("Введите обязательную статью расходов");
            do {
                question = +prompt('Во сколько это обойдётся?');
            } while (!isNumber(question));
            appData.expenses[expense]=question
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth+=appData.expenses[key]
        }
    },
    getBudget: function(){
        return appData.budgetMonth = appData.budget - appData.expensesMonth,
                appData.budgetDay = Math.floor(appData.budgetMonth/30);  
    },
    getTargetMonth: function(){
        return appData.period = Math.ceil(appData.mission/appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay > 1200) {
            return "У вас высокий уровень дохода"
        } else if (appData.budgetDay < 1200 && appData.budgetDay > 600){
            return "У вас средний уровень дохода"
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0){
            return "К сожалению у вас уровень дохода ниже среднего"
        } else if (appData.budgetDay < 0){
            return "Что то пошло не так"
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
console.log("Расходы за месяц "+ appData.expensesMonth);
console.log("Цель будет достигнута за "+ appData.getTargetMonth()+" месяца");
console.log(appData.getStatusIncome());

for (let key in appData){
    console.log("Свойство: "+ key + " значение: " + appData[key]);
}
