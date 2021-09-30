import Product from "../models/Product.js";

export default function productDetails(product: Product): string {
    return `
        <div class="details">
            <h1>Clase 1</h1>
            <img class="product-detail-img" src="https://pbs.twimg.com/profile_images/1123713137180590081/YuTnZLof_400x400.png">
            <ul>
                <li>Description here</li>
                <li>Description here and here Description here</li>
            </ul>
        </div>
        <div class="comments-section">
            <p>Comments here</p>
            <p>Comments here</p>
            <p>Comments here</p>
            <p>Comments here</p>
            <p>Comments here</p>
            <p>Comments here</p>
            <p>Comments here</p>
        </div>
    `
}
