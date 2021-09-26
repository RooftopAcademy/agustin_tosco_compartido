import Product from "./Product.js"

export default class Cart {

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