import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import Product from "./Product.js";
import User from "./User.js";
import { StoreInterface } from "../interfaces.js";
import { CategoryEnum } from "../models/Enum.js";

export default class Store implements StoreInterface {
    
    user: User;
    catalog: Catalog;
    cart: Cart;

    constructor() {
        this.user = new User;
        this.catalog = new Catalog;
        this.cart = new Cart; 
    }

    fetchProducts() : void {

        let data: any[any] = [
            {id:1, name: "Libro 1", price: "$123", category: CategoryEnum.Book},
            {id:2, name: "Curso 1", price: "$223", category: CategoryEnum.Course},
            {id:3, name: "Clase 1", price: "$1323", category: CategoryEnum.Software},
            {id:1, name: "Libro 1", price: "$123", category: CategoryEnum.Book},
            {id:2, name: "Curso 1", price: "$223", category: CategoryEnum.Course},
            {id:3, name: "Clase 1", price: "$1323", category: CategoryEnum.Course},
            {id:1, name: "Libro 1", price: "$123", category: CategoryEnum.Book},
            {id:2, name: "Curso 1", price: "$223", category: CategoryEnum.Course},
            {id:3, name: "Clase 1", price: "$1323", category: CategoryEnum.Course}
        ]

        // debo definir una interface para el data
        data.forEach((item: {name: string, price: string, id: number}) => {
            let product: Product = new Product;
            product.name = item.name;
            product.price = item.price;
            product.id = item.id;

            this.catalog.add(product);
        })
    }

    getCart() : Cart {
        return this.cart;
    }

    getCatalog() : Catalog {
        return this.catalog;
    }
}
