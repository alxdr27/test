let money; 
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let isString = function(n){
    return isNaN(String(n))
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {
        
    },
    
    asking: function () {
        if(confirm("Есть ли у вас дополнительный заработок?")){
            let itemIncome;
            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            }while(itemIncome = !isString(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", "10000");
            } while (cashIncome = !isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome 
        }
             
   //2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и пробелом
   //Пример (Интернет, Такси, Коммунальные расходы)
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
    //Перебираю массив с расходами 
        
        for (let i = 0; i < appData.addExpenses.length; i++) {
            //str = каждый расход
            let str = appData.addExpenses[i];
            
            appData.addExpenses[i] = str[0].toUpperCase() + str.substring(1);
        }
        console.log( appData.addExpenses.join(", "));
            
            appData.deposit = confirm("Есть ли у вас депозит в банке?")
        let question=0;
        let expense="";
        for (let i = 0; i < 2; i++) {
            do {
                expense = prompt("Введите обязательную статью расходов");
            } while (!isString(expense));
            do {
                question = prompt('Во сколько это обойдётся?');
            } while (!isNumber(question));
            appData.expenses[expense] = question
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");  
            } while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt("Какая сумма", 10000);
            } while (!isNumber(appData.moneyDeposit));
            
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
console.log("Расходы за месяц "+ appData.expensesMonth);
console.log("Цель будет достигнута за "+ appData.getTargetMonth()+" месяца");
console.log(appData.getStatusIncome());
for (let key in appData){
    console.log("Свойство: "+ key + " значение: " + appData[key]);
}
