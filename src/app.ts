import Store from "./entities/Store";
import Catalog from "./entities/Catalog";
import fetchProducts from "./services/fetchProducts";
import renderProductsList from "./services/renderProductList"
import addListeners from "./helpers/addListeners"
import getCurrentRoute from "./helpers/router"
import Product from "./entities/Product";

/**
 *  This line instantiate a new Store
 */

let store: Store = new Store;

/**
 *  This async function fetchs products available from 'https://61587a685167ba00174bbb19.mockapi.io/products'
 *  and builds the catalog with the products fetched and render the product list on /product-list.html
 */

(async function () {
    await fetchProducts(store);
    
    let catalog: Product[] = store.catalog.products;

    await renderProductsList(document, catalog);

    await addListeners(store);
}());

/**
 *  This function adds the listeners to respective elements in all pages
 */



// getCurrentRoute(window.location.pathname);
