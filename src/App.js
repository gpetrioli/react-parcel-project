import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

/* you can use process.env.<PROPERTY FROM .env FILE> */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* dummy routing to showcase a valid setup */}
        <Router>
          <DummyComponent path="/" />
          <DummyComponent path="/path/:parameter" />
        </Router>
      </div>
    );
  }
}

/*  a dummy component to showcase what 
    props get passed from the router  */
const DummyComponent = props => (
  <code>
    <pre>
      {JSON.stringify(
        Object.assign({ "Dummy Component": true }, props),
        null,
        2
      )}
    </pre>
  </code>
);

render(<App />, document.querySelector("#root"));
