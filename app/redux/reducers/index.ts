import { AppState } from "../../types/state";
import { combineReducers } from "redux";
import bookReducer from "./books";



const rootReducer = combineReducers<AppState>({
    booksState: bookReducer
})

export default rootReducer