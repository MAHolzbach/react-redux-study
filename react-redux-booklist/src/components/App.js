import React from "react";
import BookList from "../containers/book_list";
import BookDetail from "../containers/book_detail";

const App = () => {
  return (
    <div>
      <h1>Book List</h1>
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
