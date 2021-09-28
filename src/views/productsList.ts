import Product from "../models/Product.js";
import productItem from "./productItem.js";

export default function productsList(products: Product[]) {
    return products.map((product) => productItem(product)).join('')
}
