// Находим все нужные элементы на странице
const stopWatch = document.querySelector(".stopwatch-display");
const hoursEl = stopWatch.querySelector(":first-child"); //Первый спан
const minutesEl = stopWatch.querySelector(":nth-child(2)"); //Второй
const secondsEl = stopWatch.querySelector(":last-child"); //Третий
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnReset = document.querySelector("#reset");

// Variables
let hour = 00,
  minute = 00,
  second = 00,
  interval;

// Создаем функцию таймер
startTimer = () => {
  // Стратуем с увелечения секунд
  second++;

  // SECONDS
  secondsEl.textContent = "0" + second;
  if (second > 9) {
    secondsEl.textContent = second;
  }
  if (second > 59) {
    minute++;
    minutesEl.textContent = "0" + minute;
    second = 0;
  }
  // MiNUTE
  if (minute > 9) {
    minutesEl.textContent = minute;
  }
  if (minute >= 59) {
    hour++;
    hoursEl.textContent = "0" + hour;
    minute = 0;
  }
  // HOURS
  if (hour > 9) {
    hoursEl.textContent = hour;
    if (hour > 23) {
      hour = 0;
      hoursEl.textContent = "0" + hour;
    }
  }
};

// Listerens
btnStart.onclick = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
  stopWatch.classList.remove("red", "silver");
};

btnPause.onclick = () => {
  clearInterval(interval);
  stopWatch.classList.add("red");
  stopWatch.classList.remove("silver");
};

btnReset.onclick = () => {
  clearInterval(interval);
  hour = 00;
  minute = 00;
  second = 00;
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  stopWatch.classList.add("silver");
  stopWatch.classList.remove("red");
};
