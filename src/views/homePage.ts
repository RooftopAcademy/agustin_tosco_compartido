import ValidateForm from "../scripts/validateForm.js";

export default function homePage() {
    let doc : HTMLElement = document.getElementById("home-content")!;
    doc.innerHTML =
    `
        <div class="header">
            <div class="logo">
                <img id="header-img" src="https://pbs.twimg.com/profile_images/1123713137180590081/YuTnZLof_400x400.png">
            </div>
            <div class="empty"></div>
            <div class="login">
                <input id="login-button" type="button" value="Login">
            </div>
        </div>
        <div class="welcome-section">
            <h1>Welcome to WFT!</h1>
            <div class="features">
                <div class="grid">
                        <div class="icon"><i id="icon" class="fa fa-3x fa-info-circle"></i></div>
                        <div class="description">
                        <h2>Research</h2>
                        <p>Access to concrete, clear and reliable information is essential to make smart decisions when investing.</p>
                        </div>
                </div>
                <div class="grid">
                        <div class="icon"><i id="icon" class="fa fa-3x fa-bell"></i></div>
                        <div class="description"> 
                        <h2>Trading Ideas</h2>
                        <p>Precise and timely entries, exits, and trade management on all trades.           
                        </p>
                        </div>
                </div> 
                <div class="grid">
                        <div class="icon"><i id="icon" class="fa fa-3x fa-book"></i></div>
                        <div class="description"> 
                        <h2>Education</h2>
                        <p>WHAT, HOW, WHY & WHEN: Learn the reasons behind each trade.</p>
                        </div>
                </div>
            </div>
            <div class="contact-us">
                <h2>Do you want to receive our analysis?</h2>
                <form id="form">
                <div class="form-group">
                    <label for="name" id="name-label">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-input"
                    placeholder="Enter your name"
                    >
                </div>
                <div class="form-group">
                    <label for="email" id="email-label">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-input"
                    placeholder="Enter your email"
                    >
                </div>      
                <div class="form-group">
                    <label for="age" id="number-label">Age<span class="clue"> (optional)</span></label>
                    <input
                    type="number"
                    id="age"
                    name="age"
                    max=99
                    min=10
                    class="form-input"
                    placeholder="Age"
                    >
                </div>
                <div class="form-group">
                <div class="form-group">
                    <input
                        id="submit"
                        type="submit"
                        class="submit-button"
                        value="GET STARTED"
                        >
                    </div>
                </form>
                </div>                
            </form>
        </div>
        <footer>
            <ul>
                <ul><a id="st-footer" href="#">Privacy</a></ul>
                <ul><a id="st-footer" href="#">Terms</a></ul>
                <ul><a id="st-footer" href="#">Contact</a></ul>
                </ul>
                <span>Copyright 2021, WFT</span>
            </footer>
            <script>var exports = {};</script>
            <script defer src="../dist/src/app.js" type="module"></script>
        `
    
    let form: HTMLElement = document.getElementById("form")!;
    form.addEventListener('submit', ValidateForm);
}