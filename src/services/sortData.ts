import Product from "../entities/Product";

export default function sortData(products: Product[]) {
 
    products.sort(function sortById (a: Product, b: Product) : any {
        return a.price > b.price;
    })
    console.log(products);
}
