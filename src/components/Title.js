import React from 'react';

class Title extends React.Component {
  render() {
    let article = this.props
    return(
      <h2>
        {article.title}
      </h2>
    )
  }
}
export default Title;
