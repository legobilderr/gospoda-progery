/* *** Task 1 *** */
// При помощи forEach посчитать сумму заказов в массиве orderedItems.
// !!! ВНИМАНИЕ БЛЕТ !!!
// !!! Добавьте проверку для orderedItems (массив ли это?)
// !!! Добавьте проверку для каждого элемента (число?)
{
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
    if (Array.isArray(orderedItems)) {
      orderedItems.forEach((value) =>
        isNaN(value) ? console.log("eror not number") : (totalPrice += value)
      );
    } else {
      totalPrice = "eror not array";
    }

    // Пиши код выше этой строки
    return totalPrice;
  }
  console.log("Task 1: ", calculateTotalPrice([22, 80, 40, 35, 2])); // return 179
  console.log("Task 1: ", calculateTotalPrice([undefined, 80, null, 35, "a"])); // return 115 and console some error message
  console.log(
    "Task 1: ",
    calculateTotalPrice("It`s a f**king string, not array!")
  ); // return some error message
  console.log("Task 1: ", calculateTotalPrice(null)); // return some error message

  //
}

/* *** Task 2 *** */
// Используя forEach записать в filteredNumbers только те значения, которые больше value
{
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
    numbers.forEach((numberValue) =>
      numberValue > value ? filteredNumbers.push(numberValue) : ""
    );

    // Пиши код выше этой строки
    return filteredNumbers;
  }
  console.log("Task 2: ", filterArray([22, 80, 40, 35, 2], 36)); // [80, 40]
}

/* *** Task 3 *** */
// Используя forEach записать в новый массив commonElements общие элементы двух переданных массивов.
{
  // Пиши код ниже этой строки
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
    firstArray.forEach((value) =>
      secondArray.includes(value) ? commonElements.push(value) : ""
    );

    // Пиши код выше этой строки
    return commonElements;
  }
  console.log(
    "Task 3: ",
    getCommonElements(
      [1, 2, 3, 22, 30, 50, 72, 80],
      [2, 4, 11, 30, 42, 51, 74, 80]
    )
  ); // [2, 30, 80]
  //
}

/* *** Task 4 *** */
// Реализуйте функцию extractAndCalculateNumbers, которая извлекает из строки с целыми числами и словами ЧИСЛА,
// считает и возвращает их общую сумму. extractAndCalculateNumbers - это функциональное выражение с синтаксисом стрелочной функции.
{
  // Пиши код ниже этой строки
  const extractAndCalculateNumbers = (string) => {
    let summ = 0;
    string
      .split(" ")
      .forEach((value) => (isNaN(value) ? "" : (summ += Number(value))));
    return summ;
  };

  // Пиши код выше этой строки
  console.log(
    "Task 4: ",
    extractAndCalculateNumbers("10 eggs, 7 apples, 3 potatoes, 5 peaches")
  ); // 25
  console.log(
    "Task 4: ",
    extractAndCalculateNumbers(
      "- 1 latte; - 2 black tea; - 5 green tea; - 5 beers"
    )
  ); // 13
  //
}

/* *** Task 5 *** */
// Реализуйте функцию getWordsWithSelectedLength, которая извлекает из строки слова, длина которых равна переданному значению,
// !!! Обязательно используем метод массива filter.
// getWordsWithSelectedLength - это функциональное выражение с синтаксисом стрелочной функции.
{
  // Пиши код ниже этой строки
  const getWordsWithSelectedLength = (string, maxLenth) => {
    return string.split(/[,. ]/).filter((word) => word.length === maxLenth);
  };

  // Пиши код выше этой строки
  console.log(
    "Task 5: ",
    getWordsWithSelectedLength("This pig is really big.", 3)
  ); // ['pig', 'big']
  console.log(
    "Task 5: ",
    getWordsWithSelectedLength("Four seasons, one life, last resort", 4)
  ); //  ['Four', 'life', 'last']
  //
}

