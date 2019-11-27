import React from 'react';
import Header from './components/Header'
import ContentContainer from './components/ContentContainer';
import Heading from './components/Heading'
import './App.css';

class App extends React.Component {
  render() {
    return(
      <article>
        <Header />
        <Heading />
        <ContentContainer />
      </article>
    )
  }
}
export default App;
