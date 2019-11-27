import React from 'react';

class Author extends React.Component {
  render() {
    let article = this.props
    return(
      <div>
        <p>{article.author}</p>
      </div>
    )
  }
}
export default Author;
