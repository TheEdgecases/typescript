import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

class Container extends Component {

  render(){
    return (

      <Switch>
        <Route path="/cherie"/>
        <Route path="/marcus"/>
        <Route path="/vaughn"/>
        <Route path="/jordan"/>
      </Switch>

    )
  }
}

export default Container;