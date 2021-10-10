import Product from "./Product";
import { OrderObject } from "./interfaces";

export default abstract class List {

    obj : OrderObject;
    cache : any;
    result: Product[];

    constructor() {
        this.obj = {key: '', order: ''};
        this.cache = new Map;
        this.result = [];
        this.sortByPrice = this.sortByPrice.bind(this);
        this.sortByName = this.sortByName.bind(this);
    }

/**
 *  1. check if key and order was already calculated
 *  2.1. if true => return that array
 *  2.2. if not => calculate new list
 *      3. store new list in cache and in sort obj
 *  4. return new list
 *  5. render products
 */

    getSorting(...obj: OrderObject[]) {
        
        const sortTable : any = {
            'name': this.sortByName,
            'price': this.sortByPrice
        }

        for (let item in obj) {
            
            let orderBy = obj[item].key;
            let orderDir = obj[item].order;

            sortTable[orderBy]();

            
            //this.setSorting(obj[key])
        }
    }

//  list.setSorting({'key': 'id', 'order': '1'})

    setSorting(obj: OrderObject) {
        
        if(this.cache.has(obj.key)) {
            console.log('true');
            this.result = this.getItems(obj.key); 
            return this.result;
        }
        console.log('false');
    }

    getItems(obj: Object) : Product[] {
        return this.cache.get(obj);
    }

    setCache(obj: OrderObject, result: Product[]) {
        this.cache.set(obj.key, result)
        this.result = [...result];
        console.log([...result]);
        
        // useLocalStorage.set(obj.key, {obj, result});
    }

    /**
     *  Specific methods for each sorting type
     */
    
    sortByName(order: string) {
        const obj = {'key': 'name', 'order': order};
        this.setSorting(obj);
        
        const result = this.sortByKey('name');
        this.setCache(obj, result)
    }

    sortByPrice(order: string) {
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
