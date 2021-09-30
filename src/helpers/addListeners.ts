import Product from "../entities/Product";
import Store from "../entities/Store";

export default function addListeners(store: Store) : void {
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
}