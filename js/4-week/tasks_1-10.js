/* *** Task 1 *** */
// Есть функция makePizza().
//  Присвойте переменной result результат вызова ф-ции,
// а переменной pointer - указатель на саму функцию.
{
  function makePizza() {
    return "Ваша пицца готовится, ожидайте.";
  }
  // Пиши код ниже этой строки

  const result = makePizza();
  const pointer = makePizza;

  console.log("Task 1: ", result, pointer);
  //
}

/* *** Task 2 *** */
// Релизуйте функцию makeMessage, которая принимает 2 параметра - pizzaName (название пиццы)
// и callback (функция, которая принимает pizzaName и которая будет возвращена как результат makeMessage)

{
  const pizzaName = "papperony";

  function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }

  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }

  function makeMessage(pizzaName, method) {
    return method(pizzaName);
  }

  // Пиши код ниже этой строки
  console.log("Task 2: ", makeMessage(pizzaName, makePizza));
}

/* *** Task 3 *** */
// Допишите функцию makePizza и ее вызов с 2 функциями-колбеками
{
  // Пиши код ниже этой строки
  function makePizza(pizzaName, method) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    method(pizzaName);
    // колбек, который приходит как аргумент функции, с именем пиццы в качестве параметра;
  }

  makePizza(
    "Ультрасыр",
    function deliverPizza(pizzaName) {
      console.log(`"Доставляем пиццу ${pizzaName}"`);
    }
    /*опишите ПРЯМО ЗДЕСЬ (Function Declaration) вторым параметром функцию-колбек доставитьПиццу, которая консолит "Доставляем пиццу *НАЗВАНИЕ ПИЦЦЫ*"*/
  );

  makePizza(
    "Роял гранд",
    function EatPizza(pizzaName) {
      console.log(`"Едим пиццу ${pizzaName}"`);
    } /*опишите ПРЯМО ЗДЕСЬ (Function Declaration) вторым параметром функцию-колбек кушатьПиццу, которая консолит "Едим пиццу *НАЗВАНИЕ ПИЦЦЫ*"*/
  );

  // Пиши код выше этой строки
  console.log("Task 3: ");
  //
}

/* *** Task 4 *** */
// Реализуйте объект pizzaPalace, который имеет поле, которое хранит массив с 3 пиццами -'Ультрасыр', 'Аль Копчино', 'Четыре нарезона',
// имеет метод заказатьПиццу, который принимает 3 параметра - название пиццы и 2 колбека.
// Метод заказатьПиццу проверяет есть ли такая пицца в ассортименте, если есть то вызывается коллбек1 (успех),
// если такой пиццы нет - вызывается коллбек2 (ошибка)
{
  // Пиши код ниже этой строки
  const pizzaPalace = {
    name: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
    order: function (pizzaName, method1, method2) {
      return this.name.includes(pizzaName)
        ? method1(pizzaName)
        : method2(pizzaName);
    },
  };
  // Пиши код выше этой строки

  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }

  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }

  // Вызовите методы с колбэками
  console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
  console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
  //pizzaPalace.order('Четыре нарезона');
  //pizzaPalace.order('Биг майк');
  //pizzaPalace.order('Венская');
  // Пиши код выше этой строки

  console.log("Task 4: ");
  //
}

/* *** Task 5 *** */
// Реализуйте объект pizzaPalace, который имеет поле, которое хранит массив с 3 пиццами -'Ультрасыр', 'Аль Копчино', 'Четыре нарезона',
// имеет метод проверитьНаличиеПиццы, который проверяет есть ли такая пицца в ассортименте (возвращает true/false),
// имеет метод заказатьПиццу, который внутри себя вызывает метод проверитьНаличиеПиццы (проверка), и если есть такой пиццы нет в ассортименте,
// то консолит "В ассортименте нет пиццы с названием «НАЗВАНИЕ ПИЦЦЫ»",
// если такая пицца есть - `Заказ принят, готовим пиццу «НАЗВАНИЕ ПИЦЦЫ».
{
  // Пиши код ниже этой строки
  const pizzaPalace = {
    name: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
    exzist: function (pizzaName) {
      return this.name.includes(pizzaName) ? true : false;
    },
    order: function (pizzaName) {
      return this.exzist(pizzaName)
        ? `"Заказ принят, готовим пиццу ${pizzaName}"`
        : `"В ассортименте нет пиццы с названием ${pizzaName}»"`;
    },
  };
  // Пиши код выше этой строки

  console.log("Task 5: ", pizzaPalace.order("Ультрасыр"));
  //
}

/* *** Task 6 *** */
// В объекте customer реализуйте следующие методы:
// - получитьБаланс
// - получитьДисконт
// - установитьДисконт (принимает новое значение дисконта)
// - получитьЗаказы
// - добавитьЗаказ (принимает стоимость заказа и сам заказ, вычисляет новое значение баланса в зависимости от текущего дисконта
// и добавляет в массив заказов новый заказ)

