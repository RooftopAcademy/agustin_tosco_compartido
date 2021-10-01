export default function productList() {    
    let doc : HTMLElement = document.getElementById("product-list-content")!;
    doc.innerHTML =
    `
        <div class="header">
            <div class="logo">
            <img id="header-img" src="https://pbs.twimg.com/profile_images/1123713137180590081/YuTnZLof_400x400.png">
            </div>
            <div class="search-bar">
            <div class="search-input">
                <input class="search-input-bar" type="search" placeholder="  Search...">
            </div>
            <div class="submit-search">
                <input class="submit-search" type="submit" value="&#10140;">
            </div>
            </div>
            <div class="dropdown-menu">
            <div class="hamburguer-menu">
                <div class="cart-counter" id="js-cart">0</div>
                <i id="icon" class="fas fa-shopping-cart"></i>
                <img id=hamburguer-icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png">
            </div>
            <div class="content hidden">
                <div class="option">
                <p>Profile</p>
                </div>
                <div class="option">
                <p>Settings</p>
                </div>
                <div class="option">
                <p>Appearance</p>
                </div>
                <div class="option">
                <p>Language</p>
                </div>
                <div class="option">
                <p>Sign Out</p>
                </div>
            </div>
        </div>
        </div>
        <div class="nav">
            <ul>
            <ul><a href="/index.html" class="nav-link">Home</ul></a>
            <ul><a href="/product-list.html" class="nav-link">Product List</ul></a>
            </ul>
        </div>
        <div class="product-container js-product-list">
            
        </div>
        <footer>
            <ul>
            <ul><a id="st-footer" href="#">Privacy</a></ul>
            <ul><a id="st-footer" href="#">Terms</a></ul>
            <ul><a id="st-footer" href="#">Contact</a></ul>
            </ul>
            <span>Copyright 2021, WFT</span>
        </footer>
    `
}