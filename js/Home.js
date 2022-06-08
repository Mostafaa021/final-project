// ============================================ Slider From Home Page ========================================
//  Slider for Images 
var counter = 1;
// Get Slider Container 
var container = document.querySelector('.SliderContainer')
    // Put First Image as Default 
container.innerHTML = `<img src="./Images/${counter}.png" width="50%"></img>`;
// Get Buttons 
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev")
    //  Initiate previous Function  
function previousImage() {
    if (counter != 1)
        counter--;
    else {
        counter = 5
    }
    container.innerHTML = `<img src="./Images/${counter}.png" width="600px" height="400px" ></img>`;
}
//  Initiate Next Function  
function nextImage() {
    if (counter != 5)
        counter++
        else
            counter = 1
    container.innerHTML = `<img src="./Images/${counter}.png" width="600px" height="400px" ></img>`;

}

// ============================================= Products ===================================
"use strict";

const productList = document.querySelector(".product-list");

function loadJson() {
    fetch("data/products.json")
        .then((responce) => responce.json())
        .then((data) => {
            const categories = document.querySelector(".filters");
            let item = "";
            data.forEach((element) => {
                if (element.filter_name == "All categories") {
                    element.products.forEach((element) => {
                        item += productView(element);
                    });
                }
                categories.innerHTML += categoryView(element);
            });
            productList.innerHTML = item;
        })
        .catch((error) => {
            console.log(error);
        });
}
loadJson();

function categoryView(category) {
    return `
  <button type="button" class="filter-option  btn-outline-light " onclick="categoryFilter(${category.filter_id})">${category.filter_name}</button>
  `;
}

function productView(product) {
    return `
     <div class="col-3 product-item"   data="${product.id}">
            <div class="product-img-box" > 
            <img src="${product.imgSrc}" alt="product image" class="product-img" width="100%" />
            
            <div class="overlay">
                <a class="overlay-link" href="product.html?id=${product.id}">
                    <img src="images/arrow.png" alt="arrow" class="arrow-img" />
                </a>
            <div class="overlay-info">
                <p>${product.detail}</p>
                <h2>${product.name}</h2>
            </div>
       </div>
       
     </div>
     <hr />
     <div class="product-content">
       <p class="product-price">${product.price}</p>
       <button type="button" class="btn btn-add-cart btn-warning" ><span class="add-btn" >Add Product</span></button>
     </div>
    </div>
 
  `;
}

function categoryFilter(id) {
    fetch("data/products.json")
        .then((responce) => responce.json())
        .then((data) => {
            const buttons = document.querySelectorAll(".filter-option");
            buttons.forEach((button) => {
                button.style.color = "var(--secondary-color)";
            });
            buttons[id - 1].style.color = "var(--red-color)";

            const products = document.querySelector(".product-list");
            products.innerHTML = "";
            for (const category of data) {
                if (category.filter_id == id) {
                    category.products.forEach((element) => {
                        products.innerHTML += productView(element);
                    });
                }
            }
        })
        .catch((error) => {
            alert(error);
        });
}