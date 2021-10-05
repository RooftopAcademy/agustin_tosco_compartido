import Comment from "../entities/Comment";
import renderProductComments from "./renderProductComments";

export default function fetchProductComments (productId: string) {
    fetch(`https://61587a685167ba00174bbb19.mockapi.io/comments`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        
        let comments : Comment[] = json;

        /**
         *  Returns filtered comments for this product
         */

        let productComments = comments.filter((e: Comment) => e.productId == productId)

        renderProductComments(document, productComments);
    })
    .catch((err: { StatusText: string, status: any }) => {
        console.log(err);
        let message = err.StatusText || "An error occurred";
        let commentsSection: HTMLElement = document.getElementById("js-comment-section")!;
        commentsSection.innerHTML = `Error ${err.status}: ${message}`;
    })
}