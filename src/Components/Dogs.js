// Component for Dogs category
import React from 'react';

// Import Components used
import Nav from './Nav';
import Container from './Container';

// Passes the "dogs' query into the Container Component via props
// Returns the Nav and Container Components to the DOM
const Dogs = props => {
  return (
    <div>
      <Nav />
      <h2>{props.query}</h2>
      <Container query={"dogs"} />
    </div>
  )
}

export default Dogs;
