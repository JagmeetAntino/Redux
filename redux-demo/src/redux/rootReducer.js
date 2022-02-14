import { combineReducers } from "redux";
import BallReducer from "./BallReducer";
import BatReducer from "./BatReducer";

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer 
})

export default rootReducer;