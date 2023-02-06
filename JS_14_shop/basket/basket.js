const checkedProducts = Object.values(
  JSON.parse(localStorage.getItem("productBasket"))
);

function renderBasket() {
  const productList = document.querySelector(".cheked-products");
  if (checkedProducts.length === 0) {
    productList.innerHTML = `
      <div class="empty">Yout basket empty</div>
      `;
  } else {
    checkedProducts.forEach((product) => {
      const postEl = document.createElement("div");
      postEl.classList.add("cheked-products-item");
      postEl.innerHTML = `
         <div class="cheked-products-item-img">
            <img src="${product.src}" alt="shorts">
         </div>
         <div class="description-product">
            ${product.name}
            <div>As low as <span>${product.price} $</span></div>
            <div>Size : <span>${product.size}</span></div>
         </div>
       </div>
       <button class="delete__btn" data-article=${product.article}>+<button/>
          `;
      productList.appendChild(postEl);
    });
  }
}
renderBasket();

const deleteBtn = document.querySelectorAll(".delete__btn");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const updateChekedProducts = checkedProducts.filter(
      (product) => product.article !== e.target.dataset.article
    );

    localStorage.clear();

    const card = e.target.closest(".cheked-products-item");
    card.remove();

    localStorage.setItem("productBasket", JSON.stringify(updateChekedProducts));
  });
});
