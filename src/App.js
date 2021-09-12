import { Component } from "react";
import { QUOTES } from "./quotes";

const lenQuotes = QUOTES.length;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: Math.floor(Math.random() * lenQuotes)
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      index: Math.floor(Math.random() * lenQuotes)
    });
  }

  render() {
    return (
      < div className="App" >
        <h1 className="header">
          Random Quotes
        </h1>
      <div className="QuoteBox" id="quote-box">
        <div id="quote-container">
          <div id="text">
            <i className="fas fa-quote-left"></i>{" "}
            {QUOTES[this.state.index].quote}
          </div>
          <div id="author">-{QUOTES[this.state.index].author}</div>
        </div>
        <button className="btn" id="tweet-btn">
          <a
            id="tweet-quote"
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              QUOTES[this.state.index].quote.split(" ").join("%20") +
              " -" +
              QUOTES[this.state.index].author.split(" ").join("%20") +
              "&hashtags=FCC"
            }
          >
            <i id="twitter-icon" className="fab fa-twitter"></i>
          </a>
        </button>
        <button className="btn" id="new-quote" onClick={this.getNewQuote}>
          New Quote
        </button>
      </div></ div>
    );
  }
}

export default App;
