import React from 'react';
import Title from './Title'
// import Author from './Author'
import Img from './Img'
import Desc from './Desc'
import Source from './Source'

class Content extends React.Component {

  openArticle = event => {
    console.log('clicked on article link')

  }

  openSource = e => {
    let sourceLink = this.props.source.name
    if (sourceLink.includes("BBC")) {
      window.open("https://www.bbc.co.uk/news")
    }
    if (sourceLink.includes("Sky.com")) {
      window.open("https://news.sky.com")
    }
    if (sourceLink.includes(".co.uk")) {
      window.open("https://" + sourceLink)
    }
    if (sourceLink.includes(".com")) {
      window.open("https://" + sourceLink)
    }
    if (sourceLink.includes("Independent")) {
      window.open("https://www.independent.co.uk")
    }
  }


  render() {
    let article = this.props
    if (article.urlToImage == null) {
      return(
        <section className="hidden" />
      )
    }
    return(
      <div className="articleLink">
        <a href={article.url} target="_blank">
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
        <div onClick={this.openSource} className="source">
        <Source source={article.source.name}/>
        </div>
      </div>
    )
  }
}
export default Content;
