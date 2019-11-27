import React from 'react';

class Desc extends React.Component {
  render() {
    let article = this.props
    return(
        <h4>{article.desc}</h4>
    )
  }
}
export default Desc;
