import Product from "./Product";

export default abstract class List {

    obj : Object = {};
    cache : Object = {};
    result: Product[] = [];

    constructor() {
        this.obj = {};
        this.cache = new Map;
        this.result = [];
    }

    setSorting(obj = {}) {
        this.obj = obj;

        let keys = Object.keys(obj);


        // cache.set({sort}, 'aaaa');

        // console.log(cache.get(sort));
    }

    getSorting() {

    }

    sortByKey(key = '') {
        return this.result.sort((a, b) => this.sortBy(a, b, key))
    }

    sortBy(a: any, b: any, key: string) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    }

    sortByName() {
        this.sortByKey('name');
    }

    sortByPrice() {
        this.sortByKey('price');
    }

    sortByStock() {
        this.sortByKey('stock');
    }

    sortById() {
        this.sortByKey('id');
    }

    sortByCategory() {
        this.sortByKey('category');
    }

}
