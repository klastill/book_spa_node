import axios from 'axios';
import React from 'react';
import Books from '../components/Books';
import './List.css';

class Bestseller extends React.Component {
  state = {
    isLoading: true,
    books: []
  };
  getBestList = async (max, page) => {
    const url = 'http://localhost:5050/api/best';
    const {data: {item}} = await axios.get(url, {
      params: {
        max: max,
        page: page
      }
    });
    this.setState({books: item, isLoading: false});
  }
  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const page = params.get('page');
    const max = params.get('max');
    this.getBestList(max, page);
  }
  render() {
    const {isLoading, books} = this.state;
    return (
      <section className="container ">
        {isLoading ?
        (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="books">
            {books.map(book => {
              return <Books key={book.isbn} cover={book.cover} title={book.title} author={book.author} link={book.link} description={book.description} />;
            })}
          </div>
        )}
      </section>
    )};
}

export default Bestseller;
