export default function toggleVisibility() : void {

    if(document.querySelector(".content")) {
        let menu: HTMLElement = document.querySelector(".content")!;

        let hidden: string = 'hidden';
        let visible: string = 'visible';

        menu.classList.contains(hidden)?menu.classList.replace(hidden, visible):menu.classList.replace(visible, hidden);
    }

    if(document.querySelector(".login-modal")) {
        let loginModal: HTMLElement = document.querySelector(".login-modal")!;
        let loginContent: HTMLElement = document.querySelector(".login-container")!;

        let hidden: string = 'hidden';
        let visible: string = 'visible';

        loginModal.classList.contains(hidden)?
            loginModal.classList.replace(hidden, visible):
                loginModal.classList.replace(visible, hidden);
        
        loginContent.classList.contains(hidden)?
            loginContent.classList.replace(hidden, visible):
                loginContent.classList.replace(visible, hidden);
    }
    
}
