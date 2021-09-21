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
            <button class="btn js-add-to-cart" data-product-id="${product.id}">
                Comprar
            </button>
        </div>
    `
}