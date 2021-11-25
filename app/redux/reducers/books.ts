import { Reducer } from "redux";
import { Book, BooksState } from "../../types/state"
import { BooksAction } from "../actions/types";

const initialState: BooksState = {
    books: Array<Book>()
}

const bookReducer: Reducer<BooksState, BooksAction> = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BOOK":
            debugger
            return {...state, books: [...state.books, action.book]};
        default:
            return state
    }
}

export default bookReducer