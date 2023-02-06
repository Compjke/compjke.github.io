import { PRODUCTS } from "../data/data.js"
import { buildHtmlPagination } from "./pagenation.js";


export const handlerSizes = (e) => {
  const sortedProducts =  PRODUCTS.filter(product => product.size === +e.target.textContent)
  buildHtmlPagination(sortedProducts)
}

export const handlerColoros = (e) => {
  const sortedProducts =  PRODUCTS.filter(product => product.color === e.target.dataset.color)
  buildHtmlPagination(sortedProducts)
}

export const handlerPrices = (e) => {
  const sortedProducts =  PRODUCTS.filter(product => {
     if(e.target.value === 'less-15' && e.target.checked === true) {
       return product.price < 15 
     }
     if(e.target.value === 'less-30' && e.target.checked === true) {
       return product.price > 15 && product.price < 30
     }
     if(e.target.value === 'more-50' && e.target.checked === true) {
       return product.price > 50
     }
  }
   )
      e.target.checked = false
   buildHtmlPagination(sortedProducts)
}


const productsBasket = {};

export const handleBasket = (e) => {
if(e.target.classList.contains('collections__link')){
      let currentProd = e.target.dataset.article
      if(productsBasket[currentProd] !== undefined){
         productsBasket[currentProd]['count']++
      }else{
         productsBasket[currentProd] = PRODUCTS.find(({article}) => article === currentProd)
         productsBasket[currentProd]['count'] = 1;
      }
      localStorage.setItem('productBasket',JSON.stringify(productsBasket))
}
}






