const image = require("url:../../images/ganaste.svg");


export function ganaste (params) {
    const div = document.createElement("div")
    div.innerHTML = `
        <img src="${image}" >
        <button-playagain></button-playagain>

        `
    
    const button = div.querySelector("button-playagain")
    button.addEventListener("click",(event)=>{
        event.preventDefault()
        params.goTo("/play")
    })

    return div
}