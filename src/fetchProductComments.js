function fetchProductComments (productId) {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        data = json;
        let commentsSection = document.getElementById("js-comment-section");
        data.forEach((el) => {
            if(el.id == productId) {
                comment = el;
                let nombre = comment.email.slice(0, comment.email.indexOf("@"));
                commentsSection.innerHTML = `
                    <h1>Comments</h1>
                    <h2>${nombre}</h2>
                    <ul>
                        <li>${comment.body}</li>
                    </ul>
                    `
           }
        })
    })
    .catch(err => {
        console.log(err);
        let message = err.StatusText || "An error occurred";
        fetchedData.innerHTML = `Error ${err.status}: ${message}`;
    })
}