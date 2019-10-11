import exampleReducer from "./example/reducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    example: exampleReducer,
})

export default rootReducer