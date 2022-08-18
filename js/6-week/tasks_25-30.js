/* *** Task 25 *** */
// Реализуйте функцию sortByDescendingFriendCount используя метод массива sort.
// Функция сортирует users по количеству друзей в порядке убывания

{
  const users = [
    { name: 'Ivan Best', friends: ['Vasya', 'Taras', 'Ilya', 'Kolya', 'Oleg'] },
    { name: 'Thimothy First', friends: ['Sergey', 'Lena', 'Ira'] },
    { name: 'Mango Tasty', friends: ['Zina', 'Kristina', 'Dima', 'Sasha'] },
    { name: 'Dan Balan', friends: ['Igor', 'Vova'] },
  ];
  // Пиши код ниже этой строки

  const sortByDescendingFriendCount = () => {
    return;
  };

  console.log('Task 25: ', sortByDescendingFriendCount());
}

/* *** Task 26 *** */
// Реализуйте функцию sortByAscendingTotalOrders.
// Функция сортирует users по сумме всех заказов в порядке возрастания
// Используйте reduce!

{
  const users = [
    { name: 'Манго', orders: [120, 100, 50, 30] },
    { name: 'Поли', orders: [50, 70, 110, 20] },
    { name: 'Аякс', orders: [70, 130, 200, 80] },
    { name: 'Киви', orders: [30, 20, 40] },
  ];
  // Пиши код ниже этой строки

  const sortByAscendingTotalOrders = () => {
    return;
  };

  console.log('Task 26: ', sortByAscendingTotalOrders());
}

/* *** Task 27 *** */
// Запишите в переменную names массив авторов книг с рейтингом выше MIN_BOOK_RATING. Авторы должны быть отсортированны в алфавитном порядке.

{
  const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 7.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Заповіт', author: 'Тарас Шевченко', rating: 8.25 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
  ];
  const MIN_BOOK_RATING = 8;
  // Пиши код ниже этой строки

  const names = undefined;

  console.log('Task 27: ', names);
}

/* *** Task 28 *** */
// Реализуйте функцию getNamesSortedByFriendCount, которая выводит массив имен пользователей
// отсортированный по количеству друзей в порядке убывания.

{
  const users = [
    { name: 'Ivan Best', friends: ['Vasya', 'Taras', 'Ilya', 'Kolya', 'Oleg'] },
    { name: 'Thimothy First', friends: ['Sergey', 'Lena', 'Ira'] },
    { name: 'Mango Tasty', friends: ['Zina', 'Kristina', 'Dima', 'Sasha'] },
    { name: 'Dan Balan', friends: ['Igor', 'Vova'] },
  ];
  // Пиши код ниже этой строки

  const getNamesSortedByFriendCount = () => {
    return;
  };

  console.log('Task 28: ', getNamesSortedByFriendCount());
}

/* *** Task 29 *** */
// Реализуйте функцию getAverageAgeByGender, которая принимает пол в качестве параметра
// и возвращает среднеарифметическое значение возраста пользователей с указанным полом.
// отсортированный по количеству друзей в порядке убывания.
// Округлите результат до ближайшего целого числа
// Используйте reduce!
{
  const users = [
    { name: 'Ivan Best', age: 35, gender: 'male' },
    { name: 'Thimothy First', age: 20, gender: 'male' },
    { name: 'Mango Tasty', age: 16, gender: 'female' },
    { name: 'Dan Balan', age: 18, gender: 'male' },
    { name: 'Poly Third', age: 31, gender: 'female' },
    { name: 'Lena Forest', age: 26, gender: 'female' },
    { name: 'Cucumber Green', age: 42, gender: 'male' },
    { name: 'Ann Last', age: 14, gender: 'female' },
  ];
  // Пиши код ниже этой строки

  // Пиши код ниже этой строки
  const getAverageAgeByGender = () => {
    return;
  };
  // Пиши код выше этой строки

  console.log('Task 29: ', getAverageAgeByGender(users, 'female')); // 22
  console.log('Task 29: ', getAverageAgeByGender(users, 'male')); // 29
}

/* *** Task 30 *** */
// Реализуйте функцию getTransactionsSummary, которая
// считает результирующее значение всех транзакций.
// Причем калькуляция идет по принципу: если транзакция income то +,
// если expense то -.
// Также эта функция должна находить maxIncome & maxExpense, то есть максимальный доход и максимальный расход.
// Используйте reduce!!!
// Функция должна вернуть объект с полями total, maxIncome, maxExpense
{
  const transactions = [
    { id: 1, type: 'income', amount: 2000 },
    { id: 2, type: 'expense', amount: 1500 },
    { id: 3, type: 'expense', amount: 1200 },
    { id: 4, type: 'expense', amount: 700 },
    { id: 5, type: 'income', amount: 2400 },
    { id: 6, type: 'expense', amount: 400 },
    { id: 7, type: 'income', amount: 1000 },
    { id: 8, type: 'expense', amount: 1700 },
    { id: 9, type: 'expense', amount: 200 },
    { id: 10, type: 'income', amount: 1900 },
  ];
  // Пиши код ниже этой строки

  // Пиши код ниже этой строки
  const getTransactionsSummary = (transactions) => {
    return;
  };
  // Пиши код выше этой строки

  console.log('Task 30: ', getTransactionsSummary(transactions)); // { total: 1600, maxIncome: 2400, maxExpense: 1700 }
}
