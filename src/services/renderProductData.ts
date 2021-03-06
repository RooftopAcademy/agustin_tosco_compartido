import Product from "../entities/Product";

export default function renderProductData (product: Product) {
    
    let details = document.getElementById("js-details")!;
    details.innerHTML =
            `
            <div class="details">   
                <h1>${product.name}</h1>
                <p>${product.price}</p>
                <img class="product-detail-img" src="https://c8.alamy.com/compes/2d8kced/analisis-fundamental-analisis-de-la-inversion-en-acciones-mediante-la-busqueda-de-datos-de-la-empresa-2d8kced.jpg">
                <ul>
                    <li class="product-description">${product.description}</li>
                    <li>Stock: ${product.stock > 0 ? `Available` : `Out of stock`}</li>
                    <li>${product.category}</li>
                </ul>
            </div>
            `
}