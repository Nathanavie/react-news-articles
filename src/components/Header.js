import React from 'react';

class Header extends React.Component {
  render() {
    let article = this.props
    console.log(article)
    return(
      <header>
        <img src="https://nathanatherton.com/img/logo.svg" alt="This is my default logo"/>
      </header>
    )
  }
}
export default Header;
