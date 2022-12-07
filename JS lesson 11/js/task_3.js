const form = document.querySelector("form"); // Form
const elName = document.querySelector("#validation-name"); // Name
const elSurName = document.querySelector("#validation-surname"); // Surname
const elPhone = document.querySelector("#validation-phone"); // Phone
const elMail = document.querySelector("#validation-mail"); // Mail
const elCity = document.querySelector("#validation-city"); //City
// const btnSubmit = document.querySelector(".btn"); //Button to submit

let flagName = false;
let flagSurname = false;
let flagPhone = false;
let flagMail = false;
let flagCity = false;


elSurName.addEventListener('blur',validForm)
elName.addEventListener('blur',validForm)
elPhone.addEventListener("blur", validForm) 
elCity.addEventListener("blur", validForm) 
elMail.addEventListener("blur", validForm) 

// ===============
elPhone.addEventListener('input', getOperator)
elCity.addEventListener("focus", getCity);



form.addEventListener('submit',(e)=>{
   e.preventDefault()
   if(flagName && flagSurname && flagPhone && flagCity && flagMail){
   alert('Сongratulations!!!')
   }else{
      form.querySelectorAll('input').forEach((input) => {
         if(input.value === ''){
            input.previousElementSibling.textContent = '❌'
         }
      })
      alert('Заповніть корректно форму')
   }
});



// Подставляем логотип оператора
function getOperator () {
   if(/050/.test(elPhone.value) || 
   /095/.test(elPhone.value) || 
   /066/.test(elPhone.value) || 
   /099/.test(elPhone.value)){
    elPhone.classList.add('mts')
   }else{
    elPhone.classList.remove('mts')
   }
 
   if(/067/.test(elPhone.value) || 
   /096/.test(elPhone.value) || 
   /097/.test(elPhone.value)|| 
   /098/.test(elPhone.value)){
    elPhone.classList.add('kievstar')
   }else{
    elPhone.classList.remove('kievstar')
   }
 
   if(/073/.test(elPhone.value) || 
   /093/.test(elPhone.value)|| 
   /063/.test(elPhone.value)){
    elPhone.classList.add('life')
   }else{
    elPhone.classList.remove('life')
   }
}

// Получаем список городов в инпуте
function getCity() {
const datalist = document.createElement("datalist");
datalist.id = "city";
elCity.insertAdjacentElement("afterbegin", datalist);
city.forEach((el) => {
  const option = document.createElement("option");
  datalist.insertAdjacentElement('beforeend', option);
  option.value = el.city;
});
}



// Проверяем форму
function validForm(e) {

   // Ппроверяем данные телефона
      if(e.target === elPhone){
         const regExpPhoneNumber = /^\+? ?38\d{3} ?\d{3} ?\d{2} ?\d{2}$/;
         const spanValid = document.querySelector('.span-valid-phone')
         if (regExpPhoneNumber.test(elPhone.value)){
          spanValid.textContent = '✅';
          flagPhone = true;
         }else{
          spanValid.textContent = '❌';
          flagPhone = false;
         }
      }


      //Проверка фамилии

      if(e.target === elSurName){
         const regExpSurName = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/gi // не нашел как пропускать только украинские буквы 
         const spanSurName = document.querySelector('.span-valid-surname')
         if (regExpSurName.test(elSurName.value)){
          spanSurName.textContent = '✅';
          flagSurname = true;
         }else if(elSurName.value === ''){
          spanSurName.textContent = '❌';
          flagSurname = false;
         }else{
          spanSurName.textContent = "❌ Введіть прізвище українською";
          flagSurname = false;
         }
      }

      //Проверка имени
      if(e.target === elName){
         const regExpName = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/gi // не нашел как пропускать только украинские буквы 
         const spanName = document.querySelector('.span-valid-name')
         if (regExpName.test(elName.value)){
          spanName.textContent = '✅';
          flagName = true;
         }else if (elName.value === '') {
            spanName.textContent = "❌";
            flagName = false;
         }else{
          spanName.textContent = "❌ Введіть ім'я українською";;
          flagName = false;
         }
      }
      
      //Проверка города 

      if(e.target === elCity){
         const spanCity = document.querySelector('.span-valid-city')
         if (elCity.value !== ''){
          spanCity.textContent = '✅';
          flagCity = true;
         }else{
          spanCity.textContent = '❌';
          flagCity = false;
         }
      }
      
      //Проверка почты 
      if(e.target === elMail){
      const rExpMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      const spanMail = document.querySelector('.span-valid-mail')
      if (rExpMail.test(elMail.value)){
         spanMail.textContent = '✅';
         flagMail = true;
        }else{
         spanMail.textContent = '❌';
         flagMail = false;
        }
      
   }

}