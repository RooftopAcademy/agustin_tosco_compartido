import Product from "../entities/Product";
import Store from "../entities/Store";

export default async function fetchProducts(store: Store) : Promise<void> {
    
    store.catalog.products = [];
    
    await fetch('http://localhost:3002/products')
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((products: Product[]) => {
            products.forEach((item: Product) => {

                let product: Product = new Product;

                product.id = item.id;
                product.name = item.name;
                product.price = item.price;
                product.description = item.description;
                product.stock = item.stock;
                product.image = item.image;
                product.category = item.category;

                store.catalog.add(product);
                });
    });
}
