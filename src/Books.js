import EachBook from "./EachBook";
import SearchBar from "./SearchBar";

const Books = ({
  booksToDisplay,
  addReview,

  searchTerm,
  onSearch,
  handleUpdateLikes,
  handleDeleteReview,
  reviews,
}) => {
  const bookList = booksToDisplay.map((book) => (
    <EachBook
      key={book.id}
      book={book}
      addReview={addReview}
      handleUpdateLikes={handleUpdateLikes}
      handleDeleteReview={handleDeleteReview}
      reviews={reviews}
    />
  ));

  return (
    <div>
      <h6>Search here by poem title to find a poem you are looking for: </h6>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <u>
        <h1>Latest Poem Books</h1>
      </u>
      <br />
      {bookList}
    </div>
  );
};
export default Books;
