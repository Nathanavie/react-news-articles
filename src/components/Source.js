import React from 'react';

class Source extends React.Component {
  render() {
    let article = this.props
    return(
      <div>
        <p>{article.source}</p>
      </div>
    )
  }
}
export default Source;
