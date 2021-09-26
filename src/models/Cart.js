class Cart {
    // agregar, eliminar, actualizar
    constructor() {
        this.products = [];
    }

    add(p) {
        if (p instanceof Product) {
            this.products.push(p);
        } else {
            throw Error("Parameter should be Product type");
        }
    }
}