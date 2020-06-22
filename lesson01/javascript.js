
let start = document.getElementById("start");

let plusIncome = document.getElementsByTagName("button")[0];
let plusExpenses = document.getElementsByTagName("button")[1];

let checkbox = document.querySelectorAll("[type='checkbox']");

let addIncomeItem = document.querySelectorAll(".additional_income-item")

let budgetMonthValue = document.querySelector(".budget_month-value");
let budgetDayValue = document.querySelector(".budget_day-value")
let expensesMonthValue = document.querySelector('.expenses_month-value')
let additionalIncomeValue = document.querySelector(".additional_income-value")
let additionalExpensesValue = document.querySelector(".additional_expenses-value")
let incomePeriodValue = document.querySelector(".income_period-value")
let targetMonthValue = document.querySelector(".target_month-value")

let salaryAmount = document.querySelector(".salary-amount")
let incomeTitle = document.querySelector(".income-items>.income-title")
let additionalIncomeItem = document.querySelector(".additional_income-item")
let expensesTitle = document.querySelector(".expenses-items>.expenses-title")
let expensesItems = document.querySelectorAll(".expenses-items")
let additionalExpensesItem = document.querySelector(".additional_expenses-item")
let depositCheck = document.querySelector("#deposit-check")
let depositAmount = document.querySelector(".deposit-amount")
let depositPercent = document.querySelector(".deposit-percent")
let targetAmount = document.querySelector(".target-amount")
let range = document.querySelector("[type='range']")
let periodSelect = document.querySelector(".period-select")
let incomeItem = document.querySelectorAll(".income-items")


let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    start: function () {
        if(salaryAmount.value === ""){
            alert("Ошибка, поле 'Месячный доход' должно быть заполнено!");
            return;
        }
        appData.budget = +salaryAmount.value;
        console.log("salaryAmount.value: ", salaryAmount.value);

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(", ");
        additionalIncomeValue.value = appData.addIncome.join(", ");
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod()
    },
    addExpensesBlock: function(){
        let expensesItems = document.querySelectorAll(".expenses-items");
        console.log(expensesItem.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

        if(expensesItems.length === 3){
            expensesPlus.style.display = "none";
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cashExpenses = item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" && cashExpenses !=="") {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        })
    },
    getIncome: function(){
        if (confirm("Есть ли у вас дополнительный заработок?")) {
            let itemIncome;
            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            } while (itemIncome = !isString(itemIncome));
            let cashIncome;
            do {
                cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", "10000");
            } while (cashIncome = !isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome
        }

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key]
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesValue.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ""){
                appData.addExpenses,push(item);
            }
        })
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ""){
                appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key]
        }
    },
    getBudget: function () {
        return appData.budgetMonth = appData.budget +appData.incomeMonth - appData.expensesMonth,
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            return "У вас высокий уровень дохода"
        } else if (appData.budgetDay < 1200 && appData.budgetDay > 600) {
            return "У вас средний уровень дохода"
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return "К сожалению у вас уровень дохода ниже среднего"
        } else if (appData.budgetDay < 0) {
            return "Что то пошло не так"
        }
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");
            } while (!isNumber(appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt("Какая сумма", 10000);
            } while (!isNumber(appData.moneyDeposit));

        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

start.addEventListener("click", appData.start);
expensesPlus.addEventListener("click", appData.addExpensesBlock);



appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
console.log("Расходы за месяц " + appData.expensesMonth);
console.log("Цель будет достигнута за " + appData.getTargetMonth() + " месяца");
console.log(appData.getStatusIncome());
for (let key in appData) {
    console.log("Свойство: " + key + " значение: " + appData[key]);
}
