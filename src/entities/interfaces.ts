import { sortOrder } from "./Enum";

export interface UserInterface {
   
    email: string;
    age: number;
    password: string; // not practical nor secure, just for testing functionality

    setEmail(email: string) : void;

    getEmail() : string;

    setAge(age: number) : void;

    getAge() : number;

    setPass(password: string) : void;

    getPass() : string;

    delete(email: string) : void;
}

export interface PageInterface {
    render(c: HTMLElement) : void

    registerEvents(d: Document) : void
}

export interface OrderObject {
    key: string,
    order: sortOrder
}
 