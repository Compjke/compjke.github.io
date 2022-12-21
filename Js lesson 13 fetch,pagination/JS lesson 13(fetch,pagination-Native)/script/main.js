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

function  getData  () {
  const response = fetch("https://jsonplaceholder.typicode.com/comments");
   return response.then((data) => data.json())
}


function buildHtmlPagination() {

   getData().then((postsData) => {
   let currentPage = 1;
   let amountPost = 10;
   postsData = postsData.slice(0,100)
   //  console.log(postsData)

   function displayList(arrOfPosts, amountPost, numberPage) {
     const postsOnPage = document.querySelector(".posts");
     postsOnPage.innerHTML= '';
     numberPage--;
     const start = amountPost * numberPage;
     const end = start + amountPost;
     const paginatedArray = arrOfPosts.slice(start, end);

     
     paginatedArray.forEach((el) => {
       const postEl = document.createElement("div");
       postEl.classList.add("post");
       postEl.innerHTML = 
       `<span class='color-id'>Id</span> :${el.id}
       <span class='color-name'>Name</span>:${el.name} 
       <span class='color-body'>Body</span>:${el.body}
       <span class='color-email'>email</span> : ${el.email}
        `;
       postsOnPage.appendChild(postEl);
     });
   }

   function displayPagination(arrOfPosts,amountPost) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = 10
      const ulEL = document.createElement('ul')
      ulEL.classList.add('pagination__list')

      for(let i=0 ; i<pagesCount ; i++){
         const liEl = displayPaginationButton(i+1)
         ulEL.appendChild(liEl)
      }
      paginationEl.appendChild(ulEL)
   }

   function displayPaginationButton(page) {
      const liEl = document.createElement('li')
      liEl.classList.add('pagination__item')
      liEl.textContent = page

      if(currentPage == page) liEl.classList.add('pagination__item--active')
      

      liEl.addEventListener('click', (e)=>{
         let currentPage = page
         displayList(postsData,amountPost, currentPage)

         let currnetItemLi = document.querySelector('li.pagination__item--active')
         currnetItemLi.classList.remove('pagination__item--active');
         liEl.classList.add('pagination__item--active')
      })
      return liEl
   }
   displayList(postsData, amountPost, currentPage);
   displayPagination(postsData,amountPost)
  })

}


buildHtmlPagination();