/*Створіть сайт з коментарями. Коментарі тут : https://jsonplaceholder.typicode.com/

Сайт має виглядати так : https://kondrashov.online/images/screens/120.png

На сторінку виводити по 10 коментарів, у низу сторінки зробити поле пагінації (перемикання сторінок) при перемиканні
сторінок показувати нові коментарі. 
з коментарів виводити : 
"id": 1,
"name"
"email"
"body":

*/

const tableBody = document.querySelector("#table-body");
const listPagination = document.querySelector('#pagination')

async function getArrOfComments() {
  let url = "https://jsonplaceholder.typicode.com/comments";
  const response = await fetch(url);
  const arr = await response.json();
  const allComments = await arr.slice(0, 100);
  return allComments;
}

async function main() {

   const comments = await getArrOfComments();

console.log(comments)



  let notesOnPage = 10;
   
  const countOfItems = Math.ceil(comments.length / notesOnPage)
  
  let itemsPagination = [];

   for(let i=1 ; i<= countOfItems; i++){
    
   const li = document.createElement('li')
   li.textContent = i;
   listPagination.insertAdjacentElement('beforeend',li)
   itemsPagination.push(li)
  }

  
  
  showContent(itemsPagination[0])
  
  itemsPagination.forEach((item) => {
    item.addEventListener("click",function(){
      showContent(this)
    } );
  });


  function showContent(liActive){
   let activePage = document.querySelector('#pagination li.active')
   if(activePage){
      activePage.classList.remove('active')
   }
   activePage = liActive;
   liActive.classList.add('active')
 
   let pageNum = +liActive.textContent;
   console.log(pageNum)

   /*
   1 - 0 - 11
   2 - 10 - 21
   3 - 20 - 31
   */

   const start =  (pageNum - 1) * notesOnPage;
   const end = start + notesOnPage;
   const notes = comments.slice(start,end);

   console.log(notes)

   tableBody.innerHTML= '';

   notes.forEach(note => {
      const tr = document.createElement('tr')
      tableBody.insertAdjacentElement('beforeend',tr)

      createCell(note.id,tr)
      createCell(note.name,tr)
      createCell(note.body,tr)
      createCell(note.email,tr)
     
   })
 }

}



function createCell (content,tr){
   const td = document.createElement('td')
   tr.appendChild(td)
   td.textContent = `${content}`
}

main()
