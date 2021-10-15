import Product from "../entities/Product";
import Store from "../entities/Store";
import renderProductsList from "../services/renderProductList";
import fetchProducts from "../services/fetchProducts";

export default async function sortCategories(catLink: Element, store: Store) {

    let category = catLink.id;
    
    await fetchProducts(store);
    
    let products: Product[] = await store.getCatalog().all();

    switch (category) {
        case "all":
            renderProductsList(document, products);
        break;
        case "book":
            filterCategory('Book');
        break;
        case "course":
            filterCategory('Course');
        break;
        case "software":
            filterCategory('Software');
        break;
    }

    async function filterCategory(category: string) {
        let result = products.filter(product => product.category == category);
        
        await renderProductsList(document, result);

        store.catalog.products = result;
    }
}
