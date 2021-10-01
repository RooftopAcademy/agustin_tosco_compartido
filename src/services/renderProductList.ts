import Catalog from "../entities/Catalog";
import productsList from "../helpers/productsList";

export default function renderProductsList(document: Document, catalog: Catalog) : void {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(catalog.all());
    })
}
