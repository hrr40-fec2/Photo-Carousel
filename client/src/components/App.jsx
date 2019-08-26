import React from 'react';
import Carousel from './Carousel.jsx';
import $ from 'jquery';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }


  render() {
    return (
      <Carousel />
    )
  }
};