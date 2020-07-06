
let start = document.getElementById("start");
let cancel = document.getElementById("cancel");
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
let incomeAmount = document.querySelector(".income-items>.income-amount");
let incomeItems = document.querySelectorAll(".income-items");
let expensesTitle = document.querySelector(".expenses-items>.expenses-title");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let depositAmount = document.querySelector(".deposit-amount");
let depositPercent = document.querySelector(".deposit-percent");
let targetAmount = document.querySelector(".target-amount");
let periodAmount = document.querySelector(".period-amount");
let periodSelect = document.querySelector(".period-select");

start.disabled = true;
//2) В нашем объекте везде использовать this как ссылку на объект appData (где это возможно)
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
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
//4) Блокировать все input[type=text] с левой стороны после нажатия кнопки рассчитать,
        this.blockInput();    
    },
    blockInput: function() {
        let inputs = document.querySelectorAll("[type=text]");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;    
        };
        btnPlus[0].disabled = true;
        btnPlus[1].disabled = true;
// после этого кнопка Рассчитать пропадает и появляется кнопка Сбросить, на которую навешиваем событие и выполнение метода reset (стр 210)
        start.style.display="none";
        cancel.style.display="block"
    },
    reset: function() {
        let inputs = document.querySelectorAll("[type=text]")
//Метод reset должен всю программу возвращать в исходное состояние
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
            inputs[i].value = "";    
        };
        btnPlus[0].disabled = false;
        btnPlus[1].disabled = false;
        cancel.style.display="none";
        start.style.display="block";    
    },
    blockStart: function() {
        if (salaryAmount.value.length > 0) {
            console.log(salaryAmount.value.length)
            start.disabled = false;
        }
    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(", ");
        additionalIncomeValue.value = this.addIncome.join(", ");
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
//3) Проверить работу кнопок плюс и input-range (исправить если что-то не работает)
        periodSelect.addEventListener("input", function(){
//this.budgetMonth не работало, исправил обратно на appData
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

        for (let key in this.income) {
            this.incomeMonth += +this.income[key]
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ""){
                this.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ""){
                this.addIncome.push(itemValue);
            }
        });
    },
    getInfoDeposit: function () {
        
        if (this.deposit) {
            this.percentDeposit = prompt("Какой годовой процент?", '10');
            this.moneyDeposit = prompt("Какая сумма заложена", 100000)
        }
    },
    getExpensesMonth: function () {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key]
        }
    },

    getBudget: function () {
        return this.budgetMonth = appData.budget + this.incomeMonth - this.expensesMonth,
            this.budgetDay = Math.ceil(this.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function () {
        if (this.budgetDay > 1200) {
            return "У вас высокий уровень дохода"
        } else if (this.budgetDay < 1200 && this.budgetDay > 600) {
            return "У вас средний уровень дохода"
        } else if (this.budgetDay < 600 && this.budgetDay > 0) {
            return "К сожалению у вас уровень дохода ниже среднего"
        } else if (this.budgetDay < 0) {
            return "Что то пошло не так"
        }
    },

    getPeriod: function() {
        periodAmount.innerHTML = periodSelect.value;
    },
    calcPeriod: function() {
        this.budgetMonth * periodSelect.value
    },

    calcSavedMoney: function () {
        return this.budgetMonth * this.period;
    },

};
//1) Привязать контекст вызова функции start к appData 
start.addEventListener("click", appData.start.bind(appData));

cancel.addEventListener("click", appData.reset.bind(appData));
periodSelect.addEventListener("input", appData.getPeriod );
expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);
salaryAmount.addEventListener("mouseleave", appData.blockStart);

appData.blockStart();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
appData.getPeriod();
appData.calcPeriod();

