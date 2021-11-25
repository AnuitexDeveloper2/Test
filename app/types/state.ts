export interface AppState {
    booksState: BooksState;
}

export  interface BooksState {
    books: Array<Book>;
}

export interface Book {
    name: string;
    author: string;
}