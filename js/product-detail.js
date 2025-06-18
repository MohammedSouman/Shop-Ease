
document.querySelectorAll('.cart-btn').forEach(item => {
    item.addEventListener('click',() => {
        alert("Item is added to cart")
    })
})


let stock = document.getElementById("stockValue");
// var stockValue = prompt('Enter the number of stock');
let stockValue = 10;

if(stockValue > 4){
    stock.innerHTML = 'In Stock';
    stock.style.fontWeight = 'bold'
}
else if(stockValue < 3 && stockValue > 0){
    stock.innerHTML = 'Only few left';
    stock.style.color = 'orange'
    stock.style.fontWeight = 'bold'
}
else{
    stock.innerHTML = 'Out of stock';
    stock.style.color = 'red'
    stock.style.fontWeight = 'bold'
}

// JS for product gallery

let productImage = document.getElementById('productImage');
let smallImage = document.getElementsByClassName('smallImage');

smallImage[0].onclick = function() {
    productImage.src = smallImage[0].src
}
smallImage[1].onclick = function() {
    productImage.src = smallImage[1].src
}
smallImage[2].onclick = function() {
    productImage.src = smallImage[2].src
}
smallImage[3].onclick = function() {
    productImage.src = smallImage[3].src
}

