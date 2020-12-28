import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FavoritesPage from 'components/pages/Favorites';
import MainPage from 'components/pages/Main';
import DetailsPage from 'components/pages/Details';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/details/:id" component={DetailsPage} />
    </Switch>
  );
}

export default App;
