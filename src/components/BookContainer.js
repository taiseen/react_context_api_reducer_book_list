import React, { useContext } from 'react';
import { BookContext } from './context/BookContext';
import BookList from './BookList';
import BookInput from './BookInput';

function BookContainer() {

    const { books, dispatch } = useContext(BookContext);

    return books.length ? (
        <section className="book_section">

            {
                books.map(book => <BookList book={book} dispatch={dispatch} key={book.id} />)
            }

            <BookInput />

        </section>
    ) : (
        <>
            <p className="empty">No book in your reading list</p>
            <BookInput />
        </>
    );
}

export default BookContainer;