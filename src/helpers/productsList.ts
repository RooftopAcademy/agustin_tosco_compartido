import Product from "../entities/Product";
import productItem from "../components/productItem";
import Catalog from "../entities/Catalog";

export default function productsList(products: Product[]) : string{

    products.map((product: Product) => console.log(productItem(product)));
    
    return products.map((product: Product) => productItem(product)).join('');
}
