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

const postDiv = document.querySelector("#post");
const content = document.querySelector(".container");
const spinner = document.querySelector('.lds-roller')
const [...arrOfPages] = document.querySelectorAll(".page-link");

function getComments() {
  const response = fetch("https://jsonplaceholder.typicode.com/comments");
  response
    .then((data) => data.json())
    .then((arrComment) => {
     setTimeout(() => {
      content.style.display = "flex";
      spinner.style.display = 'none'
      showPosts(arrComment.splice(0, 100));
     }, 2000) 
    })
    .catch(err => {
      spinner.style.display = 'none'
      const errDiv = document.createElement('div')
      errDiv.style.background= 'red'
      errDiv.style.width = 500+'px'
      errDiv.style.padding = 50 + 'px'      
      errDiv.style.textAlign = 'center'
      errDiv.style.margin = 40 + "vh" + " " + 'auto'
      errDiv.textContent = err;
      document.body.appendChild(errDiv)
    })
}

function showPosts(comments) {
  console.log(comments);

  comments.forEach((coment, index) => {
    if (index < 10) {
      buildHtml(coment)
    }
  });

  arrOfPages.forEach((page) => {
    page.addEventListener("click", (e) => {
      postDiv.innerHTML = "";
      if (e.target.textContent === "1") {
        comments.forEach((coment, index) => {
          if (index < 10) {
           buildHtml(coment)
          }
        });
      }

      if (e.target.textContent === '2') {
        comments.forEach((coment, index) => {
          if (index >= 10 && index < 20 ) {
           buildHtml(coment)
          }
        });
      }

      if (e.target.textContent === '3') {
        comments.forEach((coment, index) => {
          if (index >= 20 && index < 30 ) {
           buildHtml(coment)
          }
        });
      }

      if (e.target.textContent === '4') {
         comments.forEach((coment, index) => {
           if (index >= 30 && index < 40 ) {
            buildHtml(coment)
           }
         });
       }
    
       if (e.target.textContent === '5') {
         comments.forEach((coment, index) => {
           if (index >= 40 && index < 50 ) {
            buildHtml(coment)
           }
         });
       }
       if (e.target.textContent === '6') {
         comments.forEach((coment, index) => {
           if (index >= 50 && index < 60 ) {
            buildHtml(coment)
           }
         });
       }
       if (e.target.textContent === '7') {
         comments.forEach((coment, index) => {
           if (index >= 60 && index < 70 ) {
            buildHtml(coment)
           }
         });
       }
       if (e.target.textContent === '8') {
         comments.forEach((coment, index) => {
           if (index >= 70 && index < 80 ) {
            buildHtml(coment)
           }
         });
       }
       if (e.target.textContent === '9') {
         comments.forEach((coment, index) => {
           if (index >= 80 && index < 90 ) {
            buildHtml(coment)
           }
         });
       }
       if (e.target.textContent === '10') {
         comments.forEach((coment, index) => {
           if (index >= 90 && index < 100 ) {
            buildHtml(coment)
           }
         });
       }
      
    });
  });
}

function buildHtml (coment){
   postDiv.innerHTML += `
   <div class="post">
   <span><strong>Id:</strong> ${coment.id}</span>
   <span><strong>Name:</strong> ${coment.name}</span>
   <span><strong>Body:</strong> ${coment.body}</span>
   <span><strong>Mail:</strong> ${coment.email}</span>
   </div>
   `;
}

getComments();
