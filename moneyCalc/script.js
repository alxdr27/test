const   totalBalance=document.querySelector('.total__balance'),
        totalMoneyIncome=document.querySelector('.total__money-income'),
        totalMoneyExpenses=document.querySelector('.total__money-expenses'),
        historyList=document.querySelector('.history__list'),
        form=document.getElementsById('form'),
        operationName=document.querySelector('operation__name'),
        operationAmount=document.querySelector('operation__amount');
let dbOperation=[
    {
        id: '1',
        description:'Получил зарплату',
        amount:30000,
    },
    {
        id: '2',
        description:'Квартплата',
        amount:-2000,
    },
    {
        id: '3',
        description:'Купил обувь',
        amount:-5000,
    },
    {
        id: '4',
        description:'Аванс',
        amount:10000,
    },
    {
        id: '5',
        description:'Вернули долг',
        amount:20000,
    },
]
const renderOperation = () =>{
    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.innerHTML = `
        <span class="history__money">+30000 ₽</span>
        <button class="history_delete">x</button>
    
    `;

    historyList.append(listItem);
}


