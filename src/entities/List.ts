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
        return console.log(this.obj);
    }

    sortByName() {
        return this.sortByKey('name');
    }

    sortByPrice() {
        return this.sortByKey('price');
    }

    sortByStock() {
        return this.sortByKey('stock');
    }

    sortById() {
        return this.sortByKey('id');
    }

    sortByCategory() {
        return this.sortByKey('category');
    }

    sortByKey(key = '') {
        console.log(key);

        return this.result.sort((a, b) => this.sortBy(a, b, key))
    }

    sortBy(a: any, b: any, key: string) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    }
}
