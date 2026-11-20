// ===== Домашнє завдання 29 =====
// Тема: createElement, appendChild, видалення елементів,
// addEventListener, об'єкт event, stopPropagation.
// Верстку і стилі зробити самостійно: index.html з порожнім списком
// для покупок і style.css, де описаний клас .done
// (наприклад, закреслений текст для купленого товару).

// Вихідні дані:

// const products = [`Молоко`, `Хліб`, `Сир`, `Яблука`, `Кава`];

// Завдання: «Список покупок».
//
// 1. Для кожного товару з масиву products створити елемент <li>
//    і додати його в список на сторінці.
//    Елементи створювати через document.createElement, а не через innerHTML списку.
//
// 2. Усередині кожного <li> — кнопка `✕`, яка видаляє саме цей пункт.
//
// 3. Клік по самому пункту перемикає на ньому клас done (куплено / не куплено).
//    Клік по кнопці `✕` при цьому НЕ повинен перемикати клас —
//    тільки видаляти пункт.
//
// Очікувано: клік по «Хліб» закреслює його, повторний клік знімає закреслення →
// клік по `✕` біля «Сир» прибирає пункт зі списку,
// решта пунктів залишаються без змін.


const products = [`Молоко`, `Хліб`, `Сир`, `Яблука`, `Кава`];
const list = document.querySelector('.list');


products.forEach(product => {
    //1.передача продуктов в ul
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.textContent = product;
    list.appendChild(li);

    //2. дальше создание кнопки Х для удаления
    const delButton = document.createElement('button');
    delButton.textContent = "X";
    li.appendChild(delButton);

    //3.перевключение на done
    li.addEventListener(`click`, () => {
        li.classList.toggle('done');
    });

    //4. логика удаления
    delButton.addEventListener(`click`, () => {
        li.remove();
    });

});

