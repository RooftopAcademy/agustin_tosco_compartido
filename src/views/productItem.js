function productItem (product) {
    return `
        <div class="product">
            <div class="level">${product.name}</div>
            <h2>${product.price}</h2>
            <ul>
                <li>Lorem ipsum.</li>
                <li>Lorem ipsum, lorem ipsum.</li>
                <li>Lorem ipsum.</li>
                <li>Lorem ipsum.</li>
            </ul>
            <div class="buy-details-buttons">
                <button class="btn js-details" data-product-id="${product.id}">
                    Detalles
                </button>
                <button class="btn js-add-to-cart" data-product-id="${product.id}">
                    Comprar
                </button>
            </div>

        </div>
    `
}