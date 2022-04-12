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
            div.style.width = "85px"
            div.style.height = "160px"

            this.shadowRoot.appendChild(div);
        }

        
    }
    customElements.define("papel-comp", Papel);
}
