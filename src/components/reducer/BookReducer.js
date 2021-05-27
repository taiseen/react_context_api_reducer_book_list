import { v1 as uuidV1 } from 'uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const BookReducer = (state, action) => {

    switch (action.type) {

        case ADD_BOOK:
            return [
                ...state, {
                    title: action.book.title,
                    author: action.book.author,
                    time: action.book.time,
                    id: uuidV1(),
                }
            ];

        case DELETE_BOOK:
            return state.filter(book => book.id !== action.id);

        default:
            return state;
    }
}