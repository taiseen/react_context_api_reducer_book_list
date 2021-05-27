import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducer/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {

    // get data from localStorage 
    const localData = localStorage.getItem('books');

    const allBooks = localData ? JSON.parse(localData) : [];

    const [books, dispatch] = useReducer(BookReducer, allBooks);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);


    // trying to tab sync with multiple tabs 
    window.addEventListener('storage', (e) => {

        if (e.key === 'books') {
            console.log('clicking');
            //return window.JSON.parse(localStorage.getItem('books'));
            dispatch({ type: 'RELOAD' });
        }
    });


    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;