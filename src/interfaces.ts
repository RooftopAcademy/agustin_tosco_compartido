import Cart from "./models/Cart.js";
import Catalog from "./models/Catalog.js";
import Product from "./models/Product.js"
import User from "./models/User.js";

export interface CartInterface {
    products: Product[];
}

export interface CatalogInterface {
    products: Product[];
}

export interface CommentInterface {
    productId: number;
    body: string;
    userName: string;
}

export interface ProductInterface {
    name: string;
    price: string;
    description: string;
    stock: number;
    id: number;
    image: string;
    category: string;

    setName(n: string)  : void;

    getName() : string;

    setPrice(n: string) : void

    getPrice() : string;

    setDescription(n: string) : void

    getDescription() : string;

    setId(n: number) : void

    getId() : number;
}

export interface StoreInterface {
    user: User;
    catalog: Catalog;
    cart: Cart;
}

export interface UserInterface {
   
    name: string;
    age: number;
    email: string;

    setName(name: string) : void;

    getName() : string;

    setAge(age: number) : void;

    getAge() : number;

    setEmail(email: string) : void;

    getEmail() : string;
}
 