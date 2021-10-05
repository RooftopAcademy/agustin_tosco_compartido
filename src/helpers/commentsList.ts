import singleComment from "../components/singleComment";
import Comment from "../entities/Comment";

export default function commentsList(comments: Comment[]) : string {
    return comments.map((comment: Comment) => singleComment(comment)).join('');
}
