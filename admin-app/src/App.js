import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import PrivateRoute from './components/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllCategories, getInitialData } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData())
}, []);

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path = "/" exact component={Home} />
          <PrivateRoute path = "/category" exact component={Category} />
          <PrivateRoute path="/products" component={Products}></PrivateRoute>
          <PrivateRoute path="/orders" component={Orders}></PrivateRoute>
          <Route path = "/signin" component={SignIn} />
          <Route path = "/signup" component={SignUp} />
        </Switch>
    </div>
  );
}

export default App;
