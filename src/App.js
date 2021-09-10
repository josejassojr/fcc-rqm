import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header> Random Quote Machine </header>
        <div id="quote-box">
          Quote Box
        </div>
      </div>
    );
  }
}

export default App;
