import React from 'react';
import Carousel from './Carousel.jsx';
import styled from 'styled-components';
import axios from 'axios';

var AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }


  getImages() {
    var that = this;
    axios.get('http://localhost:3000/api/allPhotos')
      .then((photos) => {
        console.log(photos)
        that.setState({
          images: photos.data
        });
      });
  }


  render() {
    return (
      <AppWrapper>
        <Carousel photos={this.state.images}/>
      </AppWrapper>
    )
  }
};