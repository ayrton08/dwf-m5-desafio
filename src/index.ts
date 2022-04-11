import { initRouter } from "./router";
import {titleText} from "./components/title-text/index"
import { buttonStart } from "./components/button-start";
import { papel } from "./components/papel-comp/index";
import {piedra} from "./components/piedra-comp/index"
import { tijera } from "./components/tijera-comp";
import {buttonPlay} from "./components/button-play/index"
import { instructionsComp } from "./components/instruction-comp";
import { buttonPlayAgain } from "./components/button-playagain";


(function (){
    titleText()
    buttonStart()
    buttonPlay()
    papel()
    piedra()
    tijera()
    instructionsComp()
    buttonPlayAgain()

    const root = document.querySelector(".root");

    initRouter(root)


})()