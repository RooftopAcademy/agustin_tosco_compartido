import Product from "./Product";
import List from "./List";

export default class Catalog extends List {

    products: Product[];

    constructor() {
        super();
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