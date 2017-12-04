import React from 'react';

// Imports the Photo and NoPhotos components
import Photo from './Photo';
import NoPhotos from './NoPhotos';

// Variables created to hold the props for data ...
// ... and query
// Variables created to hold title ...
// and ... photos

const PhotoList = props => {

  const results = props.data;
  let photos;

  // If the length of the results variable is longer than 0 ...
    // ... it maps through photo data and adds it to the photos variable ...
    // This creates an <li> element using the Photo Component and a template literal is used to add a url and data from props about each photo.
    // Else the NoPhotos Component is return instead.
  if (results.length > 0) {
    photos = results.map(photo =>
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} alt={props.title} /> );
    } else {
      photos = <NoPhotos />
    }

  // Returns a div containing...
    // ... the search query via props as a title inside a <h2> tag ...
    // ... and a <ul> tag into which is inserted the list of photos.
  return(
      <div>
        <ul>
          {photos}
        </ul>
      </div>
  );

}

export default PhotoList;
