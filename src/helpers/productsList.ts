import Product from "../entities/Product";
import productItem from "../components/productItem";

export default function productsList(products: Product[]) {
    return products.map((product) => productItem(product)).join('');
}
