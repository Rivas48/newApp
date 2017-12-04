import React from 'react';

// Returns a 404-like error route that displays when a URL path does not match a route.
const PageNotFound = props => (
    <ul>
      <li className='not-found'>
        <i className="material-icons icn-error">error_outline</i>
        <h2>Page Not Found</h2>
      </li>
    </ul>
);

export default PageNotFound;
