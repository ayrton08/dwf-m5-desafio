type Jugada = "piedra" | "papel" | "tijera";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada
}

export const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        history: [{}],
    },

    // setMove(move: Jugada) {
    //     const currentState = this.getState();
    //     currentState.currentGame.myPlay;
    // },

    // pushToHistory(play){
    //     const currentState = this.getState();
    //     currentState.history(play)
    // },

    whoWins(myPlay, computerPlay) {
        if(myPlay== "papel" && computerPlay == "piedra"){
            return true
        } 
        if(myPlay== "piedra" && computerPlay == "tijera"){
            return true
        }
        if(myPlay== "tijera" && computerPlay == "papel"){
            return true
        } 
        else {
            return false
        }
     },



};





