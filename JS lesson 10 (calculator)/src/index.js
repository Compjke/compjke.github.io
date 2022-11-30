// Ждем пока весь дом прогрузиться
window.addEventListener("DOMContentLoaded", () => {
  // Создаем переменные для дальнейшей работы
  let firstNumber = ""; //первая цифра
  let secondNumber = ""; // вторая
  let operationSign = ""; // знак операции
  let flagFinish = false; // флажок для работы с "="
  let mrc = ""; //для конпки памяти

  //проверочный массив для цифр
  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  //проверочный массив для кнопок операции
  const action = ["/", "*", "-", "+"];

  const calcDisplay = document.querySelector(".display > input"); //нашли дисплей
  const equals = document.querySelector(".orange"); //для удобства равно отдельно записываем
  const allButtons = document.querySelectorAll("input"); //поскольку верстка вся в инпутах нахожу их все
  const clear = document.querySelector("#c"); //вывел отдельно кнопку очистить

  //бежим по массиву со всеми инпутами
  allButtons.forEach(function (button) {
    //на каждом полученом инпуте из массива слушаем клик
    button.addEventListener("click", (e) => {
      //записываем значение полученного инпута в переменную
      const key = e.target.value;
      //проверяем есть ли совпадения значения инпута с массивом цифр
      if (digit.includes(key)) {
        //проверяем что вторая цифра и знак оператора не были присвоены
        if (secondNumber === "" && operationSign === "") {
          //присваем первой цифре значение инпута и выводим на дисплей
          firstNumber += key;
          calcDisplay.value = firstNumber;
          //проверка на случай если присвоена первая и вторая цифра и  уже был нажат знак "="
        } else if (firstNumber !== "" && secondNumber !== "" && flagFinish) {
          //вторая цифра будет равна нажатой кнопке и сбрасываем флаг
          secondNumber = key;
          flagFinish = false;
          calcDisplay.value = secondNumber;
          //если "=" еще не было использовано то тогда второй цифре просто присваиваем значение инпута
        } else {
          secondNumber += key;
          calcDisplay.value = secondNumber;
        }
      }
      // проверка на совпадение значения инпута с массивом операторов
      if (action.includes(key)) {
        //если есть то присваиваем переменной знака оператора значение нажатого инпута
        //на экран по условию выводить его не нужно
        operationSign = key;
        return;
      }
      //проверяем если кликнуто "="
      if (key === "=") {
        //тут смотрим какой знак опреации до нажатия "=" кликнул пользователь
        switch (operationSign) {
          //и в зависимости от знака делаем соостветствующие математические операции
          //и результат присваиваем первой цифре для того, чтобы потом можно было дальше проводить любые операции со вторым числом
          case "+":
            firstNumber = +firstNumber + +secondNumber;
            break;
          case "*":
            firstNumber = +firstNumber * +secondNumber;
            break;
          case "/":
            //допольнительно смотрим чтобы не делили на 0
            if (secondNumber === "0") {
              calcDisplay.value = "Error";
              firstNumber = "";
              secondNumber = "";
              operationSign = "";
              return;
            } else {
              firstNumber = +firstNumber / +secondNumber;
            }
            break;
          case "-":
            firstNumber = +firstNumber - +secondNumber;
            break;
        }
        //выводим результат и активируем флаг чтобы выше условие срабатывало
        flagFinish = true;
        calcDisplay.value = firstNumber;
      }
      // кнопка сброса просто очищает все перменные
      if (e.target.value === "C") {
        calcDisplay.value = "0";
        firstNumber = "";
        secondNumber = "";
        operationSign = "";
        // equals.disabled = true <----  вот так не срабатывает не пойму почему
      }
      // записываем в память выведенное значение на данный момент
      if (e.target.value === "m+") {
        mrc = calcDisplay.value;
        return;
      }
      //удаляем из памяти
      if (e.target.value === "m-") {
        calcDisplay.value = "Clear";
        mrc = "";
      }
      //показываем записанное число если там что то было сохранено
      if (e.target.value === "mrc") {
        if (mrc === "") {
          calcDisplay.value = "Empty";
          return;
        } else {
          //тут при показе сохраненного числа присваиваем первой цифре чтобы можно было с ним работать
          calcDisplay.value = mrc;
          firstNumber = mrc;
        }
      }
      //при нажатии любой цифры активируем кнопку равно
      equals.removeAttribute("disabled");
      console.log(firstNumber, secondNumber, operationSign); // для проверки себя
    });
  });

  // по клику очистки деактивируем знак "="
  clear.onclick = () => {
    equals.disabled = true;
  };
});
