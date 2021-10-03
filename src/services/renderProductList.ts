import productsList from "../helpers/productsList";
import Catalog from "../entities/Catalog";
import Product from "../entities/Product";

export default function renderProductsList(document: Document, products: Product[]) : void {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(products);
    });
}
