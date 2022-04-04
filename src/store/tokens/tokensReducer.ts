import { Action } from "./action";
//importando a action

export interface TokenState {
    tokens: string
}
//define que meu token tem um estado do tipo string

const initialState = {
    tokens: ""
}
//define que esse estado inicia vazio

export const tokensReducer = (state: TokenState = initialState, action: Action) => {

    switch(action.type){
        case "ADD_Token": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}