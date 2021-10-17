import Product from "../entities/Product";
import Store from "../entities/Store";
import renderProductsList from "../services/renderProductList";
import fetchProducts from "../services/fetchProducts";
import addListeners from "../helpers/addListeners";

export default async function sortCategories(catLink: Element, store: Store) {

    let category = catLink.id;
    
    await fetchProducts(store);
    
    let products: Product[] = await store.getCatalog().all();
    let result : Product[] = [];

    switch (category) {
        case "all":
            renderProductsList(document, products);
            break;
        case "book":
            filterCategory("Book");
            break;
        case "course":
            filterCategory("Course");
            break;
        case "software":
            filterCategory("Software");
            break;
    }

    async function filterCategory(category: string) {
        
        result = products.filter((product) => product.category == category) as Product[];

        await renderProductsList(document, []);
        await renderProductsList(document, result);
        await (() => {
        
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
        })();
        store.catalog.products = result;
    }

    await (() => {
        
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
    })();
}
