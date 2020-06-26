
let start = document.getElementById("start");
let btnPlus = document.getElementsByTagName("button");
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let checkbox = document.querySelectorAll("[type='checkbox']");
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");
let depositCheck = document.querySelector("#deposit-check");
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
let budgetMonthValue = document.getElementsByClassName("budget_month-value")[0];

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthValue = document.getElementsByClassName("accumulated_month-value")[0];
let additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0];
let additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0];
let incomePeriodValue = document.getElementsByClassName("income_period-value")[0];
let targetMonthValue = document.getElementsByClassName("target_month-value")[0];
let expensesItems = document.querySelectorAll(".expenses-items");
let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-items>.income-title");
let incomeItems = document.querySelectorAll(".income-items");
let expensesTitle = document.querySelector(".expenses-items>.expenses-title");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");

let depositAmount = document.querySelector(".deposit-amount");
let depositPercent = document.querySelector(".deposit-percent");
let targetAmount = document.querySelector(".target-amount");
let periodAmount = document.querySelector(".period-amount");
let periodSelect = document.querySelector(".period-select");

if (salaryAmount == "") {
    start.setAttribute(disabled, "");
}



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
        
        
        appData.budget = +salaryAmount.value;

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

        periodSelect.addEventListener("input", function(){
            incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
        });
        incomePeriodValue.value = appData.budgetMonth * periodSelect.value;

        
    },
    addExpensesBlock: function(){
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll(".expenses-items");
        if(expensesItems.length === 3){
            expensesPlus.style.display = "none";
        };
        
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cashExpenses = item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" && cashExpenses !=="") {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock: function(){
        
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll(".income-items");
        if(incomeItems.length === 3){
            incomePlus.style.display = "none";
        };
        
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector(".income-title").value;
            let cashIncome = item.querySelector(".income-amount").value;
            if(itemIncome !== "" && cashIncome !=="") {
                appData.income[itemIncome] = cashIncome;
            }
        })
    

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key]
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ""){
                appData.addExpenses.push(item);
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
    getInfoDeposit: function () {
        // appData.deposit = confirm("Есть ли у вас депозит в банке?");
        if (appData.deposit) {
            appData.percentDeposit = prompt("Какой годовой процент?", '10');
            appData.moneyDeposit = prompt("Какая сумма заложена", 100000)
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key]
        }
    },
    getBudget: function () {
        return appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth,
            appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
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
    getPeriod: function() {
        periodAmount.innerHTML = periodSelect.value;
    },
    calcPeriod: function() {
        appData.budgetMonth * periodSelect.value
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    },

};

start.addEventListener("click", appData.start);
periodSelect.addEventListener("input", appData.getPeriod )
expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);




appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
appData.getPeriod();
appData.calcPeriod();

