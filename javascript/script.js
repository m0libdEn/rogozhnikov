const URL='https://6615ddf3b8b8e32ffc7bdc0a.mockapi.io/product'
const list =document.getElementById('list')
const counter = document.getElementById('counter')

//
//const sum = document.getElementById('sum')

let cartArr = [] // array of items which will be on cart

export function countCart(){
    counter.innerHTML = cartArr.length
}

function getProducts(){ //getting all prodtucts from API
    return new Promise((resolve, reject)=>{
        fetch(URL)
        .then(response => {
            if(response.ok){
                resolve(response.json())
            }else reject(new Error('problem with api'))
        })
    })
}

function setData(key ,el){ //add data (that will be 4 cart & product list)
    localStorage.setItem(key,JSON.stringify(el))
}
export function getData(key){ //get data (that will be also 4 cart & product list)
    return JSON.parse(localStorage.getItem(key))
}

function loadData(){
    let storedCart = getData('cart')
    if(storedCart){
        storedCart.forEach(el => layoutCart(el))
    }
}
function layoutProduct(el) {
    const listProduct = document.createElement('div');
    listProduct.classList.add('list-product');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product__image-container');

    const image = document.createElement('img');
    image.classList.add('product__image');
    image.src = el.photo;
    image.alt = 'product';

    const overlayButton = document.createElement('button');
    overlayButton.classList.add('product__overlay-btn', 'btn');
    overlayButton.textContent = 'Быстрый просмотр';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('product__info');

    const priceParagraph = document.createElement('p');
    priceParagraph.classList.add('product__price');
    priceParagraph.textContent = el.price;

    const name = document.createElement('h3');
    name.classList.add('product__name');
    name.textContent = el.name;

    const addButton = document.createElement('button');
    addButton.classList.add('product__btn', 'btn');
    addButton.textContent = 'Добавить в Корзину';
    addButton.addEventListener('click', function() {
        layoutCart(el);
    });

    listProduct.appendChild(imageContainer);
    imageContainer.appendChild(image);
    imageContainer.appendChild(overlayButton);
    listProduct.appendChild(infoContainer);
    infoContainer.appendChild(priceParagraph);
    infoContainer.appendChild(name);
    listProduct.appendChild(addButton);

    list.appendChild(listProduct);

   const popupDiv = document.createElement('div');
    popupDiv.classList.add('popup');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('popup__container');

    const imageWrapperDiv = document.createElement('div');
    imageWrapperDiv.classList.add('popup__image-wrapper');

    const imagePopup = document.createElement('img');
    imagePopup.classList.add('popup__image');
    imagePopup.src = el.photo;
    imagePopup.alt = 'product';

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('popup__info');

    const closeLink = document.createElement('a');
    closeLink.classList.add('popup__close');
    closeLink.textContent = 'X';
    
    const nameHeading = document.createElement('h3');
    nameHeading.classList.add('popup__name');
    nameHeading.textContent = el.name;

    const popupPrice = document.createElement('p');
    popupPrice.classList.add('popup__pice');
    popupPrice.textContent = el.price;

    const popupButton = document.createElement('button');
    popupButton.classList.add('popup__btn', 'btn');
    popupButton.textContent = 'Добавить в корзину';
    popupButton.addEventListener('click', function(){
        layoutCart(el);
    })

    popupDiv.appendChild(containerDiv);
    containerDiv.appendChild(imageWrapperDiv);
    containerDiv.appendChild(infoDiv);
    imageWrapperDiv.appendChild(imagePopup);
    infoDiv.appendChild(closeLink);
    infoDiv.appendChild(nameHeading);
    infoDiv.appendChild(popupPrice);
    infoDiv.appendChild(popupButton);


    overlayButton.addEventListener('click',function(){
        popupDiv.style.display = "flex";
        popupDiv.style.top = "50%";
        popupDiv.style.left = "50%";
        popupDiv.style.transform = "translate(-50%, -50%)";
    })
    closeLink.addEventListener('click', function(){
        popupDiv.style.display="none"
    }) 


    const mainElement = document.querySelector('main')
    mainElement.appendChild(popupDiv); 
}


function layoutCart(el){
    cartArr.push(el)
    countCart()
    setData('cart',cartArr)

}

getProducts()
.then(products => products.forEach(el=>layoutProduct(el)))
window.addEventListener('load',function(){
    loadData()
})
countCart()
