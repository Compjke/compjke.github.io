import * as buildPageCatalog from "./pagenation.js";
import {
  handlerSizes,
  handlerColoros,
  handlerPrices,
  handleBasket,
} from "./productsHandlers.js";
import { renderPopup } from "./popap.js";
import { onSearch } from "./search.js";

window.addEventListener("DOMContentLoaded", () => {
  buildPageCatalog.buildHtmlPagination();

  document
    .querySelector(".sizes__list")
    .addEventListener("click", handlerSizes);

  document
    .querySelector(".colors > .sizes__list")
    .addEventListener("click", handlerColoros);

  document
    .querySelector(".prices__list")
    .addEventListener("click", handlerPrices);

  document
    .querySelector(".catalog__items")
    .addEventListener("click", handleBasket);

  const openModalEl = document.querySelectorAll(".catalog__items");

  openModalEl.forEach((cart) => {
    cart.addEventListener("click", renderPopup);
  });

  document.querySelector(".search__input").addEventListener("input", onSearch);
});
