/*      Реалізувати функцію створення об'єкта "користувач".

Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.

При виклику функція повинна запитати у імені, що викликає, і прізвище.

Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, 
все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).

Створити користувача за допомогою функції createNewUser(). Викликати користувача функцію getLogin(). 
Вивести у консоль результат виконання функції.


2) Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем.
Візьміть виконане завдання вище (створена вами функція createNewUser()) та доповніть її наступним функціоналом:

При виклику функція повинна запитати у дату народження, що викликає, (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
Створити метод getAge() який повертатиме скільки користувачеві років.
Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі,
поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).


Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.


3) Реалізувати функцію фільтру масиву за вказаним типом даних.

Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, 
тип яких був переданий другим аргументом. 
Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].*/

// const box = document.querySelector('.box');

class CreateNeWUser {
  constructor(firstName, lastName, birthsday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthsday = birthsday;
  }

  getLogin() {
    if (
      this.firstName == null ||
      this.lastName == null ||
      this.birthsday == null
    ) {
      return (
        alert("Необходимо полностью указать ваши данные"),
        alert("Обновите страницу")
      );
    } else {
      const login = (this.firstName[0] + this.lastName).toLocaleLowerCase();
      return login;
    }
  }

  getAge() {
    const age =
      new Date().getFullYear() - parseInt(this.birthsday.substring(6, 10));
    return age;
  }

  getPassword() {
    const password =
      this.firstName[0].toUpperCase() +
      this.lastName.toLocaleLowerCase() +
      this.birthsday.substring(6, 10);
    return password;
  }
}

const newUser = new CreateNeWUser(
  prompt("Enter your first name"),
  prompt("Enter your last name"),
  prompt("Enter your Date of Birth", ["dd.mm.yyyy"])
);

console.log(
  `${newUser.firstName} ${newUser.lastName} =>  ${newUser.getLogin()}`
);

console.log(`User are ${newUser.getAge()} years old`);

console.log(`${newUser.firstName} ${newUser.lastName} ${newUser.birthsday}  
=>  ${newUser.getPassword()}`
);

const defaultArray = [
  "string_1",
  23,
  true,
  100,
  "string_2",
  null,
  function () {},
  new Object(),
];
const someFilter = "string";

const filterBy = (arr, typeOfValueInArr) => {
  const arrFilter = arr.filter((el) => typeof el !== typeOfValueInArr);
  return (
    console.log("Исходный массив"),
    console.log(defaultArray),
    console.log("Исключаем все строки из масcивa"),
    console.log(arrFilter)
  );
};

filterBy(defaultArray, someFilter);
