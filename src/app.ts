import Store from "./entities/Store";
import Catalog from "./entities/Catalog";
import fetchProductData from "./services/fetchProductData";
import fetchProductComments from "./services/fetchProductComments";
import ValidateForm from "../src/scripts/validateForm";
import toggleMenu from "../src/scripts/toggleMenu";
import fetchProducts from "./services/fetchProducts";
import renderProductsList from "./services/renderProductList"
import addListeners from "./helpers/addListeners"
import getCurrentRoute from "./helpers/router"

let store: Store = new Store;

fetchProducts(store);

let catalog: Catalog = store.getCatalog();

renderProductsList(document, catalog);

addListeners(store);

// getCurrentRoute(window.location.pathname);

// Need to move and optimize/generalize this functions

console.log("asd");


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
