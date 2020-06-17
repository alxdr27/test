//Кнопку "Рассчитать" через id
let start = document.getElementById("start");

//Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let plusIncome = document.getElementsByTagName("button")[0];
let plusExpenses = document.getElementsByTagName("button")[1];

//Чекбокс по id через querySelector
let checkbox = document.querySelectorAll("[type='checkbox']");

//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let addIncomeItem = document.querySelectorAll(".additional_income-item")

//Каждый элемент в правой части программы через класс, которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
let budgetMonthValue = document.querySelector(".budget_month-value");
let budgetDayValue = document.querySelector(".budget_day-value")
let expensesMonthValue = document.querySelector('.expenses_month-value')
let additionalIncomeValue = document.querySelector(".additional_income-value")
let additionalExpensesValue = document.querySelector(".additional_expenses-value")
let incomePeriodValue = document.querySelector(".income_period-value")
let targetMonthValue = document.querySelector(".target_month-value")



//Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.


let salaryAmount = document.querySelector(".salary-amount")
let incomeTitle = document.querySelector(".income-items>.income-title")
let incomeAmount = document.querySelector(".income-amount")
let additionalIncomeItem = document.querySelector(".additional_income-item")
let expensesTitle = document.querySelector(".expenses-items>.expenses-title")
let expensesAmount = document.querySelector(".expenses-amount")
let additionalExpensesItem = document.querySelector(".additional_expenses-item")
let depositCheck = document.querySelector("#deposit-check")
let depositAmount = document.querySelector(".deposit-amount")
let depositPercent = document.querySelector(".deposit-percent")
let targetAmount = document.querySelector(".target-amount")
let range = document.querySelector("[type='range']")
console.log( range )