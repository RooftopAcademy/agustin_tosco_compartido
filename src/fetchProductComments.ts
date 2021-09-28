export default function fetchProductComments (productId: string) {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        let data : any = json;
        let commentsSection: HTMLElement = document.getElementById("js-comment-section")!;
        data.forEach((el: any) => {
            if(el.id == productId) {
                let comment = el;
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
        let commentsSection: HTMLElement = document.getElementById("js-comment-section")!;
        commentsSection.innerHTML = `Error ${err.status}: ${message}`;
    })
}