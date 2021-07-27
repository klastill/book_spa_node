import axios from 'axios';
import React from 'react';
import Books from '../components/Books';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    book: {}
  };
  getBestList = async (max) => {
    const url = 'http://localhost:5050/api/best';
    const today = new Date();
    const date = today.getDate();
    let rn = date * 11;
    while (rn > 19) {
      rn = Math.floor(rn * 3 / 5);
    }
    const {data: {item}} = await axios.get(url, {
      params: {
        max: max,
        page: date
      }
    });
    this.setState({book: item[rn], isLoading: false});
  }
  componentDidMount() {
    this.getBestList(20);
  }
  render() {
    const {isLoading, book} = this.state;
    return (
      <section className="container ">
        {isLoading ?
        (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
        <div className="main">
          <span><h1>오늘의 추천 도서</h1></span>
          <div className="recommend">
            <Books key={book.isbn} cover={book.cover} title={book.title} author={book.author} link={book.link} description={book.description} />
          </div>
        </div>
          
        )}
      </section>
    )};
}

export default Home;
