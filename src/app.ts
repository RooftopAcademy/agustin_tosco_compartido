import Store from "./models/Store.js";
import Catalog from "./models/Catalog.js";
import Product from "./models/Product.js";
import productsList from "./views/productsList.js";
import fetchProductData from "./fetchProductData.js";
import fetchProductComments from "./fetchProductComments.js";
import ValidateForm from "../src/scripts/validateForm.js"
import toggleMenu from "../src/scripts/toggleMenu.js"

let store: Store = new Store;

store.fetchProducts();

let catalog: Catalog = store.getCatalog();

renderProductsList();

addListener();

function renderProductsList() : void {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(catalog.all());
    })
}

function addListener() : void {
    document.querySelectorAll(".js-add-to-cart")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
            let product: Product = store.getCatalog().findById(this.dataset.productId!);
            store.getCart().add(product);
            let cartCounter: HTMLElement = document.getElementById("js-cart")!;
            cartCounter.innerHTML = String(store.getCart().products.length);
        })
    })
    
    document.querySelectorAll(".js-details")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
            let productId = this.dataset.productId;
            window.location.href = `/html/product-details.html?id=${productId}`;
        })
    })
}

if(window.location.pathname == '/html/product-details.html') {    
    let url = new URL(window.location.href);
    let productId = url.searchParams.get("id");
    fetchProductData(productId!);
    fetchProductComments(productId!);
  }

if (document.getElementById("form")) {
    let form: HTMLElement = document.getElementById("form")!;
    form.addEventListener('submit', ValidateForm);    
}

if (document.querySelector(".dropdown-menu")) {
    let dropdown: HTMLElement = document.querySelector(".dropdown-menu")!;
    dropdown.addEventListener('click', toggleMenu);
}
