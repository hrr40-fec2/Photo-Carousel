import React from 'react';
import Slider from 'react-slick';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';


var Wrapper = styled.div`
  width: 100%;
`;

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <ImageList />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}