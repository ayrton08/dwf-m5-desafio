const image = require("url:../../images/perdiste.svg");


export function perdiste (params) {
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