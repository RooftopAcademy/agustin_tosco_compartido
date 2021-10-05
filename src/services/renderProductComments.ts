import commentsList from "../helpers/commentsList";
import Comment from "../entities/Comment";

export default function renderProductComments(document: Document, comments: any ) {
    Array.from(document.querySelectorAll('#js-comment-section'))
        .forEach((list) => {
            list.innerHTML = commentsList(comments);
        });
}