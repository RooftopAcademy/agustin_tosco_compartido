import User from "../src/models/User.js";

let form: HTMLElement = document.getElementById("form")!;

function ValidateForm(e: Event) : void {

    e.preventDefault();

    let name = document.getElementById("name")! as HTMLInputElement;
    let email = document.getElementById("email")! as HTMLInputElement;
    let age = document.getElementById("age")! as HTMLInputElement;

    if(name.value == '' || name == null) {
        return alert("Ingrese un nombre");
    }

    if(email.value == '' || email == null) {
        return alert("Ingrese un email");
    }

    if(age.value == '' || age == null) {
        return alert("Ingrese una edad");
    }

    let user: User = new User()
    user.setName(name.value);
    user.setEmail(email.value);
    user.setAge(parseInt(age.value));

    alert(`Bienvenido, ${name.value}`);

    window.location.href = `/html/product-list.html`;
}

form.addEventListener('submit', ValidateForm);
