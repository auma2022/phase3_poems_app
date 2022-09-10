import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormPage = ({ addBooks }) => {
  let history = useHistory();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    likes: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewBook = {
      title: newBook.title,
      author: newBook.author,
      likes: 0,
    };

    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewBook),
    })
      .then((response) => response.json())
      .then(addBooks);
    setNewBook({
      title: "",
      author: "",
      likes: 0,
    });
    history.push("/books");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add new poems: </h4>

        <input
          type="text"
          placeholder="Poem Title"
          name="title"
          value={newBook.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleChange}
        ></input>
        <br />

        <input className="button" type="submit" />
      </form>
      <img
        alt="book"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIdSttbQ4eDcPQEFNLrMMPTGMG7S8oPuxpw&usqp=CAU"
      ></img>
    </div>
  );
};
export default FormPage;
