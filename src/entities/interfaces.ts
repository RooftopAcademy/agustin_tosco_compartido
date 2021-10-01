export interface UserInterface {
   
    name: string;
    age: number;
    email: string;

    setName(name: string) : void;

    getName() : string;

    setAge(age: number) : void;

    getAge() : number;

    setEmail(email: string) : void;

    getEmail() : string;
}

export interface PageInterface {
    render(c: HTMLElement) : void

    registerEvents(d: Document) : void
}

 