import React, { Component } from 'react';
import BookList from '../containers/book_list'
import rootReducer from '../reducers/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
