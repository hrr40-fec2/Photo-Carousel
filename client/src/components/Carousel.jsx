import React from 'react';
import Slider from 'react-slick';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';


var Wrapper = styled.div`
  width: 100%;
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
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          {this.props.photos.map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo}></img>
              </div>
            )
          })}
        </Slider>
      </Wrapper>
    );
  }
}