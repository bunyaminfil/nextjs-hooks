const BooksComponent = (props) => {
  return (
    <div>
      <h1>Game of Thrones Books</h1>
      {/* display books from the API */}
      {props.kitaplar && (
        <div className="books">
          {/* loop over the books */}
          {props.kitaplar.map((book, index) => (
            <div key={index}>
              <h2>{book.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksComponent;
