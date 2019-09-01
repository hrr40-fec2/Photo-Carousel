import React from 'react';
import Slider from 'react-slick';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

var Wrapper = styled.div`
  width: 50%;
  height 50%;
`;

var Slides = styled.div`
  display: flex;
  justify-content: center;
`;



export default class Carousel extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      centerPadding: 30,
      className: 'slides',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
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