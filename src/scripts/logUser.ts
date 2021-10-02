import User from "../entities/User";
import useLocalStorage from "../helpers/useLocalStorage";

export default function login(e: Event) : void {
    e.preventDefault();
    
    const TO_YEARS = 31536000000; // Constant to convert from milisecond to years

    let email = document.getElementById("email")! as HTMLInputElement;
    let password = document.getElementById("psw")! as HTMLInputElement;
    let birthday = document.getElementById("birthday")! as HTMLInputElement;
    
    let ageDate = new Date(birthday.value)
    let age = Math.round((Date.now() - ageDate.getTime())/TO_YEARS);
    

    let user: User = new User()
    user.setEmail(email.value);
    user.setPass(password.value);
    user.setAge(age);

    useLocalStorage.set(user.email.split("@")[0], user);

    console.log(useLocalStorage.getAll());

    window.location.href = "/product-list.html"
}