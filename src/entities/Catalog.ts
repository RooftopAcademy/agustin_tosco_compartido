import Product from "./Product";

export default class Catalog {

    products: Product[];

    constructor() {
        this.products = [];
    }

    all() {
        return this.products;
    }

    findById(id: string | number) {
        return this.products.find(p => {
            return p.id == id;
        })!
    }

    add(p: Product) : void  {
        this.products.push(p);
    }
}