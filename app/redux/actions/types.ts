import { Action } from "redux";
import { Book, BooksState } from "../../types/state";

export interface AddBookAction extends Action<"ADD_BOOK"> { book: Book }

export type BooksAction = AddBookAction