const image = require("url:../../images/papel.svg");

export function papel() {
    class Papel extends HTMLElement {
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
    customElements.define("papel-comp", Papel);
}
