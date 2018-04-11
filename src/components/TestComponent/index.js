import axios from 'axios';
import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/')
      .then(response => {
        console.log(response);
        this.setState({ result: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div />;
  }
}

export default TestComponent;
