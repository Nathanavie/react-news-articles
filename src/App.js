import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Heading from './components/Heading'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer';
import ByKeyword from './components/ByKeyword';
import Portfolio from './components/Portfolio';
import './App.css';

class App extends React.Component {

  state = {
    activeId: 'News'
  }

  render() {
    return(
      <div>
      <Header />
        <nav className="navbar">
            <Link to={'/'} id="News" >See The News</Link>
            <Link to={'/ByKeyword'} id="Why">Why I Created This</Link>
            <Link to={'/Portfolio'} id="Portfolio">My Portfolio Site</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={ContentContainer} />
          <Route path='/ByKeyword' component={ByKeyword} />
          <Route path='/Portfolio' component={Portfolio} />
        </Switch>

      </div>
    )
  }
}
export default App;
