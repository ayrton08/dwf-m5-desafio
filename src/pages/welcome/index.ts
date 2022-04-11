
export function welcomePage (params) {
    const div = document.createElement("div")
    div.className = "contenedor" 
    div.innerHTML = `
        <title-text></title-text>
        <button-start></button-start>
        <div class="container">
        <piedra-comp></piedra-comp>
        <papel-comp></papel-comp>
        <tijera-comp></tijera-comp>
        </div>
       
    `

    const button = div.querySelector("button-start")

    button.addEventListener("click",(event)=>{
        event.preventDefault()
        params.goTo("/instructions")
    })

    return div
}
