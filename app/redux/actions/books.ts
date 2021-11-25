import { Book } from "../../types/state"
import { ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import * as types from "./types";

export const ADD_BOOK = 'ADD_BOOK'

export const AddBookAction: ActionCreator<ThunkAction<void,null,null,types.AddBookAction>> = (book: Book) => {
    return (dispatch: Dispatch) => {
        const data= {
            type: "ADD_BOOK",
            book
        };
        dispatch(data);
    };
};