import {cartArr} from "./script";
const quantity = document.getElementById('quantityOfproducts')
const sum = document.getElementById('sum')
const cartList = document.getElementById('cartList')
const empty = document.getElementById('empty')

let data=JSON.parse(localStorage.getItem('cart'))
console.log(data);

function getInfo(){
   let amount = 0
   quantity.innerHTML=data.length
   data.forEach(el => amount+=parseInt(el.price))
   sum.innerHTML= amount

}
let layoutCart = (el)=>{
let cartItem = document.createElement("div");
cartItem.classList.add("cart__item");

let itemInfo = document.createElement("div");
itemInfo.classList.add("cart__item-info");

let photoWrapper = document.createElement("div");
photoWrapper.classList.add("cart__item-photo-wrapper");

let image = document.createElement("img");
image.classList.add("cart__item-photo");
image.src = el.photo

photoWrapper.appendChild(image);

itemInfo.appendChild(photoWrapper);

let heading = document.createElement("h2");
heading.classList.add("cart__item-describtion");
heading.textContent = el.name;

itemInfo.appendChild(heading);

cartItem.appendChild(itemInfo);

let price = document.createElement("p");
price.classList.add("cart__item-price");
price.textContent = el.price;

cartItem.appendChild(price);

cartList.appendChild(cartItem);

}
if(data.length!==0){
    data.forEach(el=>layoutCart(el))
    empty.style.display='none'
}
getInfo()
showAllinCart(data)