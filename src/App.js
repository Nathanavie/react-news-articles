import React from 'react';
import ContentContainer from './components/ContentContainer';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <article>
        <Header />
        <ContentContainer />
      </article>
    )
  }
}
export default App;
