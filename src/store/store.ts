import { createStore } from "redux";
import { tokensReducer } from "./tokens/tokensReducer";

const store = createStore(tokensReducer)

export default store