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
  }

  getImages() {
    axios.get('http://localhost:3000/api/allPhotos')
      .then((photos) => {
        this.setState({
          images: photos
        })
        .catch((error) => {
          console.log(error);
        });
      });
  }


  render() {
    return (
      // <AppWrapper>
      //   <Carousel />
      // </AppWrapper>
      <h1>hello world</h1>
    )
  }
};