import Store from "./entities/Store";
import Catalog from "./entities/Catalog";
import fetchProducts from "./services/fetchProducts";
import renderProductsList from "./services/renderProductList"
import addListeners from "./helpers/addListeners"
import getCurrentRoute from "./helpers/router"

let store: Store = new Store;

fetchProducts(store);

let catalog: Catalog = store.getCatalog();

renderProductsList(document, catalog);

addListeners(store);

// getCurrentRoute(window.location.pathname);

// Need to move and optimize/generalize this functions
