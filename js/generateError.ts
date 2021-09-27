export default function generateError(source: string) {

    let inputSource: HTMLElement = document.getElementById(source)!;
    console.log(inputSource);

    let previousStyle = inputSource.style.border;
    inputSource.style.border = "2px solid red"
    inputSource.focus();

    setTimeout(() => {
        inputSource.style.border = previousStyle;
    }, 1500);
}