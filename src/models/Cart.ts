import Product from "./Product.js"
import { CartInterface } from "../interfaces.js";

export default class Cart implements CartInterface {

    products: Product[];

    constructor() {
        this.products = [];
    }

    add(p: Product) : void | Error {
        if (p instanceof Product) {
            this.products.push(p);
        } else {
            throw Error("Parameter should be Product type");
        }
    }
}