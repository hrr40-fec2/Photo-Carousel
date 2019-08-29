import React from 'react';
import Slider from 'react-slick';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';



var Wrapper = styled.div`
  width: 100%;
  height 50%;
`;

var Slides = styled.div`
  display: flex;
  justify-content: center;
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    var imageStyle = {
      width: '100px',
      height: '100px'
    };

    return (
      <Wrapper>
        <h1>Photos</h1>
        <Slider {...settings}>
          {this.props.photos.map((photo, index) => {
            return (
              <Slides key={index}>
                <img src={photo} style={imageStyle} ></img>
              </Slides>
            )
          })}
        </Slider>
      </Wrapper>
    );
  }
}