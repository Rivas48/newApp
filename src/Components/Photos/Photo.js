import React from 'react';

// Creates an <li> element that is exported to the <ul> element in the PhotoList Component.
  // Contains an <img> element with a url source from props
const Photo = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default Photo;
