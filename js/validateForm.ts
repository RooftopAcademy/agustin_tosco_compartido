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
}

form.addEventListener('submit', ValidateForm);
