// Component for Cats category
import React from 'react';

// Import Components used
import Nav from './Nav';
import Container from './Container';

// Passes the "cats' query into the Container Component via props
// Returns the Nav and Container Components to the DOM
const Cats = props => {
  return (
    <div>
      <Nav />
      <h2>{props.query}</h2>
      <Container query={"cats"} />
    </div>
  )
}

export default Cats;
