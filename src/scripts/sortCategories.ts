import Product from "../entities/Product";
import Store from "../entities/Store";
import renderProductsList from "../services/renderProductList";
import fetchProducts from "../services/fetchProducts";
import addListeners from "../helpers/addListeners";

export default async function sortCategories(catLink: Element, store: Store) {

    let category = catLink.id;
    
    await fetchProducts(store);
    
    let products: Product[] = await store.getCatalog().all();
    let result : Product[] = [];

    switch (category) {
        case "all":
            renderProductsList(document, products);
            break;
        case "book":
            filterCategory("Book");
            break;
        case "course":
            filterCategory("Course");
            break;
        case "software":
            filterCategory("Software");
            break;
    }

    async function filterCategory(category: string) {
        
        result = products.filter((product) => product.category == category) as Product[];

        await renderProductsList(document, []);
        await renderProductsList(document, result);
        
        store.catalog.products = result;
        addListeners(store);
    }

    addListeners(store);

}
