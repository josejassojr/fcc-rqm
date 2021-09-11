import { Component } from "react";
import { QUOTES } from "./quotes";

const lenQuotes = QUOTES.length;

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: Math.floor(Math.random() * lenQuotes)
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    // this.copyQuote = this.copyQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      index: Math.floor(Math.random() * lenQuotes)
    });
  }

  // copyQuote(quote) {
  //   const ret = quote.quote + " -" + quote.author;
  //   console.log(ret);
  //   navigator.clipboard.writeText(ret);
  // }

  render() {
    return (
      <div className="QuoteBox" id="quote-box">
        <div id="text">
          <i className="fas fa-quote-left"></i> {QUOTES[this.state.index].quote}
        </div>
        <div id="author">-{QUOTES[this.state.index].author}</div>
        <button
          id="copy-quote"
          onClick={() =>
            navigator.clipboard.writeText(
              QUOTES[this.state.index].quote +
                " -" +
                QUOTES[this.state.index].author
            )
          }
        >
          <i className="far fa-clipboard"></i>
        </button>
        <button className="btn" id="new-quote" onClick={this.getNewQuote}>
          New Quote
        </button>
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
            <i className="fab fa-twitter"></i>
          </a>
        </button>
      </div>
    );
  }
}

export default QuoteBox;
