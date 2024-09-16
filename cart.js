let iconCart = document.querySelector('.fa-shopping-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct')

let listProducts = [];

iconCart.addEventListener('click',() => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',() => {
    body.classList.toggle('showCart')
})

// const initApp = () => {
//     // get from json
//     fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         listProducts = data;
//         // console.log(listProducts);
//         addDataToHTML();
//     })
// }

// initApp();