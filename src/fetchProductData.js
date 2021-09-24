let details = document.getElementById("js-details");

function fetchProductData (productId) {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        data = json;
        data.forEach((el) => {
            if(el.id == productId) {
                product = el;
                details.innerHTML = `
                <div class="details">
                    <h1>${product.title}</h1>
                    <img class="product-detail-img" src="https://pbs.twimg.com/profile_images/1123713137180590081/YuTnZLof_400x400.png">
                    <ul>
                        <li>${product.body}</li>
                        <li>Description here and here Description here</li>
                    </ul>
                </div>
            `;
           }
           
        });
    })
    .catch(err => {
        console.log(err);
        let message = err.StatusText || "An error occurred";
        fetchedData.innerHTML = `Error ${err.status}: ${message}`;
    })
}