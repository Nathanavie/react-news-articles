import React from 'react';
import Content from './Content'

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      country: 'gb'
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = event => {
    console.log(this.state.country)
    let country = this.state.country
    var link = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e1de0dd1b4fd47ad8340f477e90210b8`
    fetch(link)
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

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })

  }

  handlesubmit = event => {
    this.fetchData();
  }

  render() {
    const { error, isLoaded, items, country } = this.state;
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
          <form>
          <label>Choose a country</label>
            <select className="select-css" id="test" name="country" value={country} onBlur={this.fetchData} onChange={this.handleChange}>
              <option value="ar">Argentina</option>
              <option value="au">Australia</option>
              <option value="at">Austria</option>
              <option value="be">Belgium</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="co">Colombia</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="hk">Hong Kong</option>
              <option value="ie">Ireland</option>
              <option value="it">Italy</option>
              <option value="gb">United Kingdom</option>
              <option value="us">United States</option>
            </select>

          </form>
          <div className="container">{this.state.items.map (info => <Content {...info} />)}</div>
        </>
      );
    }
  }
}
export default ContentContainer;
