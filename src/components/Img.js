import React from 'react';

class Img extends React.Component {
  render() {
    let article = this.props
        return(
          <div>
          <a href={article.link} rel="noopener noreferrer" target="_blank"><img alt="Article"  src={article.img} /></a>
          </div>
        )
    }
}
export default Img;
