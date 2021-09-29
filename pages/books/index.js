import { useState, useEffect } from "react";
import BooksComponent from "../../components/BooksComponent";

function Books() {
  const [books, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    getBooks();

    // we will use async/await to fetch this data
    async function getBooks() {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();

      // store the data into our books variable
      setBooks(data);
    }
  }, []); // <- you may need to put the setBooks function in this array

  return (
    <div>
      <BooksComponent kitaplar={books} />
    </div>
  );
}

export default Books;