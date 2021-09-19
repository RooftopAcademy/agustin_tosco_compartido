function productItem (product) {
    return `
        <div class="product">
            <div>${product.name}</div>
            <div>$${product.price}</div>
            <button class="js-add-to-cart" data-product-id="${product.id}">
                Comprar
            </button>
        </div>
    `
}