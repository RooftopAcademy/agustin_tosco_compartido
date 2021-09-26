import UserComment from "./Comment.js";
import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import Product from "./Product.js";
import productsList from "../views/productsList.js";
import fetchProductData from "../fetchProductData.js";
import fetchProductComments from "../fetchProductComments.js";



class Store {
    
    user: UserComment;
    catalog: Catalog;
    cart: Cart;

    constructor() {
        this.user = new UserComment;
        this.catalog = new Catalog;
        this.cart = new Cart; 
    }

    fetchProducts() : void {

        let data: any[any] = [
            {id:1, name: "Libro 1", price: "$123"},
            {id:2, name: "Curso 1", price: "$223"},
            {id:3, name: "Clase 1", price: "$1323"},
            {id:1, name: "Libro 1", price: "$123"},
            {id:2, name: "Curso 1", price: "$223"},
            {id:3, name: "Clase 1", price: "$1323"},
            {id:1, name: "Libro 1", price: "$123"},
            {id:2, name: "Curso 1", price: "$223"},
            {id:3, name: "Clase 1", price: "$1323"}
        ]

        // debo definir una interface para el data
        data.forEach((item: { name: string; price: string; id: number; }) => {
            let product = new Product;

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

let store: Store = new Store;

store.fetchProducts();

let catalog: Catalog = store.getCatalog();

renderProductsList();

addListener();

function renderProductsList() : void {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(catalog.all());
    })
}

function addListener() : void {
    document.querySelectorAll(".js-add-to-cart")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
            let product: Product = store.getCatalog().findById(this.dataset.productId!);
            store.getCart().add(product);
        })
    })
    
    document.querySelectorAll(".js-details")
    .forEach(btn => {
        btn.addEventListener('click', function (this: HTMLInputElement) : void {
            let productId = this.dataset.productId;
            window.location.href = `/html/product-details.html?id=${productId}`;
        })
    })
}

if(window.location.pathname == '/html/product-details.html') {
    let url = new URL(window.location.href);
    let productId = url.searchParams.get("id");
    fetchProductData(productId!);
    fetchProductComments(productId!);
  }