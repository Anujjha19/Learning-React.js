import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component is updated");
    if (prevState.count !== this.state.count) {
      console.log("Count state has changed");
    }
  }

  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;

/* import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component has mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("Count state has been updated");
    }
  }

  componentWillUnmount() {
    console.log("Component is about to be unmounted");
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
 */



/* MAIN
import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.count !== this.state.count) {
      console.log('count has changed');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Lifecycle Methods Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default ExampleComponent;


*/