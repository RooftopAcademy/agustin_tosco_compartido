import Product from "./Product";
import { OrderObject } from "./interfaces";
import { sortOrder } from "./Enum";

export default abstract class List {

    obj : OrderObject;
    cache : any;
    result: Product[];

    constructor() {
        this.obj = {key: '', order: sortOrder.Asc};
        this.cache = new Map;
        this.result = [];
        this.sortByPrice = this.sortByPrice.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByStock = this.sortByStock.bind(this);
        this.sortById = this.sortById.bind(this);
        this.sortByCategory = this.sortByCategory.bind(this);
    }

/**
 *  1. check if key and order was already calculated
 *  2.1. if true => return that array
 *  2.2. if not => calculate new list
 *      3. store new list in cache and in sort obj
 *  4. return new list
 *  5. render products
 */

    getSorting(...obj: OrderObject[]) : void {
        
        const sortTable : any = {
            'name': this.sortByName,
            'price': this.sortByPrice,
            'stock': this.sortByStock,
            'id': this.sortById,
            'category': this.sortByCategory

        }

        for (let item in obj) {
            
            let orderBy = obj[item].key;
            let orderDir = obj[item].order;

            sortTable[orderBy](orderDir);
        }
    }

    setSorting(obj: OrderObject) {
        
        if(this.cache.has(obj.key)) {
            this.result = this.getItems(obj.key); 
            return this.result;
        }
    }

    getItems(obj: Object) : Product[] {
        return this.cache.get(obj);
    }

    setCache(obj: OrderObject, result: Product[]) : void {
        this.cache.set(obj.key, result)
        this.result = [...result];
        console.log([...result]);
    }

    /**
     *  Specific methods for each sorting type
     */
    
    sortByName(order: sortOrder) : void {
        const obj = {'key': 'name', 'order': order};
        this.setSorting(obj);
        
        const result = this.sortByKey('name', order);
        this.setCache(obj, result)
    }

    sortByPrice(order: sortOrder) : void {
        const obj = {'key': 'price', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('price', order);
        this.setCache(obj, result)
    }

    sortByStock(order: sortOrder) : void {
        const obj = {'key': 'stock', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('stock', order);
        this.setCache(obj, result)
    }

    sortById(order: sortOrder) : void {
        const obj = {'key': 'id', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('id', order);
        this.setCache(obj, result)
    }

    sortByCategory(order: sortOrder) : void {
        const obj = {'key': 'category', 'order': order};
        this.setSorting(obj);

        const result = this.sortByKey('category', order);
        this.setCache(obj, result)
    }

    /**
     *  Methods for sorting considering 'key'
     */

    sortByKey(key : string = '', order : sortOrder) : Product[] {
        if (parseInt(order) == 1) {
            return this.result.sort((a, b) => this.sortBy(a, b, key))
        } else return this.result.sort((a, b) => this.sortBy(b, a, key))
    }

    sortBy(a: any, b: any, key: string) : number {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    }
}
