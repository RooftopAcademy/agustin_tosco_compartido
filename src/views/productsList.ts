import Product from "../models/Product";
import productItem from "./productItem";

export default function productsList(products: Product[]) {
    return products.map((product) => productItem(product)).join('')
}
