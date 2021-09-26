import { ProductInterface } from "../interfaces";

export default class Product implements ProductInterface {
    
    name: string;
    price: string;
    description: string;
    stock: number;
    id: number;
    image: string;
    category: string;

    constructor() {
        this.name = "";
        this.price = "";
        this.description = "";
        this.stock = 0;
        this.id = 0;
        this.image = "";
        this.category = "";
    }

    setName(n: string) {
        this.name = n;
    }

    getName() {
        return this.name;
    }

    setPrice(n: string) {
        this.price = n;
    }

    getPrice() {
        return this.price;
    }

    setDescription(n: string) {
        this.description = n;
    }

    getDescription() {
        return this.description;
    }

    setId(n: number) {
        this.id = n;
    }

    getId() {
        return this.id;
    }
}
