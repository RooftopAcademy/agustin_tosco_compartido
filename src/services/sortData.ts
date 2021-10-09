import Product from "../entities/Product";

export default function sortData(products: Product[]) {
 
    products.sort(function sortById (a: Product, b: Product) : any {
        return parseFloat(a.price) > parseFloat(b.price);
    })

    console.log(products);
    
}
