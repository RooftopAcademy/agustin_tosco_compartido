class Catalog {

    constructor() {
        this.products = [];
    }

    all() {
        return this.products;
    }

    findById(id) {
        return this.products.find(p => {
            return p.id == id;
        })
    }

    add(p) {
        this.products.push(p);
    }
}