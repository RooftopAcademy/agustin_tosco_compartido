import Product from "../entities/Product";
import Store from "../entities/Store";
import addListeners from "../helpers/addListeners";
import renderProductsList from "../services/renderProductList";

export default async function dynamicSearch(input: string, store: Store) {
    console.log(`Searching ${input}...`);

    let products = store.getCatalog().all();
    let filteredProducts = [];

    filteredProducts = products.filter(product => {
        return product.name
            .toLowerCase()
            .includes(input.toLowerCase());
    })

    renderProductsList(document, []);
    renderProductsList(document, filteredProducts);
    
    addListeners(store);

    // await (() => {
        
    //     document.querySelectorAll(".js-add-to-cart")
    //     .forEach(btn => {
    //         btn.addEventListener('click', function (this: HTMLInputElement) : void {
                
    //             let product: Product = store.getCatalog().findById(this.dataset.productId!);
    //             store.getCart().add(product);
                
    //             let cartCounter: HTMLElement = document.getElementById("js-cart")!;
    //             cartCounter.innerHTML = String(store.getCart().products.length);
    //         })
    //     })
    
    //     document.querySelectorAll(".js-details")
    //     .forEach(btn => {
    //         btn.addEventListener('click', function (this: HTMLInputElement) : void {
                
    //             let productId = this.dataset.productId;
                
    //             window.location.href = `/product-details.html?${productId}`;
    //         })
    //     })
    // })();
}
