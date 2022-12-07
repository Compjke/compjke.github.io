const ElInput = document.createElement("input");
ElInput.style.width = "40%";
ElInput.style.height = 30 + 'px';
ElInput.placeholder = "Price";
ElInput.style.outline = 'none';
ElInput.style.display = 'block';
ElInput.style.marginTop = 20 + 'px';
ElInput.style.color = 'green'
ElInput.type = 'number'

document.body.insertAdjacentElement("afterbegin", ElInput);

const span = document.createElement('span');
span.style.marginRight = 20 + 'px';

const crossBtn = document.createElement('input')
crossBtn.style.border = 'none';
crossBtn.style.background = 'transparent';
crossBtn.type = 'button';
crossBtn.value = '❌';
crossBtn.style.cursor = 'pointer';


const p = document.createElement('p')
p.textContent = 'Please enter correct price'

ElInput.addEventListener('focus', (e)=>{
   ElInput.style.border = '2px solid green'
})

ElInput.addEventListener('focusout', (e)=>{
   if(ElInput.value === ''){
      e.preventDefault()
   }else if (ElInput.value < 0) {
      ElInput.style.border = '2px solid red'
      ElInput.insertAdjacentElement('afterend',p)
      span.remove()
      crossBtn.remove()
   }
   else{
   ElInput.style.border = '';
   span.innerText = ElInput.value;
   ElInput.insertAdjacentElement('beforebegin',span)
   span.insertAdjacentElement('afterend',crossBtn)
   p.remove()
   }
   
})


crossBtn.addEventListener('click', ()=>{
   span.remove()
   crossBtn.remove()
})