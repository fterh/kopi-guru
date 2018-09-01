import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';

import styleClasses from './style/jss';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styleClasses.app}>
        <header className={styleClasses.header}>
          <h1>
            <span role="img" aria-label="coffee">
              ☕
            </span>{' '}
            Kopi Guru ☕
          </h1>
        </header>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
