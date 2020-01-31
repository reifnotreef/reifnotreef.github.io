import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProjectsContainer from './Projects/ProjectsContainer';
import './index.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ProjectsContainer className='projects-container' />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
