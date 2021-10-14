import Store from "./entities/Store";
import Catalog from "./entities/Catalog";
import fetchProducts from "./services/fetchProducts";
import renderProductsList from "./services/renderProductList"
import addListeners from "./helpers/addListeners"
import Product from "./entities/Product";
import useLocalStorage from "./helpers/useLocalStorage";
import { sortOrder } from "./entities/Enum";

/**
 *  This lines instantiate a new Store and saves it in the localStorage
 */

let store: Store = new Store;

useLocalStorage.set("store", store);

(async function () : Promise<void> {

    /**
     *  This async function fetchs products available from 'https://61587a685167ba00174bbb19.mockapi.io/products'
    */

    await fetchProducts(store);



    
    let products: Product[] = store.getCatalog().all();

    /**
     * This two lines build the catalog with the products fetched and render the product list on '/product-list.html'
     */

    await renderProductsList(document, products);

    /**
     *  This function adds the listeners to respective elements in all pages
     */

    await addListeners(store);

    

    // let list = new Catalog;

    // list.result = [...products];

    // list.getSorting({'key': 'price', 'order': sortOrder.Asc})

    // const item = {
    //     "name": "AmiBroker",
    //     "price": 223,
    //     "description": "",
    //     "stock": 5,
    //     "id": 8,
    //     "image": "",
    //     "category": 3
    //   }

    // let product = new Product()

    // product.id = item.id;
    // product.name = item.name;
    // product.price = item.price;
    // product.description = item.description;
    // product.stock = item.stock;
    // product.image = item.image;
    // product.category = item.category;

    //   list.result.push(product);

    //   console.log(list.result);
      
    // let key : keyof Product = "price";
//   console.log(products.lastIndexOf(key));

    // let tempArray : string[] = [];
    // tempArray = products.lastIndexOf('123'); 

    // products.forEach((product) => console.log((product[key])));

    await fetch('http://localhost:3002/products/get-products')
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((res) => {
            console.log(res);
        });

        const port = process.argv[1];

        console.log(port);
        
        

}());
