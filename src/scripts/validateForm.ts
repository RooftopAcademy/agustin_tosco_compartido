import User from "../entities/User";
import generateError from "./generateError"

export default function ValidateForm(e: Event) : void {

    e.preventDefault();

    let name = document.getElementById("name")! as HTMLInputElement;
    let email = document.getElementById("email")! as HTMLInputElement;
    let age = document.getElementById("age")! as HTMLInputElement;

    if(name.value == '' || name == null) {
        return generateError("name");
    }

    if(email.value == '' || email == null) {
        return generateError("email");
    }

    if(age.value == '' || age == null) {
        return generateError("age");
    }

    alert(`Thank you for joining our newletter, ${name.value}!`)

    window.location.href = `/product-list.html`;
}
