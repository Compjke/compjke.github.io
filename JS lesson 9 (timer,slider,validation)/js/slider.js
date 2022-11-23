// Создаем пустой див
const emptyDiv = document.createElement("div");
// Находим секундомер
const stopWatchContainer = document.querySelector(".container-stopwatch");
// Создаем тег будущей картинки
const image = document.createElement("img");

// Псоле секундомера вставляем пустойдив
stopWatchContainer.after(emptyDiv);
// В этот див встваляем картинку и вешаем общие атрибуты
emptyDiv.append(image);
image.src = "./img/1.jpeg";
image.width = 300;
image.height = 300;
image.style.marginBottom = 20 + "px";
image.style.marginTop = 20 + "px";

// Создаем массив с путями к разным картинкам
const arrOfSrcImages = [
  "./img/1.jpeg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
];
// Создаем функции которая рандомно в атрибут пути к картинке будет подставлять
// значение пути и при каждом интервальном заупуске картинка в итоге будем разная
function sliderRandom() {
  image.src = arrOfSrcImages[Math.floor(Math.random() * arrOfSrcImages.length)];
}

setInterval(sliderRandom, 3000);
