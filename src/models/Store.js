class Store {
    
    constructor() {
        this.user = new User;
        this.catalog = new Catalog;
        this.cart = new Cart; 
    }

    fetchProducts() {

        let data = [
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

        data.forEach((item) => {
            let product = new Product;

            product.name = item.name;
            product.price = item.price;
            product.id = item.id;

            this.catalog.add(product);
        })
    }

    getCart() {
        return this.cart;
    }

    getCatalog() {
        return this.catalog;
    }
}

let store = new Store;

store.fetchProducts();

let catalog = store.getCatalog();

renderProductsList();

addListener();

function renderProductsList() {
    Array.from(document.getElementsByClassName('js-product-list'))
    .forEach((list) => {
        list.innerHTML = productsList(catalog.all());
    })
}

// function renderProductsDetails(product) {
//     Array.from(document.getElementsByClassName('js-product-details'))
//     .forEach((list) => {
//         list.innerHTML = "product";
//     })
// }

function addListener() {
    document.querySelectorAll(".js-add-to-cart")
    .forEach(btn => {
        btn.addEventListener('click', function() {
            let product = store.getCatalog().findById(this.dataset.productId);
            store.getCart().add(product);
        })
    })
    
    document.querySelectorAll(".js-details")
    .forEach(btn => {
        btn.addEventListener('click', function() {
            let productId = this.dataset.productId;
            window.location.href = `/html/product-details.html?id=${productId}`;
        })
    })
}

if(window.location.pathname == '/html/product-details.html') {
    let url = new URL(window.location.href);
    let productId = url.searchParams.get("id");
    fetchProductData(productId);
  }
