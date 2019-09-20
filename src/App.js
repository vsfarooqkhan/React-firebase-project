import { BrowserRouter,Switch,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './layouts/navbar'
import './App.css';
import usersList from './users-list/usersList'
import dashboard from './dashboard/dashboard'
import signin from './auth/signin'
import signup from './auth/signup'
function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = "/" component= {dashboard}></Route>
          <Route path = "/users/:id" component={usersList} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component = {signup}></Route>
        </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
