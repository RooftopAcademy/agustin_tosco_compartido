import Product from "../entities/Product";
import productItem from "../components/productItem";

export default function productsList(products: Product[]) : string{
    return products.map((product: Product) => productItem(product)).join('');
}
