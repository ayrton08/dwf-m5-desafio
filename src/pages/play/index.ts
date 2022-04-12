import { state } from "../../state";

export function play(params) {
    
    function redireccionar() {
        if(location.pathname === "/play"){
            params.goTo("/instructions");
        }
    }

    setTimeout(redireccionar, 5000);

    const div = document.createElement("div");
    div.className = "container-play";
    div.innerHTML = `
    
    <counter-comp></counter-comp>
    <div class="jugadas">
    <piedra-comp></piedra-comp>
    <papel-comp></papel-comp>
    <tijera-comp></tijera-comp>
    </div>
    `;

    function jugadaMaquina() {
        const opciones = ["piedra", "papel", "tijera"];
        const resultado = opciones[Math.floor(Math.random() * opciones.length)];
        return resultado;
    }

    const piedra = div.querySelector("piedra-comp");
    const papel = div.querySelector("papel-comp");
    const tijera = div.querySelector("tijera-comp");
    
    
    piedra.addEventListener("click", (event) => {
        event.preventDefault();

        papel.style.opacity = "0.4"
        tijera.style.opacity = "0.4"
        
        const playMaquina = jugadaMaquina()

        const resultado = state.whoWins("piedra", playMaquina);
        setTimeout(()=>{

            if (resultado === "gane") {
                state.win();
                return params.goTo("/result/jugada",{resultado:"ganaste",player:"piedra",machine:playMaquina});

            }
            if (resultado === "empate") {
                return params.goTo("/result/jugada",{resultado:"empate",player:"piedra",machine:playMaquina});
            } else {
                state.lost();
                return params.goTo("/result/jugada",{resultado:"perdiste",player:"piedra",machine:playMaquina});
            }
        },700)
    });

    papel.addEventListener("click", (event) => {
        event.preventDefault();
        
        piedra.style.opacity = "0.4"
        tijera.style.opacity = "0.4"
        
        const resultado = state.whoWins("papel", jugadaMaquina());
        setTimeout(()=>{

            if (resultado === "gane") {
                state.win();
                return params.goTo(`/result/${history.state.resultado}`);
            }
            if (resultado === "empate") {
                return params.goTo("/result/empate");
            } else {
                state.lost();
                return params.goTo("/result/perdiste");
            }
        },700)
    });

    tijera.addEventListener("click", (event) => {
        event.preventDefault();
        
        papel.style.opacity = "0.4"
        piedra.style.opacity = "0.4"

        const resultado = state.whoWins("tijera", jugadaMaquina());
        setTimeout(()=>{

            if (resultado === "gane") {
                state.win();
                return params.goTo("/result/ganaste");
            }
            if (resultado === "empate") {
                return params.goTo("/result/empate");
            } else {
                state.lost();
                return params.goTo("/result/perdiste");
            }
        },700)
    });

    return div;
}
