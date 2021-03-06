import React, { Component } from 'react';

import Container from './Container'
import Nav from './Nav'

//Add search field feature. The field should be visible only in the 'Search' route.

export default class Search extends Component {

  // Sets a default Search State so that photos load when the browser is opened.
  state = {
    query: 'Search'
  }

  // Sets the Search state to the value of the search form input
  onSearchChange = e => {
    this.setState({ query: e.target.value });
  }

  // Submits the SearchForm with the new state
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ query: this.state.query });
    e.currentTarget.reset();
  }

  // Renders the SearchForm ...
  // ... the Nav Component ...
  // ... and the Container Component passing in props from the completed search.
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search"></label>
          <input type="search"
                 onChange={this.onSearchChange}
                 name="search"
                 ref={(input) => this.query = input}
                 placeholder="Search..." />
          <button type="submit" id="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
        <Nav />
        <h2>{this.state.query}</h2>
        <Container query={this.state.query} api={this.props.api} />
      </div>
    );

  }

}
