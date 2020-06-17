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
let value = document.querySelectorAll("*[class]")
console.log(value)