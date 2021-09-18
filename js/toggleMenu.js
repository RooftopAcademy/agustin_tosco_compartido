let dropdown = document.querySelector(".dropdown-menu");

function toggleMenu() {

    let menu = document.querySelector(".content");

    let hidden = 'hidden';
    let visible = 'visible';

    menu.classList.contains(hidden)?menu.classList.replace(hidden, visible):menu.classList.replace(visible, hidden);

}
  
dropdown.addEventListener('click', toggleMenu);
