import Product from "./Product";
import { CatalogInterface } from "../interfaces";

export default class Catalog implements CatalogInterface {

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