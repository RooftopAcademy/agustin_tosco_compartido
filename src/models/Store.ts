import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import Product from "./Product.js";
import User from "./User.js";
import { CategoryEnum } from "./Enum.js";
export default class Store {
    
    user: User;
    catalog: Catalog;
    cart: Cart;

    constructor() {
        this.user = new User;
        this.catalog = new Catalog;
        this.cart = new Cart; 
    }

    fetchProducts() : void {

        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            let data: any = json;
            data.forEach((el: any) => {
                if(el.id < 10) {
                    let product: Product = new Product;
                    product.name = el.title.slice(0,10);
                    product.price = "$1111";
                    product.id = el.id;
                    
                    this.catalog.add(product);
               }
            });
        })
        .catch(err => {
            console.log(err);
        })

        let data: any[any] = [
            {id:1, name: "El Inversor Inteligente", price: "$123", category: CategoryEnum.Book},
            {id:2, name: "Finanzas personales", price: "$223", category: CategoryEnum.Course},
            {id:3, name: "Introducción al Análisis Fundamental", price: "$1323", category: CategoryEnum.Book},
            {id:1, name: "Security Analysis", price: "$123", category: CategoryEnum.Book},
            {id:2, name: "Personal & Family Financial Planning", price: "$223", category: CategoryEnum.Course},
            {id:3, name: "Xero", price: "$1323", category: CategoryEnum.Software},
            {id:1, name: "FreeAgent", price: "$123", category: CategoryEnum.Software},
            {id:2, name: "AmiBroker", price: "$223", category: CategoryEnum.Software},
            {id:3, name: "NinjaTrader", price: "$1323", category: CategoryEnum.Software}
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
