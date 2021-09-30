import Product from "../models/Product.js";
import Store from "../models/Store.js";
import { CategoryEnum } from "../models/Enum.js";

export default function fetchProducts(store: Store) : void {

    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    // .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    // .then((json) => {
    //     let data: any = json;
    //     data.forEach((el: any) => {
    //         if(el.id < 10) {
    //             let product: Product = new Product;
    //             product.name = el.title.slice(0,10);
    //             product.price = "$1111";
    //             product.id = el.id;
                
    //             this.catalog.add(product);
    //        }
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    // })

    let data: any[any] = [
        {id:1, name: "El Inversor Inteligente", price: "$123", description: "", stock: 1, image: "", category: CategoryEnum.Book},
        {id:2, name: "Finanzas personales", price: "$223", description: "", stock: 1, image: "", category: CategoryEnum.Course},
        {id:3, name: "Introducción al Análisis Fundamental", description: "", stock: 1, image: "", price: "$1323", category: CategoryEnum.Book},
        {id:1, name: "Security Analysis", price: "$123", description: "", stock: 1, image: "", category: CategoryEnum.Book},
        {id:2, name: "Personal & Family Financial Planning", price: "$223", description: "", stock: 1, image: "", category: CategoryEnum.Course},
        {id:3, name: "Xero", price: "$1323", description: "", stock: 1, image: "", category:  CategoryEnum.Software},
        {id:1, name: "FreeAgent", price: "$123", description: "", stock: 1, image: "", category: CategoryEnum.Software},
        {id:2, name: "AmiBroker", price: "$223", description: "", stock: 1, image: "", category: CategoryEnum.Software},
        {id:3, name: "NinjaTrader", price: "$1323", description: "", stock: 1, image: "", category: CategoryEnum.Software}
    ]

    // debo definir una interface para el data
    data.forEach((item: {name: string, price: string, id: number}) => {
        let product: Product = new Product;
        product.name = item.name;
        product.price = item.price;
        product.id = item.id;

        store.catalog.add(product);
    })
}