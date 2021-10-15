import productDetails from "../components/productDetails";
import Catalog from "../entities/Catalog";
import { sortOrder } from "../entities/Enum";
import { OrderObject } from "../entities/interfaces";
import Product from "../entities/Product";
import Store from "../entities/Store";
import renderProductsList from "../services/renderProductList";

export default async function sortProducts(filter: HTMLElement, store: Store) {
    let select = filter as HTMLSelectElement;
    let value = select.options[select.selectedIndex].value;

    let list = new Catalog;

    let products: Product[] = store.getCatalog().all();

    list.result = [...products];
    
    switch (value) {
        case "az-asc":
            list.getSorting({'key': 'name', 'order': sortOrder.Asc});
            break
        case "az-desc":
            list.getSorting({'key': 'name', 'order': sortOrder.Desc});
            break
        case "price-asc":
            list.getSorting({'key': 'price', 'order': sortOrder.Asc});
            break
        case "price-desc":
            list.getSorting({'key': 'price', 'order': sortOrder.Desc});
            break
    }

    await renderProductsList(document, list.result);

}