// Находим елемент на странице по дата атрибуту
const btnCreateCircle = document.querySelector("[data-button]");

// Прослушиваем событие клика по елементу кнопки
btnCreateCircle.addEventListener("click", function () {
  // после клика по кнопке создаем инпут и вешаем ему стили
  const input = document.createElement("input");
  input.style.width = "30%";
  input.value = "";
  input.type = "text";
  input.placeholder = "Введите диаметр круга в пикселях";
  //  также паралельно создаем кнопки для генерирования случайных кругов и также вешаем ей атрибуты
  const btnDraw = document.createElement("input");
  (btnDraw.type = "button"), (btnDraw.value = "Намалювати");
  // убераем изначальную кнопку и ставим на ее место инпут с кнопкой генерации кружков
  btnCreateCircle.replaceWith(input, btnDraw);
  //  далее создаем функцию по клику кнопки генерации кругов
  btnDraw.onclick = () => {
    // проверяем чтобы в инпуте не было значения пустой строки,поскольку инпут типа текст
    if (input.value !== "") {
      // Создаем функцию генерации кругов и записываем в переменную
      const circle_s = () => {
        // сбрасываю все стили у боди ,чтобы корректно отоброзились сгенерированные кружки
        document.body.style.flexWrap = "wrap";
        document.body.style.height = "auto";
        document.body.style.background = "none";

        // запускаем цикл который создает круги
        for (i = 1; i < 100; i++) {
          // создаем образец круга в виде пустого дива и вешаем ему изначальные стили для каждого круга
          const circle = document.createElement("div");
          circle.style.borderRadius = "50%";
          circle.style.width = +input.value + "px";
          circle.style.height = +input.value + "px";
          circle.style.cursor = "pointer";
          circle.style.background = `hsl(${Math.floor(
            Math.random() * 360
          )}, 100%, 40%)`;

          //  в после открывающего тега "боди" интегрируем сгенерированный круг
          document.body.insertAdjacentElement("afterbegin", circle);
          // и убераем инпут с кнопкой
          btnDraw.remove(), input.remove();
          // далее прослушываем событие клика на теле всего документа и если целью клика являеться круг то удаляем его
          document.body.addEventListener("click", function (e) {
            if (e.target === circle) e.target.remove();
          });
        }
      };
      // запускаем все это дело
      circle_s();

      // выводим алерт если не ввели значение в инпут
    } else {
      alert("Введите значение в пикселях для создания круга!");
    }
  };
});
