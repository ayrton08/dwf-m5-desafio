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
    

            this.shadowRoot.appendChild(div);
        }

        
    }
    customElements.define("tijera-comp", Tijera);
}