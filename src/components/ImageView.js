import React from 'react';
import '../css/ImageView.css';
import BoxText from './BoxText';

function ImageView() {
  const image = require('../assets/cctv.jpeg');

  return (
    <div>
      <p>Cool Title</p>
      <img src={image} />
      <BoxText />
    </div>
  );
}

export default ImageView;
