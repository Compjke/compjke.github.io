// ======================  1 ==========================
// Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для вывода имени и
// фамилии

class User {
  constructor(option) {
    this.id = option.id;
    this.name = option.name;
    this.lastName = option.lastName;
  }

  showUser() {
    console.log(`${this.id} : 
   name : ${this.name} 
   surname : ${this.lastName}
   `);
  }
}

const userIvan = new User({
  id: "UserIvan",
  name: "Ivan",
  lastName: "Pupkin",
});

userIvan.showUser();



// ======================  2 ==========================
// Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу
// синий фон, а 3 красный

const [...liOfList] = document.querySelectorAll(".list > li");

liOfList.forEach((li, ind) => {
  if (ind === 0) {
    li.style.background = "blue";
    li.style.width = 100 + "px";
  }
  if (ind === 2) {
    li.style.background = "red";
    li.style.width = 100 + "px";
  }
});


// ======================  3 ==========================
// Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки выведите текстом
// координаты, где находится курсор мышки

const div = document.createElement("div");
div.style.maxWidth = div.style.height = 400 + "px";
div.style.background =
  "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
div.style.marginBottom = 20 + "px";

const ul = document.querySelector(".list");
ul.insertAdjacentElement("afterend", div);

const pX = document.createElement("p");
const pY = document.createElement("p");
div.prepend(pX);
div.append(pY);

function showXY(e) {
  pX.textContent = `X on browser : ${e.clientX} X on div : ${e.offsetX}`;
  pY.textContent = `Y on browser : ${e.clientY} Y on div : ${e.offsetY}`;
}

div.addEventListener("mousemove", showXY);
div.addEventListener("mouseleave", () => {
  pX.textContent = pY.textContent = "";
});




// ======================  4  ==========================
// Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата

const buttons = document.querySelectorAll("button");

buttons.forEach(el => {
  el.addEventListener("click", (e) => {
    alert(`You'r clicked ${e.target.textContent}`);
  });
});




// ======================  5  ==========================
// Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице

const divForMove = document.querySelector('#div-for-move');

divForMove.style.maxWidth = divForMove.style.height = 200 + 'px';
divForMove.style.marginTop = divForMove.style.marginBottom  = 50 + 'px';
divForMove.style.background = 'green';
divForMove.innerText = 'Div for move'


divForMove.addEventListener('mousemove',(e)=>{
  let mouseX = e.x - 50;

    divForMove.style.translate = `${mouseX}px`
    divForMove.style.transform = `rotateZ(${mouseX}deg)`

})



// ======================  6  ==========================
// Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body
const colorInput = document.querySelector('#color')
colorInput.addEventListener('input', (e)=>{
  document.body.style.background = colorInput.value
})



// ======================  7  ==========================
// Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль

const inputLogin = document.createElement('input');
inputLogin.width = 300;
inputLogin.style.marginBottom = 30 + 'px'
inputLogin.placeholder = 'Enter Login'
document.body.insertAdjacentElement('beforeend',inputLogin)
inputLogin.addEventListener('input', () => console.log(inputLogin.value))



// ======================  8  ==========================
// Создайте поле для ввода данных поле введения данных выведите текст под полем

const inputData = document.createElement('input');
inputData.width = 300;
inputData.style.display = 'block'
inputData.placeholder = 'Some data'
inputLogin.after(inputData)
const  p = document.createElement('p');
inputData.after(p)
inputData.addEventListener('input', (e) => p.textContent = inputData.value)
