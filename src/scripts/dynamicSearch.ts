import Store from "../entities/Store";
import addListeners from "../helpers/addListeners";
import renderProductsList from "../services/renderProductList";

export default async function dynamicSearch(input: string, store: Store) {
    console.log(`Searching ${input}...`);

    let products = store.getCatalog().all();
    let filteredProducts = [];

    filteredProducts = products.filter(product => {
        return product.name
            .toLowerCase()
            .includes(input.toLowerCase());
    })

    renderProductsList(document, []);
    renderProductsList(document, filteredProducts);
    
    addListeners(store);

}
