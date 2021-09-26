class Comment {

    constructor() {
        this.productId = String;
        this.body = String;
        this.userName = String;
    }

    getProductId(){
        return this.productId;
    }
    setProductId(value){
        return this.productId = value;
    }
    getBody(){
        return this.body;
    }
    setBody(value){
        return this.body = value;
    }
    getUserName(){
        return this.userName;
    }
    setUserName(value){
        return this.userName = value;
    }
}

class CommentFactory{
    static create(obj){
        let comment = new Comment;

        comment.setTarget(obj["postId"])
        comment.setBody(obj["body"])
        comment.setUserName(obj["name"])

        return comment;
    }
}