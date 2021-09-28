import { CommentInterface } from "../interfaces"
export default class UserComment implements CommentInterface {

    productId: number;
    body: string;
    userName: string;

    constructor() {
        this.productId = 0;
        this.body = "";
        this.userName = "";
    }

    getProductId(){
        return this.productId;
    }

    setProductId(value: number){
        return this.productId = value;
    }

    getBody(){
        return this.body;
    }

    setBody(value: string){
        return this.body = value;
    }

    getUserName(){
        return this.userName;
    }

    setUserName(value: string){
        return this.userName = value;
    }
}

// export class CommentFactory{
//     static create(obj: UserComment){
//         let comment = new Comment;

//         User.setTarget(obj["postId"])
//         comment.setBody(obj["body"])
//         comment.setUserName(obj["name"])

//         return comment;
//     }
//}