// import BatReducer from "./BatReducer";
//import BallReducer from "./BallReducer";
import {createStore} from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer,composeWithDevTools()); //global store created where BatReducer and BallReducer states combine in rootreducer are defined.

export default store;