export default function toggleMenu() : void {

    let menu: HTMLElement = document.querySelector(".content")!;

    let hidden: string = 'hidden';
    let visible: string = 'visible';

    menu.classList.contains(hidden)?menu.classList.replace(hidden, visible):menu.classList.replace(visible, hidden);
}
