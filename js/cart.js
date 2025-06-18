if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    var removeCartItemBtn = document.getElementsByClassName('remove-btn');
    for (var i = 0; i < removeCartItemBtn.length; i++) {
        var removeBtn = removeCartItemBtn[i];
        removeBtn.addEventListener('click', remmoveCartItems)
    }

    var quantityInput = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged)
    }

    var addToCartBtn = document.getElementsByClassName('btn-secondary')
    for (var i = 0; i < addToCartBtn.length; i++) {
        var cartBtn = addToCartBtn[i];
        cartBtn.addEventListener('click', addToCartClicked)
    }
}

function addToCartClicked(event) {
    var cartBtn = event.target 
    var ProductCard = cartBtn.parentElement.parentElement
    var title = ProductCard.getElementsByClassName('product-title')[0].innerText
    var price = ProductCard.getElementsByClassName('price')[0].innerText
    var imageSrc = ProductCard.querySelector('.card-header a img').src
    console.log(title,price,imageSrc)
    addItemsToCart(title,price,imageSrc)
    updateCartTotal()
}

function addItemsToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var allCartProducts = document.getElementsByClassName('all-cart-products')[0]
    var cartItemNames = allCartProducts.getElementsByClassName('title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to cart') 
            return
        }
    }
    var cartRowContents = `
                <div class="cart-product">
                    <a href="/single product info/shirt.html"><img src="${imageSrc}" alt=""></a>
                    <div class="title">${title}</div>
                </div>
                <div class="cart-price">${price}</div>
                <div class="cart-col-3">
                    <input type="number" class="cart-quantity-input" value="1" min="1">
                    <div class="remove-btn">Remove</div>
                </div>`
    cartRow.innerHTML = cartRowContents
    allCartProducts.append(cartRow)
    cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click', remmoveCartItems)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', updateCartTotal)
}

function remmoveCartItems(event) {
    var buttonCLicked = event.target;
    buttonCLicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN[input.value] || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartProducts = document.getElementsByClassName('all-cart-products')[0];
    var cartRows = cartProducts.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityELement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityELement.value;
        total = total + (price * quantity);
    }
    total = parseFloat((total * 100)/100);
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
    if (total == null) {
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + 0;
    }
}

