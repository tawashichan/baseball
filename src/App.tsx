import * as React from 'react';
import './App.css';

import {Debug} from "./components/Debug";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Debug/>
      </div>
    );
  }
}

export default App;
