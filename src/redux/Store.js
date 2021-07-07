import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reduser";
import reducer2 from "./Reduser2";


const reducers = combineReducers({
    reducer,
    reducer2
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
