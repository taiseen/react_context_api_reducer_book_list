import { DELETE_BOOK } from './reducer/BookReducer';

function BookList({ book, dispatch }) {

    const { title, author, time, id } = book;

    return (
        <section
            className="book_reading_list"
            onClick={() => dispatch({ type: DELETE_BOOK, id })}>

            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{time}</p>

        </section>
    );
}

export default BookList;