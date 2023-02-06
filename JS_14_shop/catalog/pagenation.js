import { PRODUCTS } from "../data/data.js";

export function buildHtmlPagination(sortedProducts = PRODUCTS) {
  const [...productData] = sortedProducts;
  console.log(productData);

  let currentPage = 1;
  let amountPost = 10;

  function displayList(arrOfPosts, amountPost, numberPage) {
    const productList = document.querySelector(".catalog__items");
    productList.innerHTML = "";
    numberPage--;
    const start = amountPost * numberPage;
    const end = start + amountPost;
    const pagenatedProducts = arrOfPosts.slice(start, end);

    pagenatedProducts.forEach((product) => {
      const postEl = document.createElement("div");
      postEl.classList.add("post");
      postEl.innerHTML = `<div class="collections__item">
       <div class="collections__img">
          <img src="${product.src}" alt="shorts">
       </div>
       <div class="collections__item-title">
          ${product.name}
       </div>
       <div class="collections__price">As low as <span>${product.price} $</span></div>
       <div class="collections__price">Size : <span>${product.size}</span></div>
       <div class="collections__btn">
          <img src="../img/collections/button__icon.svg" alt="shop_icon">
          <button type="submit" href="" class="collections__link" data-article=${product.article}>ADD TO CART</button>
       </div>
    </div>
        `;
      productList.appendChild(postEl);
    });
  }

  function displayPagination() {
    const paginationEl = document.querySelector(".pagination");
    paginationEl.innerHTML = "";
    const pagesCount = productData.length / 10;
    const ulEL = document.createElement("ul");
    ulEL.classList.add("pagination__list");
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationButton(i + 1);
      ulEL.appendChild(liEl);
    }
    paginationEl.appendChild(ulEL);
  }

  function displayPaginationButton(page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination__item");
    liEl.textContent = page;

    if (currentPage == page) liEl.classList.add("pagination__item--active");

    liEl.addEventListener("click", (e) => {
      let currentPage = page;
      displayList(productData, amountPost, currentPage);

      let currnetItemLi = document.querySelector("li.pagination__item--active");
      currnetItemLi.classList.remove("pagination__item--active");
      liEl.classList.add("pagination__item--active");
    });
    return liEl;
  }

  displayList(productData, amountPost, currentPage);
  displayPagination(productData, amountPost);
}
