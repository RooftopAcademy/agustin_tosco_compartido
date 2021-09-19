function productsList(products) {
    return products.map((product) => productItem(product)).join('')
}
