// Component for Computers category
import React from 'react';

// Import Components used
import Nav from './Nav';
import Container from './Container';

// Passes the "computers' query into the Container Component via props
// Returns the Nav and Container Components to the DOM
const Computers = props => {
  return (
    <div>
      <Nav />
      <h2>{props.query}</h2>
      <Container query={"computers"} />
    </div>
  )
}

export default Computers;
