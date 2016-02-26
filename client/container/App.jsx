import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Voting App</h1>
        {this.props.children}
      </div>
    )
  }

};

export default connect()(App);
