const image = require("url:../../images/tijera.svg");

export function tijera() {
    class Tijera extends HTMLElement {
        constructor() {
            super();
            this.render();
        }

        render() {
            this.attachShadow({ mode: "open" });

            const div = document.createElement("img");
            div.src = image;
            div.style.width = "70px"
            div.style.height = "160px"

    

            this.shadowRoot.appendChild(div);
        }

        
    }
    customElements.define("tijera-comp", Tijera);
}