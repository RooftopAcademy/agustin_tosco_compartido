export default function generateError(source: string) {

    let inputSource: HTMLElement = document.getElementById(source)!;

    let previousStyle: string = inputSource.style.border;
    inputSource.style.border = "3px solid red"
    inputSource.focus();

    switch(source) {
        case "name":
            alert("Ingrese un nombre");
          break;
        case "email":
            alert("Ingrese un email");
          break;
        case "age":
            alert("Seleccione una edad");
          break;
      }

    setTimeout(() => {
        inputSource.style.border = previousStyle;
    }, 3000);
}