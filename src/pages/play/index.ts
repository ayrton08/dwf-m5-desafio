import { state } from "../../state";

export function play(params) {
    const div = document.createElement("div");
    div.innerHTML = `

    <div class="container">
    <piedra-comp class="piedra"></piedra-comp>
    <papel-comp></papel-comp>
    <tijera-comp></tijera-comp>
    </div>
    `;

    function jugadaMaquina() {
        const opciones = ["piedra", "papel", "tijera"];
        const resultado = opciones[Math.floor(Math.random() * opciones.length)];
        return resultado
    }
    

    const piedra = div.querySelector("piedra-comp")
    const papel = div.querySelector("papel-comp")
    const tijera = div.querySelector("tijera-comp")

    piedra.addEventListener("click", (event)=>{
        event.preventDefault()
        const resultado = state.whoWins("piedra", jugadaMaquina())
        if(resultado == true) {
            params.goTo("/result/ganaste")
        } else{
            params.goTo("/result/perdiste")
        }
    })
    
    papel.addEventListener("click", (event)=>{
        event.preventDefault()
        const resultado = state.whoWins("papel", jugadaMaquina())
        if(resultado == true) {
            params.goTo("/result/ganaste")
        } else{
            params.goTo("/result/perdiste")
        }
    })

    tijera.addEventListener("click", (event)=>{
        event.preventDefault()
        const resultado = state.whoWins("tijera", jugadaMaquina())
        if(resultado == true) {
            params.goTo("/result/ganaste")
        } else{
            params.goTo("/result/perdiste")
        }
    })
    

    return div;
}


