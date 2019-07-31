import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Home from '../components/home/Home';
import notFound from '../components/notFound/NotFound';
import NavBar from '../components/navbar/Navbar';
import SignUp from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import RecordfetchComponent from '../components/records/Recordfetch';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/getrecords" component={RecordfetchComponent} />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
