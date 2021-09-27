import User from "../src/models/User.js";
import generateError from "../js/generateError.js"

export default function ValidateForm(e: Event) : void {

    e.preventDefault();

    let name = document.getElementById("name")! as HTMLInputElement;
    let email = document.getElementById("email")! as HTMLInputElement;
    let age = document.getElementById("age")! as HTMLInputElement;

    console.log(name.value);
    

    if(name.value == '' || name == null) {
        return generateError("name");
    }

    if(email.value == '' || email == null) {
        return generateError("email");
    }

    if(age.value == '' || age == null) {
        return generateError("age");
    }

    let user: User = new User()
    user.setName(name.value);
    user.setEmail(email.value);
    user.setAge(parseInt(age.value));

    alert(`Bienvenido, ${name.value}`);

    window.location.href = `/html/product-list.html`;
}

