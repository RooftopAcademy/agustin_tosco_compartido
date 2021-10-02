import Product from "../entities/Product";
import Store from "../entities/Store";
import { CategoryEnum } from "../entities/Enum";

export default function fetchProducts(store: Store) : void {

    fetch('https://61587a685167ba00174bbb19.mockapi.io/products')
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((productList) => {
            productList.forEach((item: Product) => {
                
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
    })
}