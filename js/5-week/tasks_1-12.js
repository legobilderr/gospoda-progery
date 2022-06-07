/* *** Task 1 *** */
// Cоздать функцию Car, которая принимает 3 параметра:
// марка, модель, цена.
// Функция возвращает объект с переданными полями.
// С помощью ключевого слова new создайте 3 объекта автомобилей с разными данными.
// Выведите в консоль.
{
  // Пиши код ниже этой строки

  const Car = function ({ name, model, price } = {}) {
    this.name = name;
    this.model = model;
    this.price = price;
  };
  let tesla = new Car({ name: "tesla", model: "modelX", price: 100000 });
  let audi = new Car({ name: "audi", model: "rs3", price: 60000 });
  let mersedes = new Car({ name: "mersedes", model: "clk270", price: 8000 });
  console.log("Task 1: ", tesla, audi, mersedes);
  //
}

/* *** Task 2 *** */
// Cоздайте функцию Car, которая принимает так называемый объект настроек, который содержит 3 поля (марка, модель, цена):
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте !!! НА ПРОТОТИП !!! Car 2 метода:
// - получитьЦену, который ! ЧЕРЕЗ this ! возвращает цену автомобиля
// - установитьЦену, который ! ЧЕРЕЗ this ! меняет цену автомобиля на переданную в качестве параметра
// Создайте при помощи ключевого слова new автомобиль и вызовите эти 2 функции
{
  const Car = function ({ name, model, price } = {}) {
    this.name = name;
    this.model = model;
    this.price = price;
  };
  Car.prototype.GetPrice = function () {
    return this.price;
  };
  Car.prototype.SetPrice = function (NewPrice) {
    this.price = NewPrice;
    return "price updated";
  };

  let tesla = new Car({ name: "tesla", model: "modelX", price: 100000 });
  console.log("Task 2: ", tesla.GetPrice());
  console.log("Task 2: ", tesla.SetPrice(2000000));
  console.log("Task 2: ", tesla.GetPrice());
}

/* *** Task 3 *** */
// Допишите функцию Storage, которая принимает массив строковых значений items.
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте на прототип Storage 3 метода, которые вызываются ниже в коде.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод.
{
  // Пиши код ниже этой строки
  function Storage(data) {
    this.data = data;
  }

  Storage.prototype.getItems = function () {
    return this.data;
  };

  Storage.prototype.addItem = function (dataItem) {
    this.data.push(dataItem);
  };

  Storage.prototype.removeItem = function (dataItem) {
    this.data = this.data.filter(function (e) {
      return e != dataItem;
    });
  };
  // Пиши код выше этой строки
  console.log("Task 3: ");
  const storage = new Storage(["Games", "Video", "Documents"]);
  console.log(storage.getItems()); // ["Games", "Video", "Documents"]
  storage.addItem("Music");
  console.log(storage.getItems()); // ["Games", "Video", "Documents", "Music"]
  storage.removeItem("Video");
  console.log(storage.getItems()); // ["Games", "Documents", "Music"]
  //
}

/* *** Task 4 *** */
// Допишите функцию StringBuilder, которая принимает строковое значение.
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте на прототип функции StringBuilder 3 метода, которые вызываются ниже в коде.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод.
{
  // Пиши код ниже этой строки
  function StringBuilder(smileNouse = ".") {
    this.smile = smileNouse;
  }

  StringBuilder.prototype.getValue = function (smileLeftEye) {
    return this.smile;
  };

  StringBuilder.prototype.padStart = function (smileLeftEye) {
    this.smile = smileLeftEye + this.smile;
  };

  StringBuilder.prototype.padEnd = function (smileRightEye) {
    this.smile = this.smile + smileRightEye;
  };

  StringBuilder.prototype.padBoth = function (smileЕars) {
    this.smile = smileЕars + this.smile + smileЕars;
  };

  // Пиши код выше этой строки
  console.log("Task 4: ");
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // '.'
  builder.padStart("^");
  console.log(builder.getValue()); // '^.'
  builder.padEnd("^");
  console.log(builder.getValue()); // '^.^'
  builder.padBoth("=");
  console.log(builder.getValue()); // '=^.^='
  //
}

/* *** Task 5 *** */
// Cоздайте класс Car, конструктор которого принимает так называемый объект настроек, который содержит 3 поля (марка, модель, цена):
// Конструктор "записывает" эти данные в экземпляр класса.
// Создайте при помощи данного класса автомобиль и выведите его в консоль.
{
  // Пиши код ниже этой строки
  class Car {
    constructor({ brand, model, price } = {}) {
      (this.brand = brand), (this.model = model), (this.price = price);
    }
  }
  const audi = new Car({ brand: "audi", model: "a3", price: 20000 });

  console.log("Task 5: ", audi);
  //
}

/* *** Task 6 *** */
// Дополните класс Car двумя методами:
// - получитьЦену
// - изменитьЦену
// Методы релизуют действия, соответствующие их названия.
// В методе изменитьЦену осуществите проверку какой аргумент приходит.
// !!! Цена - это обязательно ПОЛОЖИТЕЛЬНОЕ ЧИСЛО.
{
  class Car {
    constructor({ brand, model, price } = {}) {
      (this.brand = brand), (this.model = model), (this.price = price);
    }
    get priceObj() {
      return this.price;
    }
    set priceObj(NewPrice) {
      this.price = NewPrice;
    }
  }

  const audi = new Car({ brand: "audi", model: "a3", price: 20000 });
  console.log(audi);
  console.log(audi.price);
  audi.price = 19000;
  console.log(audi);
  // Пиши код ниже этой строки
  console.log("Task 6: ");
  //
}

