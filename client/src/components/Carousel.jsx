import React from 'react';
import Slider from 'react-slick';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';


var Wrapper = styled.div`
  width: 100%;
`;

const Page = styled.div`
  width: 50%;
`;
export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <Page>Page 1</Page>
        <Page>Page 2</Page>
        <Page>Page 3</Page>
      </Slider>
    );
  }
}