/* *** Task 6 *** */
// Реализуйте функцию changeEven, которая принимает массив чисел numbers и значение value.
// Используя метод map и тернарный оператор, функция проверяет каждый элемент, и если элемент - это четное число, то прибавляет к нему value,
// если нечетное, оставляет его как есть.
// changeEven - это функциональное выражение с синтаксисом стрелочной функции.
// !!! Записать функцию нужно максимально коротко !!!
{
  // Пиши код ниже этой строки
  const changeEven = undefined;

  // Пиши код выше этой строки

  console.log("Task 6: ", changeEven([1, 2, 3, 4, 5], 3)); // [1,5,3,7,5]
  console.log("Task 6: ", changeEven([12, 13, 15, 17, 18], 10)); // [22,13,15,17,28]
  //
}

/* *** Task 7 *** */
// Запишите все заглавия книг в массив titles.
// Используем map
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
    { title: "Заповіт", author: "Тарас Шевченко", rating: 7.75 },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
  ];
  // Пиши код ниже этой строки

  const titles = undefined;
  // Пиши код ниже этой строки
  console.log("Task 7: ", titles);
  //
}

/* *** Task 8 *** */
// Запишите инициалы (первые буквы имени и фамилии) авторов книг в массив authorsInitials.
// Используем map
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
    { title: "Заповіт", author: "Тарас Шевченко", rating: 7.75 },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
  ];
  // Пиши код ниже этой строки

  const authorsInitials = undefined;
  // Пиши код выше этой строки
  console.log("Task 8: ", authorsInitials); // ['БК', "РШ", "ТШ", "ЛТ", "БК"]
}

/* *** Task 9 *** */
// Используя flatMap запишите в массив genres все жанры книг books
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      genres: ["приключения", "историческое"],
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      genres: ["фантастика"],
    },
    {
      title: "Красна как кровь",
      author: "Ли Танит",
      genres: ["ужасы", "мистика"],
    },
  ];
  // Пиши код ниже этой строки

  const genres = undefined;
  // Пиши код выше этой строки
  console.log("Task 9: ", genres); // ['приключения', 'историческое', 'фантастика', 'ужасы', 'мистика']
}

/* *** Task 10 *** */
// Используя flatMap и filter нужно получить жанры книг без дубликатов.
// Используйте чейнинг (chaining)
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      genres: ["приключения", "историческое"],
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      genres: ["фантастика", "мистика"],
    },
    {
      title: "Красна как кровь",
      author: "Ли Танит",
      genres: ["ужасы", "мистика", "приключения"],
    },
  ];
  // Пиши код ниже этой строки
  const uniqueGenres = undefined;
  console.log("Task 10: ", uniqueGenres); //['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы']
}

/* *** Task 11 *** */
// Нужно получить (записать в массив topBooks) все книги с рейтингом более MIN_RATING и отсортировать их по рейтингу в порядке убывания.
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
    },
    { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.58 },
    { title: "Заповіт", author: "Тарас Шевченко", rating: 8.51 },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
    { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
    { title: "Гибель титанов", author: "Теодор Драйзер", rating: 8.54 },
    { title: "Война и мир", author: "Лев Толстой", rating: 6.0 },
    { title: "Хоббит: туда и обратно", author: "Дж. Толкиен", rating: 9.01 },
  ];

  const MIN_RATING = 8.5;
  // Пиши код ниже этой строки

  const topBooks = undefined;
  console.log("Task 11: ", topBooks);
}

/* *** Task 12 *** */
// Реализуйте функцию getUsersWithFriend, которая возвращает всех пользователей, у которых есть друг с указанным именем.
{
  const users = [
    { name: "Ivan Best", friends: ["Vasya, Taras, Ilya, Kolya, Oleg"] },
    { name: "Thimothy First", friends: ["Sergey, Taras, Lena, Ira"] },
    { name: "Mango Tasty", friends: ["Zina, Taras, Kristina, Dima, Sasha"] },
    { name: "Dan Balan", friends: ["Igor, Vova, Kolya"] },
  ];
  // Пиши код ниже этой строки
  const getUsersWithFriend = undefined;
  // Пиши код выше этой строки

  console.log("Task 12: ", getUsersWithFriend(users, "Taras")); // тут перечислены 3 юзера Ivan, Thimothy, Mango
  console.log("Task 12: ", getUsersWithFriend(users, "Kolya")); // тут перечислены 2 юзера Ivan, Mango, Dan
  console.log("Task 12: ", getUsersWithFriend(users, "Sergey")); // перечислен 1 юзер Thimothy
  console.log("Task 12: ", getUsersWithFriend(users, "Alexey")); // null
}
