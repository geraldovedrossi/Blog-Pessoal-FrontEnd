export type Action = { type : "ADD_Token"; payload: string}
//exporto uma estrutura (type q impede q {...} seja extendido), a ação tem o proposito de ADD um token
//a informação em si vai ser guardada dentro da payload

export const addToken = (token:string): Action => ({
//addToken recebe o parametro token e ela tem a estrutura da action

    type: "ADD_Token",
    payload: token
//type e payload são da estrutura da Action, e salvo o token dado como parametro na payload
})