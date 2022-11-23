window.onload = ()=>{
//Находим ранне созданный пустой див
const emptyDiv = document.body.children[1];
// Создаем пустой инпут и вешаем атрибуты
const input = document.createElement('input');
input.type = 'text';
input.placeholder = '000-000-00-00'
// Создаем кнопку и вешаем атрибуты
const btnSave = document.createElement('button');
btnSave.type = 'submit';
btnSave.textContent = 'Save';
// Отображаем на странице созданный инпут после дива и кнопку после инпута
emptyDiv.after(input);
input.after(btnSave);

// Создаем RegExp
const validPhone = /^\d{3}-\d{3}-\d{2}-\d{2}$/

//Слушаем клип кнопки
btnSave.onclick =() =>{
   // Смотрим совпаддает ли значение инпута с регуляркой
   if(validPhone.test(input.value)){
      input.value = 'SUCCESS!!!!'
      document.body.style.background = 'green'
      setTimeout(() => {
         document.location = './page-location.html'
      }, 1000);
   }else{
      const div = document.createElement('div');
      input.after(div)
      div.textContent = 'Неверный формат номера refresh page'
      input.remove();
      btnSave.remove();
   }
}


}