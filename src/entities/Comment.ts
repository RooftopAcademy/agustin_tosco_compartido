export default class Comment {

    productId: string;
    body: string;
    name: string;

    constructor() {
        this.productId = "";
        this.body = "";
        this.name = "";
    }

    getProductId(){
        return this.productId;
    }

    setProductId(value: string){
        return this.productId = value;
    }

    getBody(){
        return this.body;
    }

    setBody(value: string){
        return this.body = value;
    }

    getName(){
        return this.name;
    }

    setName(value: string){
        return this.name = value;
    }
}

export class CommentFactory{
    static create(item: Comment){
        let comment = new Comment;

        comment.setProductId(item["productId"])
        comment.setBody(item["body"])
        comment.setName(item["name"])

        return comment;
    }
}