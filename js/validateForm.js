let button = document.getElementById("submit");

function ValidateForm(e) {

    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    if(name.value == '' || name == null) {
        return alert("Ingrese un nombre");
    }

    if(email.value == '' || email == null) {
        return alert("Ingrese un nombre");
    }

    if(age.value == '' || age == null) {
        return alert("Ingrese una edad");
    }
}

form.addEventListener('submit', ValidateForm);
