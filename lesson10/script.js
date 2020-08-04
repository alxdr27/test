const elems = document.querySelectorAll(".book"),
    collection = document.querySelector(".books"),
    title = document.getElementsByTagName("a")[4],
    adv = document.querySelector(".adv"),
    list = document.getElementsByTagName("li")
    

//Восстановить порядок книг.
    collection.prepend(elems[1]);
    collection.append(elems[2]);
    elems[3].before(elems[4]);
//Заменить картинку заднего фона на другую из папки image
    document.body.style.background = "url(image/you-dont-know-js.jpg)";
//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
    title.textContent = "Книга 3. this и Прототипы Объектов"
//Удалить рекламу со страницы
    adv.remove();
//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
    list[9].after(list[12])
    list[10].after(list[14])
    list[15].after(list[8])

    list[37].after(list[45])
    list[38].after(list[40])
    list[39].after(list[41])
    list[44].after(list[42])
//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
    list[55].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>')