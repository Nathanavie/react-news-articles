import React from 'react';
import Content from './Content'

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e1de0dd1b4fd47ad8340f477e90210b8')
      .then(res => res.json())
      .then(json => {

          this.setState({
            isLoaded: true,
            items: json.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <ul>
        //   {items.map(item => (
        //     <li key={item.name}>
        //       {item.name} {item.price}
        //     </li>
        //   ))}
        // </ul>
        <>
          <div className="container">{this.state.items.map (info => <Content {...info} />)}</div>
        </>
      );
    }
  }
}
export default ContentContainer;
