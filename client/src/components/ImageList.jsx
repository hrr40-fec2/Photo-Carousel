import React from 'react';
import Image from './Image.jsx';

var ImageList = (props) => {
  <div>
    {props.images.map((image) => {
      <Image image={image} />
    })}
  </div>
}