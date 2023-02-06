export const onSearch = (e) => {
  let value = e.target.value.trim();

  const [...productList] = document.querySelectorAll(".collections__item");

  if (value) {
    productList.forEach((prod) => {
      if (prod.textContent.search(value) == -1) {
        prod.classList.add("hide");
      }
    });
  } else {
    productList.forEach((prod) => {
      prod.classList.remove("hide");
    });
  }
  console.log(productList);
};
