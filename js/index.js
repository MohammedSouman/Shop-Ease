let webPageName = document.getElementsByClassName('website-name')

for (let i = 0; i < webPageName.length; i++) {
    let websiteName = webPageName[i]
    websiteName.innerText = 'SHOP EASE'
}

// JS for toggle menu

var navLinks = document.getElementById("navLinks")

function showmenu(){
    navLinks.style.right = "0"
    // navLinks.style.transform = "translateY(0)"
}

function hidemenu(){
    navLinks.style.right = "-700px"
    // navLinks.style.transform = "translateY(-700px)"
}


//JS For SLider

let indexValue = 1;
showImg(indexValue);

function btmSlide(e){
    showImg(indexValue = e);
}

function sideSlide(e){
    showImg(indexValue += e);
}

function showImg(e){
    let i;
    const img = document.querySelectorAll('.slider-images img');
    const sliders = document.querySelectorAll('.btm-slider span');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < img.length; i++){
        img[i].style.display = 'none'
    }
    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = 'transparent'
    }

    img[indexValue  - 1].style.display = 'block';
    sliders[indexValue  - 1].style.background ='#fff'
}

// ----JS for Single Product----

let productCard = document.getElementsByClassName("product-card")
let productImages = document.querySelectorAll(".card-header img")
let productTitle = document.getElementsByClassName("product-title")
let productStatus = document.getElementsByClassName("product-status")
let disPrice = document.getElementsByClassName("dis-price")
let realPrice = document.getElementsByClassName("real-price")

for(let i = 0; i < productCard.length; i++) {
    // let discountPrice = parseFloat(disPrice[i].textContent.replace("$",""))
    // let originalPrice = parseFloat(realPrice[i].textContent.replace("$",""))
    let singleProduct =""
    productCard[i].addEventListener("click", function() {
        singleProduct += `
        <div class="single-product">
            <div class="col-2">
                <div class="main-img shirt-img" id = "shirtImg">
                <img src = "${productImages[i].src}" width = "100%">                  
                </div>
                <div class="sub-images">
                    <img src = "${productImages[i].src}" class ="smallImage">                  
                    <img src = "${productImages[i].src}" class ="smallImage">                  
                    <img src = "${productImages[i].src}" class ="smallImage">                  
                    <img src = "${productImages[i].src}" class ="smallImage">                  
                </div>
            </div>
            <div class="col-2">
                <h1>${productTitle[i].textContent}</h1>
                <p>100% Cotton</p>
                <br>
                <select name="" id="">
                    <option>Black</option>
                </select>
                <select name="" id="size">
                    <option>Select your size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            <div class="stock-availability">
                <h4 class="stock">Availability in stock :</h4>
                <span id="stockValue"></span><br>
            </div>
            <label for="quantity"><b>Quantity : </b></label>
            <input type="number" id="quantity" value="1" min="1">
            <div class="product-details">
                <h4>Product Details &nbsp;&nbsp;<i class="fas fa-indent"></i></h4>
                <br><br>
                <p class="product-points"><i class="fas fa-circle"></i>Brand : ${productStatus[i].textContent}</p>
                <br>
                <p class="product-points"><i class="fas fa-circle"></i>100% Cotton pure black</p>
                <br>
                <p class="product-points"><i class="fas fa-circle"></i> Ship in 2-3 days</p>
                <br>
                    <details>
                        <summary>More</summary>
                            <br>
                            <p class="product-points"><i class="fas fa-circle"></i>Lorem ipsum dolor sit amet consectetur.</p>
                            <br>
                            <p class="product-points"><i class="fas fa-circle"></i>Lorem ipsum dolor sit amet consectetur.</p>
                            <br>
                            <p class="product-points"><i class="fas fa-circle"></i>Lorem ipsum dolor sit amet consectetur.</p>
                            <br>
                    </details>
            </div>
            <h4 class="price dis-price">${disPrice[i].textContent}</h4>
            <h4 class="real-price">${realPrice[i].textContent}</h4>
            <div class="ratings">
                <h4>Ratings : </h4>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star-half-alt"></i></span>
            </div>
            <div class="buy-product">Buy</div>
                <div class="cart-btn">Add to Cart <i class="fas fa-shopping-cart"></i></div>
            </div>
        </div> 
        `
    document.querySelector("main").innerHTML = singleProduct
    })
}

// _______________CART PAGE_______________

let cartPage = document.querySelector(".cart-page")
cartPage.addEventListener('click', function (){
    document.getElementById("main").style.display = "none"
})

function scrollToTop() {
    window.scrollTo({top: 0})
}
