import React from 'react';
import Carousel from './Carousel.jsx';
import styled from 'styled-components';

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


  render() {
    return (
      <AppWrapper>
        <Carousel />
      </AppWrapper>
    )
  }
};