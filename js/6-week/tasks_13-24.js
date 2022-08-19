/* *** Task 13 *** */
// Реализуйте функцию getFriends, которая возвращает уникальных друзей всех пользователей.
// Уникальные, то есть без повторений,
// !!! ВНИМАНИЕ !!!
// Реализуйте два варианта решения этой задачи:
// - с использованием Set
// - без использования Set
{
  const users = [
    {
      name: "Ivan Best",
      friends: ["Vasya", "Taras", "Ilya", "Kolya", "Sasha", "Oleg"],
    },
    { name: "Thimothy First", friends: ["Sergey", "Taras", "Lena", "Ira"] },
    {
      name: "Mango Tasty",
      friends: ["Zina", "Taras", "Kristina", "Dima", "Sasha"],
    },
    { name: "Dan Balan", friends: ["Igor", "Lena", "Vova", "Kolya"] },
  ];
  // Пиши код ниже этой строки
  const getFriends = (users) => {
    let mySet = new Set();
    for (element of users) {
      element.friends.forEach((subelement) => {
        mySet.add(subelement);
      });
    }
    return mySet;
  };

  const getFriends2 = (users) => {
    return users.reduce((accumulator, currentValue) => {
      for (friend of currentValue.friends) {
        accumulator.includes(friend) ? null : accumulator.push(friend);
      }
      return accumulator;
    }, []);
  };
  // Пиши код выше этой строки

  console.log("Task 13: ", getFriends(users)); // ['Vasya','Taras','Ilya','Kolya','Sasha','Oleg','Sergey','Lena','Ira','Zina',
  //  'Kristina','Dima','Igor','Vova']
  console.log("Task 13: ", getFriends2(users));
}

/* *** Task 14 *** */
// Реализуйте функцию getActiveUsers, которая возвращает всех активных пользователей.
//
{
  const users = [
    { name: "Ivan Best", isActive: true },
    { name: "Water Melon", isActive: false },
    { name: "Thimothy First", isActive: true },
    { name: "Mango Tasty", isActive: false },
    { name: "Dan Balan", isActive: false },
  ];
  // Пиши код ниже этой строки
  const getActiveUsers = (users) => {
    return users.filter((user) => user.isActive);
  };

  console.log("Task 14: ", getActiveUsers(users)); // [{ name: 'Ivan Best', isActive: true }, { name: 'Thimothy First', isActive: true }]
}

/* *** Task 15 *** */
// Реализуйте функции getBookByTitle, getBookByAuthor, которые находят книгу по названию и по автору соответственно.
// Также реализуйте функции getBookByField, которая находит книгу по переданному в виде строки полю и значению.
// Например, getBookByField('pages', 350) вернет { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38, pages: 350 }
// В функции реализуйте проверку !!!, есть ли такое поле.
{
  const books = [
    {
      title: "Последнее королевство",
      author: "Бернард Корнуэлл",
      rating: 8.38,
      pages: 350,
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      rating: 8.51,
      pages: 252,
    },
    { title: "Заповіт", author: "Тарас Шевченко", rating: 8.35, pages: 280 },
    { title: "Красна как кровь", author: "Ли Танит", rating: 7.94, pages: 300 },
  ];
  // Пиши код ниже этой строки

  const getBookByTitle = (title) => {
    return books.filter((book) => book.title === title);
  };
  const getBookByAuthor = (Author) => {
    return books.filter((book) => book.author === Author);
  };
  const getBookByField = (field, value) => {
    if (books.some((book) => book[field])) {
      return books.filter((book) => book[field] === value);
    }
    return null;
  };
  console.log("Task 15: ", getBookByTitle("Заповіт")); // { title: 'Заповіт', author: 'Тарас Шевченко', rating: 8.35, pages: 280 }
  console.log("Task 15: ", getBookByAuthor("Ли Танит")); // { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94, pages: 300 }
  console.log("Task 15: ", getBookByField("rating", 8.51)); // { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51, pages: 252 }
  console.log("Task 15: ", getBookByField("price", 85)); // null
}

/* *** Task 16 *** */
// Используя методы массива every || some, запишите в следующие переменные требуемые значения
// - eachElementInFirstIsEven - все ли элементы первого массива четные
// - eachElementInFirstIsOdd - все ли элементы первого массива четные
// - someElementInSecondIsEven - хотя бы 1 элемент второго массива четный
// - someElementInSecondIsOdd - хотя бы 1 элемент второго массива нечетный
// - allUsersAreOnline - все юзеры в онлайне
// - someUsersAreOffline - кто-то из юзеров оффлайн
{
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const users = [
    { name: "Ivan Best", isOnline: true },
    { name: "Water Melon", isOnline: false },
    { name: "Thimothy First", isOnline: true },
    { name: "Mango Tasty", isOnline: false },
    { name: "Dan Balan", isOnline: false },
  ];
  // Пиши код ниже этой строки

  const eachElementInFirstIsEven = firstArray.every((item) => item % 2 === 0);
  const eachElementInFirstIsOdd = firstArray.some((item) => item % 2 === 0);

  const someElementInSecondIsEven = secondArray.some((item) => item % 2 === 0);
  const someElementInSecondIsOdd = secondArray.some((item) => item % 2 !== 0);

  const allUsersAreOnline = users.every((user) => user.isOnline);
  const someUsersAreOffline = users.some((user) => !user.isOnline);

  console.log("Task 16: ", eachElementInFirstIsEven);
  console.log("Task 16: ", eachElementInFirstIsOdd);
  console.log("Task 16: ", someElementInSecondIsEven);
  console.log("Task 16: ", someElementInSecondIsOdd);
  console.log("Task 16: ", allUsersAreOnline);
  console.log("Task 16: ", someUsersAreOffline);
}

