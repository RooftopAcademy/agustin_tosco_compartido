import Product from "../entities/Product";
import Store from "../entities/Store";
import login from "../scripts/logUser";
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
            
            window.location.href = `/product-details.html?id=${productId}`;
        })
    })

    document.querySelectorAll(".login-button")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
        })
    })

    if (window.location.pathname == '/product-details.html') {

        let url = new URL(window.location.href);
        let productId = url.searchParams.get("id");
        
        (async function() {
            await renderProductData(store.getCatalog().all(), productId!);

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
}
