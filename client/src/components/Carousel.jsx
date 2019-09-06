import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


// var NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "grey" }}
//       onClick={onClick}
//     />
//   );
// }

// var PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "grey" }}
//       onClick={onClick}
//     />
//   );
// }

var Wrapper = styled.div`
  width: 50%;
  height 50%;
`;

var Slides = styled.div`
  display: flex;
  justify-content: center;
`;

var Title = styled.h1`
  color: #424242;
  font: 24px Arial,sans-serif;
  font-weight: normal;
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
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />
    };

    var imageStyle = {
      width: '100px',
      height: '100px'
    };

    return (
      <Wrapper>
        <Title>Photos</Title>
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