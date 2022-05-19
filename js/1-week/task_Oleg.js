import mock from "./transactions.js";

const getSummary = (query) => {
  let first = mock.reduce((curentValue) => console.log(curentValue, "pizda"));
  // Реализовать функцию getSummary, которая принимает объект запроса, состоящий из type и year,
  // обрабатывает данные транзакций (см. файл transactions.js) и выдает результат в представленном ниже
  // виде, то есть считает все транзакции за месяц по указанному типу.
  //
  // !!! Обязательное условие: использование метода массивов reduce !!!
  //
  // При решении этой задачи приветствуется создание функций-хелперов.
  // result
  //    [
  //     { month: 'january', type: 'income', total: 1300 },
  //     { month: 'february', type: 'income', total: 2300 },
  //     { month: 'march', type: 'income', total: 0 },
  //     { month: 'april', type: 'income', total: 0 },
  //     { month: 'may', type: 'income', total: 0 },
  //     { month: 'june', type: 'income', total: 0 },
  //     { month: 'july', type: 'income', total: 0 },
  //     { month: 'august', type: 'income', total: 0 },
  //     { month: 'september', type: 'income', total: 0 },
  //     { month: 'october', type: 'income', total: 1300 },
  //     { month: 'november', type: 'income', total: 100 },
  //     { month: 'december', type: 'income', total: 2000 }
  //   ]
};

const result = getSummary({ type: "income", year: "2021" });

console.log("result", result);
