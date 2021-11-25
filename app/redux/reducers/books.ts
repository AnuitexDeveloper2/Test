import { BooksState } from "../../types/state"

const initialState: BooksState = {
    books: [{ name: 'East of Eden', author: 'John Steinbeck' }]
}

const bookReducer = (state = initialState) => {
 return state
}

export default bookReducer