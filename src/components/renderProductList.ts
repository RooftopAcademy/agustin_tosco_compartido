import Catalog from "../models/Catalog.js";
import productsList from "../helpers/productsList.js";

export default function renderProductsList(document: Document, catalog: Catalog) : void {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(catalog.all());
    })
}