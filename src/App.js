import React from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCard();
  }

  getCard() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)

      .then((data) => {
        this.setState({
          card: data[0]
        });
      });
  }

  handleClick() {
    console.log("hi");
    this.getCard();
  }

  render() {
    return (
      <div className="App">
        {this.state.card ? (
          <QuoteCard card={this.state.card} />
        ) : (
          <p>Loading</p>
        )}

        <button onClick={this.handleClick}>New quote!</button>
      </div>
    );
  }
}

export default App;