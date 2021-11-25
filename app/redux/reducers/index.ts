import { combineReducers } from "redux";
import bookReducer from "./books";

const rootReducer = combineReducers({
    booksState: bookReducer
})

export default rootReducer