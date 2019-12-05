import React from 'react';
import Content from './Content'
import Heading from './Heading'

class ByKeyword extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      error: null,
      isLoaded: false,
      items: [],
      country: ''
    }

    this.state = this.initialState
  }

  fetchData = (event) => {
    if (this.state.items == undefined) {
        alert('Please fill in a value')
    } else {
    console.log(this.state.country)
    let country = this.state.country
    console.log(country)
    var link = `https://newsapi.org/v2/everything?q=${country}&apiKey=e1de0dd1b4fd47ad8340f477e90210b8`
    console.log(link)
    fetch(link)
      .then(res => res.json())
      .then(json => {

          this.setState({
            isLoaded: true,
            items: json.articles
          });
          console.log('here')
          console.log(this.state.items)
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
  }

  isUndefined = event => {
    if (this.state.country == '') {
      console.log('undefined')
    } else {
      this.fetchData();
    }

  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  handlesubmit = event => {
    console.log(this.state.country)
    this.fetchData();
  }

  submitHandler = e => {
    e.preventDefault();
  }

  render() {
    const { error, isLoaded, items, country } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <>
        <form
          className="formBefore"
          autocomplete="off"
          onSubmit={this.submitHandler}
        >
        <label>What would you like your news to be about?</label>
          <input
            type="text"
            name="country"
            placeholder="Football..."
            value={country}
            onChange={this.handleChange}
            />
            <button
              type="button"
              name="submit"
              value="Retrieve News!"
              onClick={this.isUndefined}
            >
            Retrieve News!
            </button>
        </form>
      </>;
    } else {
      return (
        <>
        <Heading />
          <form onSubmit={this.submitHandler}>
          <label>What would you like your news to be about?</label>
            <input
              type="text"
              name="country"
              value={country}
              onBlur={this.isUndefined}
              onChange={this.handleChange}
              />
              <button
                type="button"
                name="submit"
                value="Retrieve News!"
              >
              Retrieve News!
              </button>
          </form>
            <div className="container">{this.state.items.map (info => <Content {...info} />)}</div>
        </>
      );
    }
  }
}
export default ByKeyword;