{
  const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Пиши код ниже этой строки
    getBalance: function () {
      return this.balance;
    },
    getDiscount: function () {
      return this.discount;
    },
    setDiscount: function (newDiscount) {
      this.discount = newDiscount;
    },
    getOrders: function () {
      return this.orders;
    },
    addOrders: function (pice, order) {
      this.balance = this.balance - (pice - pice * this.discount);
      this.balance > 0 ? this.orders.push(order) : console.log("money vse ");
    },

    // Пиши код выше этой строки
  };

  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrders(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
  console.log("Task 6: ");
  //
}

/* *** Task 7 *** */
// Реализуйте функцию composeMessage, которая принимает параметр позиция заказа в очереди и
// возвращает строку "Готовим *НАЗВАНИЕ БЛЮДА* для *АДРЕС ПОЧТЫ email*. Ваш заказ *НОМЕР ПОЗИЦИИ*-й в очереди.""
// Запишите в переменную messages результаты вызова этой функции для каждого заказа в массиве orders (Используйте map и call)
{
  const orders = [
    { email: "solomon@topmail.ua", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "jacob@mail.com", dish: "Taco" },
  ];

  // Пиши код ниже этой строки
  function composeMessage(orderNumber) {
    let order = orders[orderNumber];
    return `"Готовим ${order.dish} для  ${order.email}. Ваш заказ ${
      orderNumber + 1
    }-й в очереди."`;
  }

  let messages = orders.map((order, index) => {
    return composeMessage.call(this, index);
  });

  console.log("Task 7: ", messages);
  //
}

/* *** Task 8 *** */
// То же самое что и в задании 7, но используйте apply для вызова функций
{
  const orders = [
    { email: "solomon@topmail.ua", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "jacob@mail.com", dish: "Taco" },
  ];

  // Пиши код ниже этой строки
  function composeMessage(orderNumber) {
    let order = orders[orderNumber];
    return `"Готовим ${order.dish} для  ${order.email}. Ваш заказ ${
      orderNumber + 1
    }-й в очереди."`;
  }

  let messages = orders.map((order, index) => {
    return composeMessage.apply(this, [index]);
  });

  console.log("Task 8: ", messages);
}

/* *** Task 9 *** */
// Используя bind создайте переменную pizzaPalaceComposer, в которую будет "привязан" объект pizzaPalace
// В переменную pizzaPalaceMessage запишите результат вызова pizzaPalaceComposer. customerName - Манго
// Аналогичные действия проделайте с burgerShackComposer и burgerShackMessage. customerName - Поли
{
  const pizzaPalace = {
    company: "Pizza Palace",
  };

  const burgerShack = {
    company: "Burger Shack",
  };

  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }
  // Пиши код ниже этой строки

  const pizzaPalaceComposer = pizzaPalace;
  const pizzaPalaceMessage = composeMessage.bind(pizzaPalaceComposer);

  const burgerShackComposer = burgerShack;
  const burgerShackMessage = composeMessage.bind(burgerShackComposer);

  console.log("Task 9: ", burgerShackMessage("Поли"));
}

/* *** Task 10 *** */
// В объекте service реализуйте методы
// - подписаться, который принимает почту как параметр, записывает ее в массив mailingList и возвращает строку
//    `Почта *АДРЕС ПОЧТЫ* добавлена в рассылку.`
// - отписаться, который принимает почту как параметр, удаляет ее из массива mailingList и возвращает строку
//    `Почта *АДРЕС ПОЧТЫ* удалена из рассылки.`
// Также отдельно реализуйте функцию logAndInvokeAction, которая принимает 2 параметра: email и action
// Функция консолит `Выполняем действие с *АДРЕС ПОЧТЫ*.` и возвращает ВЫЗОВ функции с параметром почты.
// После этого присвойте присвойте переменной firstInvoke вызов фукнции logAndInvokeAction
// с новым адресом почты "kiwi@mail.uk" в контексте метода "подписаться" объекта service.
// После этого присвойте присвойте переменной secondInvoke вызов фукнции logAndInvokeAction
// с уже существующим адресом почты "kiwi@mail.uk" в контексте метода "отписаться" объекта service.
// Используйте bind.
{
  const service = {
    mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
    subscribe: function (email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe: function (email) {
      this.mailingList = this.mailingList.filter(function (e) {
        return e !== email;
      });
      return `Почта ${email} удалена из рассылки.`;
    },
    // !!! дополнить здесь
  };

  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action.call(this, email);
  } // !!! дополнить здесь

  console.log("Task 10: ");
  const firstInvoke = logAndInvokeAction.bind(service); // !!! дополнить здесь
  console.log(firstInvoke("kiwi@mail.uk", service.subscribe));
  // Почта kiwi@mail.uk добавлена в рассылку.

  console.log(service.mailingList);
  /* ['mango@mail.com',
      'poly@hotmail.de',
      'ajax@jmail.net',
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction.bind(service); // !!! дополнить здесь
  console.log(secondInvoke("poly@hotmail.de", service.unsubscribe));
  // Почта poly@hotmail.de удалена из рассылки.

  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
}
