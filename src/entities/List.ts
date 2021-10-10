import Product from "./Product";
import { OrderObject } from "./interfaces";
import useLocalStorage from "../helpers/useLocalStorage";

export default abstract class List {

    obj : OrderObject;
    cache : any;
    result: Product[];

    constructor() {
        this.obj = {key: '', order: 0};
        this.cache = new Map;
        this.result = [];
    }

/**
 *  1. check if key and order was already calculated
 *  2.1. if true => return that array
 *  2.2. if not => calculate new list
 *      3. store new list in cache and in sort obj
 *  4. return new list
 *  5. render products
 */

//  list.setSorting({'key': 'id', 'order': '1'})

    setSorting(obj: OrderObject) {

        if(this.cache.has(obj.key)) {
            console.log('true');
            return this.getItems(obj.key);
        }
        console.log('false');
    }

    getItems(obj: Object) {
        return console.log(this.cache.get(obj));
    }

    setCache(obj: OrderObject, result: Product[]) {
        this.cache.set(obj.key, result)
        console.log(this.cache.get(obj.key));
        // useLocalStorage.set(obj.key, {obj, result});
    }

    /**
     *  Specific methods for each sorting type
     */
    
    sortByName(order: number) {
        
        const obj = {'key': 'name', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('name');
        this.setCache(obj, result)
    }

    sortByPrice(order: number) {
        const obj = {'key': 'price', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('price');
        this.setCache(obj, result)
    }

    // sortByStock() {
    //     this.setSorting('stock');
    //     return this.sortByKey('stock');
    // }

    // sortById() {
    //     this.setSorting('id');
    //     return this.sortByKey('id');
    // }

    // sortByCategory() {
    //     this.setSorting('category');
    //     return this.sortByKey('category');
    // }

    /**
     *  Methods for sorting considering 'key'
     */

    sortByKey(key = '') {
        return this.result.sort((a, b) => this.sortBy(a, b, key))
    }

    sortBy(a: any, b: any, key: string) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    }
}