/* *** Task 7 *** */
// Дополните класс Car ! ПРИВАТНЫМ ! полем "двигатель" (строковое значение) и двумя методами, которые работают с этим полем
// - получитьДвигатель
// - изменитьДвигатель
{
  // Пиши код ниже этой строки

  class Car {
    #engin = "v6";

    constructor() {}

    get objectEngin() {
      return this.#engin;
    }

    set objectEngin(newEngin) {
      this.#engin = newEngin;
    }
  }

  const car = new Car();
  console.log(car.objectEngin);
  car.objectEngin = "v8";
  console.log(car.objectEngin);
  console.log("Task 7: ");
  //
}

/* *** Task 8 *** */
// Допишите класс Storage (по аналогии с заданием 3).
// Поле items - приватное.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод класса.
{
  // Пиши код ниже этой строки
  class Storage {
    #items = undefined;
    constructor(items = []) {
      this.#items = items;
    }

    getItems() {
      return this.#items;
    }

    addItem(item) {
      this.#items.push(item);
    }

    removeItem(item) {
      this.#items = this.#items.filter((e) => {
        return e != item;
      });
    }
  }
  // Пиши код выше этой строки
  console.log("Task 8: ");
  const storage = new Storage(["Games", "Video", "Documents"]);
  console.log(storage.getItems()); // ["Games", "Video", "Documents"]
  storage.addItem("Music");
  console.log(storage.getItems()); // ["Games", "Video", "Documents", "Music"]
  storage.removeItem("Video");
  console.log(storage.getItems()); // ["Games", "Documents", "Music"]
}

/* *** Task 9 *** */
// Допишите класс Storage (по аналогии с заданием 4).
// Поле value - приватное.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод класса.
{
  // Пиши код ниже этой строки
  class StringBuilder {
    constructor(duafult = ".") {
      this.smileFace = duafult;
    }
    getValue() {
      return this.smileFace;
    }

    padStart(left) {
      this.smileFace = left + this.smileFace;
    }
    padEnd(right) {
      this.smileFace = this.smileFace + right;
    }
    padBoth(ears) {
      this.smileFace = ears + this.smileFace + ears;
    }
    clear() {
      this.smileFace = "";
    }
  }
  // Пиши код выше этой строки
  console.log("Task 9: ");
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // '.'
  builder.padStart("^");
  console.log(builder.getValue()); // '^.'
  builder.padEnd("^");
  console.log(builder.getValue()); // '^.^'
  builder.padBoth("=");
  console.log(builder.getValue()); // '=^.^='
  builder.clear();
  console.log(builder.getValue()); // ''
}

/* *** Task 10 *** */
// Реализуйте класс Car так, чтобы в нем для каждого поля была функция-сеттер и функция-геттер
// Всего в классе 3 приватных поля: марка, модель, цена
{
  class Car {
    #brand;
    #model;
    #price;

    constructor({ brand, model, price } = {}) {
      (this.#brand = brand), (this.#model = model), (this.#price = price);
    }

    get objBrand() {
      return this.#brand;
    }
    set objBrand(newBrand) {
      this.brand = newBrand;
    }
    get objModel() {
      return this.model;
    }
    set objModel(newModel) {
      this.brand = newBrand;
    }
    get objPrice() {
      return this.brand;
    }
    set objPrice(newBrand) {
      this.brand = newBrand;
    }
  }

  const audi = new Car({ brand: "audi", model: "a3", price: 20000 });
  console.log(audi);
  console.log(audi.objBrand);
  console.log("Task 10: ");
}

/* *** Task 11 *** */
// Реализуйте класс Car, в котором есть статическое поле "МАКСИМАЛЬНАЯ_ЦЕНА" с числовым значением 50000 и приватное поле "цена",
// В классе есть конструктор, геттер и сеттер для цены.
// При чем сеттер работает так: если новая цена превышает максимальную цену, то сохраняется старая цена,
// если новая цена меньше максимальной, устанавливается новая цена.
{
  class Car {
    // Пиши код ниже этой строки
    static maxPrice = 50000;
    #price;
    constructor({ price } = {}) {
      this.#price = price;
    }

    get objprice() {
      return this.#price;
    }

    set objprice(newPrice) {
      newPrice < Car.maxPrice
        ? (this.#price = newPrice)
        : console.log("слишком большая цена ");
    }
    // Пиши код выше этой строки
  }
  console.log("Task 11: ");

  const audi = new Car({ price: 35000 });
  console.log(audi.objprice); // 35000

  audi.objprice = 49000;
  console.log(audi.objprice); // 49000

  audi.objprice = 51000;
  console.log(audi.objprice); // 49000
}

/* *** Task 12 *** */
// Дополните класс Car из задания 11 статическим методом "проверитьЦену", который принимает в качестве аргумента цену
// В случае если цена больше максимальной, возвращается 'Внимание! Цена превышает допустимую.'
// если цена меньше,  возвращается 'Всё хорошо, цена в порядке.'
{
  class Car {
    // Пиши код ниже этой строки
    static maxPrice = 50000;

    static checkPrice(new_price) {
      return new_price < Car.maxPrice
        ? "Всё хорошо, цена в порядке."
        : "Внимание! Цена превышает допустимую.";
    }
    #price;
    constructor({ price } = {}) {
      this.price = price;
    }

    get objprice() {
      return this.#price;
    }

    set objprice(newPrice) {
      newPrice < Car.maxPrice
        ? (this.#price = newPrice)
        : console.log("слишком большая цена ");
    }
    // Пиши код выше этой строки
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  console.log("Task 12: ");
  console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
  console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
}