/* *** Task 17 *** */
// Используя метод массива reduce посчитать totalPlayTime.
{
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Пиши код ниже этой строки

  const totalPlayTime = playtimes.reduce(
    (playtimesAcc, currentValue) => playtimesAcc + currentValue
  );

  // Пиши код выше этой строки
  const averagePlayTime = totalPlayTime / playtimes.length;

  console.log("Task 17: ", averagePlayTime); // 673
}

/* *** Task 18 *** */
// Используя метод массива reduce посчитать totalAveragePlaytimePerGame.
// То есть общую среднюю длительность игр всех пользователей.
{
  const players = [
    { name: "Манго", playtime: 1270, gamesPlayed: 4 },
    { name: "Поли", playtime: 469, gamesPlayed: 2 },
    { name: "Аякс", playtime: 690, gamesPlayed: 3 },
    { name: "Киви", playtime: 241, gamesPlayed: 1 },
  ];
  // Пиши код ниже этой строки

  const totalAveragePlaytimePerGame = players.reduce(
    (playersAcc, currentValue) =>
      playersAcc + currentValue.playtime / currentValue.gamesPlayed,
    0
  );

  console.log("Task 18: ", totalAveragePlaytimePerGame); // 1023
}

/* *** Task 19 *** */
// Используя метод массива reduce реализовать функцию calculateTotalBalance.
// считает общий баланс у пользователей
{
  const users = [
    { name: "Манго", balance: 1270 },
    { name: "Поли", balance: -50 },
    { name: "Аякс", balance: 700 },
    { name: "Киви", balance: 241 },
  ];
  // Пиши код ниже этой строки

  const calculateTotalBalance = (users) => {
    return users.reduce((userAcc, user) => userAcc + user.balance, 0);
  };

  console.log("Task 19: ", calculateTotalBalance(users)); // 2161
}

/* *** Task 20 *** */
// Используя метод массива reduce реализовать функцию getTotalFriendCount.
// считает общее количество друзей у всех пользователей
{
  const users = [
    { name: "Ivan Best", friends: ["Vasya", "Taras", "Ilya", "Kolya", "Oleg"] },
    { name: "Thimothy First", friends: ["Sergey", "Lena", "Ira"] },
    { name: "Mango Tasty", friends: ["Zina", "Kristina", "Dima", "Sasha"] },
    { name: "Dan Balan", friends: ["Igor", "Vova"] },
  ];
  // Пиши код ниже этой строки

  const getTotalFriendCount = (users) =>
    users.reduce((userAcc, user) => userAcc + user.friends.length, 0);
  console.log("Task 20: ", getTotalFriendCount(users)); // 2161
}

/* *** Task 21 *** */
// Используя метод массива sort отсортируйте даты по возрастанию, авторов - в алфавитном порядке.
{
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Ли Танит",
    "Бернард Корнуэлл",
    "Роберт Шекли",
    "Тарас Шевченко",
  ];
  // Пиши код ниже этой строки

  const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);

  const alphabeticalAuthors = authors.sort();

  console.log("Task 21: ", ascendingReleaseDates, alphabeticalAuthors);
}

/* *** Task 22 *** */
// Используя метод массива sort отсортируйте даты по убыванию, авторов - в порядке обратном алфавитному.
{
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    "Ли Танит",
    "Бернард Корнуэлл",
    "Роберт Шекли",
    "Тарас Шевченко",
  ];
  // Пиши код ниже этой строки

  const descendingReleaseDates = releaseDates.sort((a, b) => b - a);

  const reversedAlphabeticalAuthors = authors.sort((a, b) => (a > b ? -1 : 1));

  console.log("Task 22: ", descendingReleaseDates, reversedAlphabeticalAuthors);
}

/* *** Task 23 *** */
// Используя метод массива sort отсортируйте books по убыванию
// sortedByAuthorName - по имени автора - в алфавитном порядке;
// sortedByReversedAuthorName - по имени автора - в порядке обратном алфавитному;
// sortedByAscendingRating - по рейтингу - в порядке возрастания;
// sortedByDescentingRating - по рейтингу - в порядке убывания;

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

  const sortedByAuthorName = books.sort((a, b) =>
    a.author < b.author ? -1 : 1
  );

  const sortedByReversedAuthorName = books.sort((a, b) =>
    a.author > b.author ? -1 : 1
  );

  const sortedByAscendingRating = books.sort((a, b) =>
    a.rating < b.rating ? -1 : 1
  );

  const sortedByDescentingRating = books.sort((a, b) =>
    a.rating > b.rating ? -1 : 1
  );

  console.log(
    "Task 23: ",
    sortedByAuthorName,
    sortedByReversedAuthorName,
    sortedByAscendingRating,
    sortedByDescentingRating
  );
}

/* *** Task 24 *** */
// Реализуйте функцию sortByAscendingBalance используя метод массива sort.
// Функция сортирует users по возрастанию баланса

{
  const users = [
    { name: "Манго", balance: 1270 },
    { name: "Поли", balance: -50 },
    { name: "Аякс", balance: 700 },
    { name: "Киви", balance: 241 },
  ];
  // Пиши код ниже этой строки

  const sortByAscendingBalance = () =>
    users.sort((a, b) => (a.balance < b.balance ? -1 : 1));

  console.log("Task 24: ", sortByAscendingBalance());
}
