import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Home from '../components/home/Home';
import notFound from '../components/notFound/NotFound';
// import NavBar from '../components/navbar/Navbar';
import SignUpContainers from '../containers/SignupContainer';
import LoginContainers from '../containers/SignInContainer';
import getRecordsContainerz from '../containers/GetRecordsContainer';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <NavBar /> */}
          <Switch>
            <Route path="/getrecords" component={getRecordsContainerz} />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUpContainers} />
            <Route path="/login" component={LoginContainers} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
