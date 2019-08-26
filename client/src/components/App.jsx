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
  componentDidMount() {
    // $.get(, (imageUrls) => {
    //   this.setState({
    //     images: imageUrls
    //   });
    // });
  }


  render() {
    return (
      <Carousel />
    )
  }
};