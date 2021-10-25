import Product from "../entities/Product";
import Store from "../entities/Store";
import dynamicSearch from "../scripts/dynamicSearch";
import login from "../scripts/logUser";
import sortCategories from "../scripts/sortCategories";
import sortProducts from "../scripts/sortProducts";
import toggleVisibility from "../scripts/toggleVisibility";
import ValidateForm from "../scripts/validateForm";
import fetchProductComments from "../services/fetchProductComments";
import renderProductData from "../services/renderProductData";

export default function addListeners(store: Store) {

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
            
            window.location.href = `/product-details.html?${productId}`;
        })
    })

    document.querySelectorAll(".login-button")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
        })
    })

    if (window.location.pathname == '/product-details.html') {

        let url = new URL(window.location.href).toString();
        let productId = url.substring(url.length - 1);
        
        (async function() {
        
            let product = 
                await fetch(`http://localhost:3002/products/${productId}`)
                    .then(res => res.json());

            await renderProductData(product);

            await fetchProductComments(productId!);
        }());
    }

    if (document.getElementById("form")) {
        let form: HTMLElement = document.getElementById("form")!;
        form.addEventListener('submit', ValidateForm);
    }

    if (document.querySelector(".dropdown-menu")) {
        let dropdown: HTMLElement = document.querySelector("#hamburguer-icon")!;
        dropdown.addEventListener('click', toggleVisibility);
    }

    if (document.querySelector(".login-modal")) {
        let loginButton: HTMLElement = document.querySelector("#login-button")!;
        loginButton.addEventListener('click', toggleVisibility);
    }

    if (document.querySelector("#login")) {
        let loginForm = document.getElementById("login")!;
        loginForm.addEventListener('submit', login);
    }

    if(document.querySelector("#filter")) {
        let filter : HTMLElement = document.getElementById('filter')!;
        filter.addEventListener('input', () => sortProducts(filter, store));
    }

    if(document.querySelectorAll(".cat-link")) {
        document.querySelectorAll(".cat-link")!
        .forEach(btn => {
            btn.addEventListener('click', (e: Event) => {
                e.preventDefault();
                sortCategories(btn, store);
            })
        })
    }

    if(document.querySelector("#search-input-bar")) {
        let searchBar : HTMLInputElement = document.querySelector("#search-input-bar")!
        addEventListener('keyup', () => dynamicSearch(searchBar.value, store));
    }
}
