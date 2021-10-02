import { UserInterface } from "./interfaces";

export default class User implements UserInterface {
    
    email: string;
    age: number;
    password: string; // not practical nor secure, just for testing functionality

    constructor() {
        this.email = "";
        this.age = 0;
        this.password = "";
    }

    
    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setPass(password: string) {
        this.password = password;
    }

    getPass() {
        return this.password;
    }

    delete(name: string) {
        
    }
}