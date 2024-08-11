import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let prodArr = [];
products.forEach((product)=>{
    prodArr +=`
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
     ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">   
      <div class="product-rating-count link-primary">
        <sup style="height: 45px;
                  width: 30px;
                  font-size: 20px;"> &#x20B9;</sup> ${product.count}
      </div>
    </div>

    <div class="product-price">
      <sup style="height: 45px;
                  width: 30px;
                  font-size: 20px;"> &#x20B9;</sup> ${product.priceCents}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-btnAdd-to-cart" data-product-id=${product.id} data-product-name=${product.name} >
      Add to Cart
    </button>
  </div>`
});

document.querySelector('.js-product').innerHTML= prodArr;
document.querySelectorAll('.js-btnAdd-to-cart').forEach((buttonAddToCart)=>
{
  buttonAddToCart.addEventListener('click',()=>{
      const productNm = buttonAddToCart.dataset.productName;
      const productId = buttonAddToCart.dataset.productId

      let matchingItem;
      cart.forEach((item) =>{
        if(productId === item.productId){
          matchingItem = item;
        }
      
      });

      if(matchingItem){
        item.quantity +=1;
      }
      else{
        cart.push({
          productName : productNm,
          quantity :1
        });
      }

      let cartQuant = 0;
      cart.forEach((item)=>
      {
        cartQuant += item.quantity;
      })
     
      document.querySelector('.js-cartNum').innerHTML = cartQuant;
      
      
    })
    
})
