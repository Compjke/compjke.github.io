import { PRODUCTS } from "../data/data.js";
import { handleBasket } from "./productsHandlers.js";

export const popup = document.querySelector(".popup");
export const popupClose = document.querySelector(".popup__close");

export function renderPopup(e) {
  if (!e.target.classList.contains("collections__link")) {
    const productCart = e.target.closest(".collections__item");
    const currentProductArticle =
      productCart.querySelector(".collections__link").dataset.article;
    const currentProduct = PRODUCTS.slice().find(
      (prod) => prod.article === currentProductArticle
    );
    console.log(currentProduct);
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    const popupBody = document.querySelector(".popup__body");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("popup__close");
    closeBtn.textContent = "X";
    popupBody.insertAdjacentElement("beforeend", closeBtn);
    const p = `
   <div class="collections__item-wrapper">
   <div class="collections__item-popup">
   <div class="collections__img-popup">
   <img  src="${currentProduct.src}" alt="shorts">
   </div>
   <div class="collection__desqr-popup">
   <div>Product-name: ${currentProduct.name}</div>
   <div>Price: ${currentProduct.price} $</div>
   <div>Size :${currentProduct.size}</div>
   </div>
</div>
<span class="desqr">Some description.....</span>
<div class="collections__btn">
   <img src="../img/collections/button__icon.svg" alt="shop_icon">
   <button type="submit" href="" class="collections__link" data-article=${currentProduct.article}>ADD TO CART</button>
</div>
</div>
    `;
    popupBody.insertAdjacentHTML("afterbegin", p);

    closeBtn.addEventListener("click", (e) => {
      popupBody.innerHTML = "";
      popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popupBody.innerHTML = "";
        popup.style.display = "none";
      }
    });

    const btnToBasket = popup.querySelector(".collections__link");
    btnToBasket.addEventListener("click", handleBasket);
  }
}
