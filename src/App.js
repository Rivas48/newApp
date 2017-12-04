// Build your app components according to the provided mockup.
// Most components should be stateless functional components that focus on the UI rather than behavior.

import React from 'react';

// Set up your project with create-react-app.
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import Components
import Search from './Components/Search';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Computers from './Components/Computers';
import PageNotFound from './Components/Photos/PageNotFound';



// Import CSS styles updated to resemble the mockup
import './App.css';

  // BrowserRouter is the root routing component that keeps the UI in sync with the URL
  // Switch will only render the first path that matches the URL
  // Route renders a Component in the app when the URL matches its path.
  // Exact instructs the router to render the component only when the path matches the URL exactly.
  // If none of the paths match, a Component prop is used to render 404-like error
const App = () => (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" render={ () => (<Search />)} />
          <Route exact path="/cats" render={ () => (<Cats query={"cats"} />) } />
          <Route exact path="/dogs" render={ () => (<Dogs query={"dogs"} />)} />
          <Route exact path="/computers" render={ () => (<Computers query={"computers"} />)} />
          <Route component={PageNotFound} />
        </Switch>
        <nav/ >
      </div>

    </BrowserRouter>
);

export default App;