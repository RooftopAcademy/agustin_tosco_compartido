let dropdown: HTMLElement = document.querySelector(".dropdown-menu")!;

function toggleMenu() : void {

    let menu: HTMLElement = document.querySelector(".content")!;

    let hidden: string = 'hidden';
    let visible: string = 'visible';

    menu.classList.contains(hidden)?menu.classList.replace(hidden, visible):menu.classList.replace(visible, hidden);

}
  
dropdown.addEventListener('click', toggleMenu);
