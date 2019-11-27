import React from 'react';
import Title from './Title'
// import Author from './Author'
import Img from './Img'
import Desc from './Desc'

class Content extends React.Component {

  openArticle = event => {
    console.log('clicked on article link')

  }


  render() {
    let article = this.props
    if (article.urlToImage == null) {
      return(
        <section className="hidden" />
      )
    }
    return(
      <a className="articleLink" href={article.url} target="_blank">
        <div className="newsArticle">
          <div className="articleImage">
          <Img img={article.urlToImage} link={article.url}/>
          </div>
          <div className="articleWording">
            <Title title={article.title}/>
            <Desc desc={article.description} />
          </div>
        </div>
      </a>
    )
  }
}
export default Content;
