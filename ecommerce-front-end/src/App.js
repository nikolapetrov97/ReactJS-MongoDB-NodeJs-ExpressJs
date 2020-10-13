import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsBySlug from './components/ProductsBySlug/ProductsBySlug';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/:slug" exact component={ProductsBySlug} />
          <Route path="/user/cart" exact component={Cart} />
          <Route path="/user/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
