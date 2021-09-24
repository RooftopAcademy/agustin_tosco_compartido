class Product {
    
    constructor() {
        this._name = String;
        this._price = Number;
        this._description = String;
        this._stock = Number;
        this._image = String;
        this._category = String;
    }

    set name(n) {
        this._name = n;
    }

    get name() {
        return this._name;
    }

    set price(n) {
        this._price = n;
    }

    get price() {
        return this._price;
    }

    set description(n) {
        this._description = n;
    }

    get description() {
        return this._description;
    }

    set id(n) {
        this._id = n;
    }

    get id() {
        return this._id;
    }


}

product = new Product;
