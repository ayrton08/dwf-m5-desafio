const image = require("url:../../images/piedra.svg");

export function piedra() {
    class Piedra extends HTMLElement {
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
    customElements.define("piedra-comp", Piedra);
}