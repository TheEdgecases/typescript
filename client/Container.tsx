import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cherie from './Containers/Cherie';
import Marcus from './Containers/Marcus';
import Vaughn from './Containers/Vaughn';
import Jordan from './Containers/Jordan';

interface ComponentProps {
  Props: object;
  State: object;
}


class Container extends Component {

  render(){
    return (
      // <div>
      //   <nav>
      //     <ul>
      //       <li>
      //         <Link to={ '/cherie' }>Cherie</Link>
      //       </li>
      //       {/* <li>
      //         <Link to={ "/marcus" }>Marcus</Link>
      //       </li>
      //       <li>
      //         <Link to={ "/vaughn" }>Vaughn</Link>
      //       </li>
      //       <li>
      //         <Link to={ "/jordan" }>Jordan</Link>
      //       </li> */}
      //     </ul>
      //   </nav>

      // <Switch>
      //   <Route path="/cherie" render={()=>{ <Cherie />}}/>
      //   {/* <Route path="/marcus" render={()=>{ <Marcus />}}/>
      //   <Route path="/vaughn" render={()=>{ <Vaughn />}}/>
      //   <Route path="/jordan" render={()=>{ <Jordan />}}/> */}
      // </Switch>

      // </div>
      <Router>
      <div>
        <nav>
          <Link to="/cherie">Cherry</Link>
          <Link to="/vaughn">Vons</Link>
          <Link to="/marcus">Marco420</Link>
          <Link to="/jordan">Jorge</Link>
        </nav>
        <Switch>
          <Route exact path="/cherie" component={Cherie} />
          <Route exact path="/vaughn" component={Vaughn} />
          <Route exact path="/marcus" component={Marcus} />
          <Route exact path="/jordan" component={Jordan} />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default Container;