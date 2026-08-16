class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div id="background"> 
                <div id="contact">
                <div class="container">
                    <div class="section-text">
                        <h1>Contact</h1>            
                        <br></br>
                        <p class="glass">
                            <a href="https://github.com/shrungpatel"><img src="./images/github_logo.png" alt="GitHub" style="width:32px;height:32px;"></a>
                            <a href="https://linkedin.com/in/shrung-patel"><img src="./images/linkedin_logo.png" alt="LinkedIn" style="width:32px;height:32px;"></a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </footer>`;
    }
}
customElements.define('footer-component', Footer);
