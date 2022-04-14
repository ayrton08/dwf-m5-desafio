import { state } from "../../state";

export function jugada(params) {
    const div = document.createElement("div");

    div.className = "container-jugada";

    const jugada = {
        papel: `<papel-comp></papel-comp>`,
        piedra: `<piedra-comp></piedra-comp>`,
        tijera: `<tijera-comp></tijera-comp>`,
    };

    
    
    
    div.innerHTML = `
    ${jugada[history.state.machine]}
    ${jugada[history.state.player]}
    `;
    
    div.firstElementChild.className = "maquina"

    setTimeout(()=>{

        if(history.state.resultado === "ganaste") {
            return params.goTo("/result/ganaste",history.state)

        }

        if(history.state.resultado === "perdiste") {
            return params.goTo("/result/perdiste",history.state)

        }

        if(history.state.resultado === "empate") {
            return params.goTo("/result/empate",history.state)

        }

    },2000)

    return div;
}
