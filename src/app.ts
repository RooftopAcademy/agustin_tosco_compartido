import Store from "./entities/Store";
import Catalog from "./entities/Catalog";
import fetchProducts from "./services/fetchProducts";
import renderProductsList from "./services/renderProductList"
import addListeners from "./helpers/addListeners"
import getCurrentRoute from "./helpers/router"

/**
 *  This line instantiate a new Store
 */

let store: Store = new Store;

/**
 *  This function fetchs products available from 'https://61587a685167ba00174bbb19.mockapi.io/products'
 */

fetchProducts(store);

/**
 * This two lines builds the catalog with the products fetched and render the product list on /product-list.html
 */

let catalog: Catalog = store.getCatalog();

renderProductsList(document, catalog);

/**
 *  This function adds the listeners to respective elements in all pages
 */

addListeners(store);

// getCurrentRoute(window.location.pathname);
