import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default class App extends Component {
  pageSize = 15
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News pageSize={this.pageSize} />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/additional">
              <News page={3} pageSize={this.pageSize} />
            </Route>
            <Route exact path="/climate">
              <News pageSize={this.pageSize} />
            </Route>
          </Switch>

        </BrowserRouter>

      </div>
    )
  }
}

