import Store from "../entities/Store";
import renderProductsList from "../services/renderProductList";

export default function dynamicSearch(input: string, store: Store) {
    console.log(`Searching ${input}...`);

    let products = store.getCatalog().all();
    let filteredProducts = [];

    filteredProducts = products.filter(product => {
        return product.name
            .toLowerCase()
            .includes(input.toLowerCase());
    })

    // let p : HTMLElement = document.createElement('p');

    // p.style.cssText = 'position:absolute;top:300px;left:300px;width:200px;height:200px;display:block;'
    // p.textContent = 'paragraph';
 
    // document.getElementById("search-input-bar")?.appendChild(p);
 
    //https://www.youtube.com/watch?v=M3PbUwgEecU

    renderProductsList(document, []);
    renderProductsList(document, filteredProducts);

}