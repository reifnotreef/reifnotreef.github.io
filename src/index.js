import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProjectsContainer from './Projects/ProjectsContainer';
import Header from './Header';

import './index.css';
import { Navigation } from './Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ProjectsContainer className='projects-container' />
        <Navigation />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
