export default function fetchProductData (productId: string) {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        let data: any = json;
        data.forEach((el: any) => {
            if(el.id == productId) {
                let product = el;
                let details = document.getElementById("js-details")!;
                let description = product.body.slice(0,25);
                console.log(product.body);
                details.innerHTML = `
                <div class="details">
                    <h1>${product.title}</h1>
                    <img class="product-detail-img" src="https://c8.alamy.com/compes/2d8kced/analisis-fundamental-analisis-de-la-inversion-en-acciones-mediante-la-busqueda-de-datos-de-la-empresa-2d8kced.jpg">
                    <ul>
                        <li>${description}</li>
                        <li>${product.body}</li>
                        <li>${description}</li>
                        <li>${product.body}</li>
                        <li>${description}</li>
                    </ul>
                </div>
            `;
           }
           
        });
    })
    .catch(err => {
        console.log(err);
        let message = err.StatusText || "An error occurred";
        let details = document.getElementById("js-details")!;
        details.innerHTML = `Error ${err.status}: ${message}`;
    })
}