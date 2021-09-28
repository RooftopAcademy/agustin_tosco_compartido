import { UserInterface } from "../interfaces";

export default class User implements UserInterface {
    
    name: string;
    age: number;
    email: string;

    constructor() {
        this.name = "";
        this.age = 0;
        this.email = "";
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    delete(name: string) {
        
    }

}