import React, { Component, Fragment } from 'react';
import './App.css';
import CurryExample from './CurryExample';
import NonCurryExample from './NonCurryExample';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CurryExample />
        <NonCurryExample />
      </Fragment>
    );
  }
}

export default App;
