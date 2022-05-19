/* *** Task 1 *** */
// Объявить и инициализировать 2 массива: fruits, vegetables.
// fruits: 'яблоко', 'слива', 'груша', 'апельсин'
// vegetables: 'картофель', 'помидор', 'морковь'
// При помощи доступа по индексу arr[index] Вывести в консоль апельсин и картофель.
{
  // Пиши код ниже этой строки

  console.log('Task 1: ');
  //
}

/* *** Task 2 *** */
// Вывести в консоль последний элемент массива фруктов БЕЗ использования числа в качестве индекса.
{
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  // Пиши код ниже этой строки
  console.log('Task 2: ');
  //
}

/* *** Task 3 *** */
// Измените значения элементов массива фруктов с индексами 1 и 3 на 'персик' и 'банан' соответственно
// Выведите весь массив в консоль
{
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  // Пиши код ниже этой строки
  console.log('Task 3: ');
  //
}

/* *** Task 4 *** */
// Создайте переменную fruitsArrayLength и присвойте ей значение длины массива фруктов.
// Выведите fruitsArrayLength в консоль
{
  const fruits = ['яблоко', 'персик', 'груша', 'банан'];
  // Пиши код ниже этой строки

  console.log('Task 4: ');
  //
}

/* *** Task 5 *** */
// Присвойте длине массива fruits значение 1 и выведите весь массив в консоль.
// Обратите внимание как изменился массив
{
  const fruits = ['яблоко', 'персик', 'груша', 'банан'];
  // Пиши код ниже этой строки

  console.log('Task 5: ');
  //
}

/* *** Task 6 *** */
// Реализуйте функцию getExtremeElements.
// Функция возвращает массив из двух чисел, первое из которых содержит значение нулевого элемента стартового массива,
// второе - последнего элемента.
// Т.е. возвращает МАССИВ с первым и последним элементами исходного массива.
{
  function getExtremeElements(array) {
    // Пиши код ниже этой строки
    return;
    // Пиши код выше этой строки
  }
  console.log('Task 6: ', [1, 2, 3, 4, 5, 6, 7, 8]);
  console.log('Task 6: ', [7, 4, 14]);
  console.log('Task 6: ', ['cat', 'dog', 'fish', 'horse']);
  //
}

/* *** Task 7 *** */
// Реализуйте функцию splitMessage, которая разделяет переданную строку по разделителю (второй параметр).
// Функция возвращает массив слов.
{
  function splitMessage(message, delimeter) {
    let words;
    // Пиши код ниже этой строки

    // Пиши код выше этой строки
    return words;
  }

  console.log('Task 7: ', splitMessage('Hi! I`m JavaScript! Nice to meet you!', ' '));
  console.log('Task 7: ', splitMessage('beer, meat, fish, cheese', ', '));

  //
}

/* *** Task 8 *** */
// Реализуйте функцию calculateEngravingPrice, которая принимает строку для гравировки и стоимость гравировки одного слова.
// Функция должна возвращать общую стоимость гравироки всего предложения.
{
  // Пиши код ниже этой строки
  function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки
    return;

    // Пиши код выше этой строки
  }

  calculateEngravingPrice('Hi! I`m JavaScript! Nice to meet you!', 10); // 70
  calculateEngravingPrice(`Вы заказали дронов на сумму 11 кредитов.`, 15); // 105
}

/* *** Task 9 *** */
// Реализуйте функцию makeStringFromArray.
// Функция должна "сшивать" массив слов в строку по переданному разделителю (второй параметр).
// Возвращает результирующую строку.
{
  function makeStringFromArray(array, delimeter) {
    let string;
    // Пиши код ниже этой строки

    return;
    // Пиши код выше этой строки
  }

  console.log('Task 9: ', makeStringFromArray(['Hi!', 'I`m', 'JavaScript!', 'Nice', 'to', 'meet', 'you!'], ' ')); //'Hi! I`m JavaScript! Nice to meet you!'
  console.log('Task 9: ', makeStringFromArray(['beer', 'meat', 'fish', 'cheese'], ', ')); // 'beer, meat, fish, cheese'
}

/* *** Task 10 *** */
// Отредактировать функцию slugify, которая превращает заголовок в слаг.
// То есть функция должна привести все символы в нижний регистр, разбить строку на массив слов
// и "сшить" обратно в строку с разделителем дефисом.
// Пример: "My Favorite Slug" -> "my-favorite-slug"
// Функция должна возвращать строку.
{
  function slugify(title) {
    // Пиши код ниже этой строки
    return;

    // Пиши код выше этой строки
  }

  console.log('Task 10: ', slugify('Best of JavaScript')); // best-of-javascript
  console.log('Task 10: ', slugify('React is awesome')); // react-is-awesome
  console.log('Task 10: ', slugify('Try it right now')); // try-it-right-now
}

/* *** Task 11 *** */
// Используя метод slice обрежте массив:
// firstTwoEls - первый 2 элемента
// nonExtremeEls - не крайние элементы (без нулевого и последнего)
// lastThreeEls - последние 3 элемента
{
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
  // Пиши код ниже этой строки
  const firstTwoEls = undefined;
  const nonExtremeEls = undefined;
  const lastThreeEls = undefined;

  console.log('Task 11: ', firstTwoEls); // ['яблоко', 'слива']
  console.log('Task 11: ', nonExtremeEls); // ['слива', 'груша', 'апельсин']
  console.log('Task 11: ', lastThreeEls); // ['груша', 'апельсин', 'банан']
}

/* *** Task 12 *** */
// allClients - должен объединить 2 массива: oldClients и newClients.
{
  const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
  const newClients = ['Персик', 'Хьюстон'];

  const allClients = undefined; // Дополни эту строку

  console.log('Task 12: ', allClients); // ['Манго', 'Аякс', 'Поли', 'Киви', 'Персик', 'Хьюстон']
}
