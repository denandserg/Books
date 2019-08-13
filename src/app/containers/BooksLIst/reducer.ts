import { combineReducers } from 'redux';

export interface Book {
  title: string;
}

export interface CurrencyState {
  getBooks: Book[];
}

const books = combineReducers<CurrencyState>({
  getBooks(state = [], { type, payload }: { type: string; payload: Book[] }) {
    switch (type) {
      default:
        return state;
    }
  }
});
export default books;
