import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectsContainer from './Projects/ProjectsContainer';
import './index.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <side>
          <Header />
        </side>
        <main>
          <ProjectsContainer />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
