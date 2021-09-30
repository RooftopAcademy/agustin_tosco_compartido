import Store from "./entities/Store.js";
import Catalog from "./entities/Catalog.js";
import Product from "./entities/Product.js";
import fetchProductData from "./services/fetchProductData.js";
import fetchProductComments from "./services/fetchProductComments.js";
import ValidateForm from "../src/scripts/validateForm.js";
import toggleMenu from "../src/scripts/toggleMenu.js";
import fetchProducts from "./services/fetchProducts.js";
import renderProductsList from "./services/renderProductList.js"
import addListeners from "./helpers/addListeners.js"

let store: Store = new Store;

fetchProducts(store);

let catalog: Catalog = store.getCatalog();

renderProductsList(document, catalog);

addListeners(store);

// Need to move and optimize/generalize this functions

if (window.location.pathname == '/product-details.html') {
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
