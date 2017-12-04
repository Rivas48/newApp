import React from 'react';

// If no matches are found by the search, returns a message to tell the user there are no matches.
const NoPhotos = props => (
      <li className='not-found'>
        <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
        <h3>No Results Found</h3>
        <p>Your search did not return any results. Please try again.</p>
      </li>
);

export default NoPhotos;
