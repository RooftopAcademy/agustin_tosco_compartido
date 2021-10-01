import Catalog from "./Catalog";
import Cart from "./Cart";
import User from "./User";

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
