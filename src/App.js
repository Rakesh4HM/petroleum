import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Items from './components/items';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './utils/common';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetails from './components/items/ItemDetails';
import {Provider} from './utils/ProviderContext';
import DailyTransaction from './components/dailyTransactions';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <Router>
      <Provider>
        <div className="App">
        <Nav />
        <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/items" exact component={Items} />
        <Route path="/dashboard/items/:id" component={ItemDetails} /> */}
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/dashboard/daily-transactions" exact component={DailyTransaction} />
        <PrivateRoute path="/dashboard/items" exact component={Items} />
        <PrivateRoute path="/dashboard/items/:id" component={ItemDetails} />
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
