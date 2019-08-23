import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [];
    }
  }
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
};