import React, { Component } from 'react';
import Routes from './routes/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
