import React from "react";
import "./Books.css";

function Books({cover, title, author, link, description}) {
  return (
    <div className="books_books">
        <a href={link}><img className="books_cover" src={cover} alt={title} /></a>
      <div className="books_info">
        <h3 className="books_title">{title}</h3>
        <h5 className="books_author">{author}</h5>
        <p className="books_description">{description}</p>
      </div>
    </div>
  );
}

export default Books;