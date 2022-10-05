
/*
ДЗ : 
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/
var box = document.getElementsByClassName('box')[0];
var paragr = document.getElementById('p');

function Calculator() {

   this.read = () => {    
      this.numberOne = +prompt("Введите первую цифру");
      this.numberTwo = +prompt("Введите вторую цифру");
     
   };

   this.sum = () => {
      let sum = this.numberOne + this.numberTwo;
      box.innerHTML = `Сумма ваших чисел = ${sum}`
   };

   this.mul = () => {
      let multiply = this.numberOne * this.numberTwo;
      paragr.innerHTML = `Умножение ваших чисел = ${multiply}`
   };
};

const calc = new Calculator();

calc.read(),calc.sum(),calc.mul();











