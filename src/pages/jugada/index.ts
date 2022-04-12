export function jugada(params) {
    const div = document.createElement("div");
    div.className = "container-jugada";

    console.log(history.state.player);
    console.log(history.state.machine);
    console.log(history.state.resultado);
    
    const jugada = {
        papel: `<papel-comp></papel-comp>`,
        piedra: `<piedra-comp></piedra-comp>`,
        tijera: `<tijera-comp></tijera-comp>`,
    };

    div.innerHTML = `
            ${jugada[history.state.machine]}
            ${jugada[history.state.player]}
            `;

    return div;
}
