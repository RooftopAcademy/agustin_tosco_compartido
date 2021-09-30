import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import User from "./User.js";

export default class Store {
    
    user: User;
    catalog: Catalog;
    cart: Cart;

    constructor() {
        this.user = new User;
        this.catalog = new Catalog;
        this.cart = new Cart; 
    }

    getCart() : Cart {
        return this.cart;
    }

    getCatalog() : Catalog {
        return this.catalog;
    }
}
